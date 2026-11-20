const catalog = document.querySelector('#catalog');
const novel = document.querySelector('#novel');
const menu = document.querySelector('#game-menu');
const story = document.querySelector('#story');
const ending = document.querySelector('#ending');
const endingTitle = document.querySelector('#ending-title');
const sceneArt = document.querySelector('#scene-art');
const scenePicture = document.querySelector('#story-picture');
const routeCaption = document.querySelector('#route-caption');
const routeStep = document.querySelector('#route-step');
const shoppingLabels = document.querySelector('#shopping-labels');
const phoneProjection = document.querySelector('#phone-projection');
const sceneTitle = document.querySelector('#scene-title');
const sceneLine = document.querySelector('#scene-line');
const sceneSpeaker = document.querySelector('#speaker');
const workCall = document.querySelector('#work-call');
const workCallMessages = workCall.querySelectorAll('[data-call-message]');
const workCallDesigner = document.querySelector('#work-call-designer');
const workCallProgrammer = document.querySelector('#work-call-programmer');
const choices = document.querySelector('#choices');
const continueButton = document.querySelector('#continue');
const sceneBackButtons = document.querySelectorAll('[data-scene-back]');
const backLink = document.querySelector('#game-back');
const gamesPanel = document.querySelector('#games-panel');
const achievementsPanel = document.querySelector('#achievements-panel');
const gamesTab = document.querySelector('#games-tab');
const achievementsTab = document.querySelector('#achievements-tab');
const storyMapPanel = document.querySelector('#story-map-panel');
const storyMapTab = document.querySelector('#story-map-tab');
const resumeButton = document.querySelector('#resume-decision');
const resumeDetail = document.querySelector('#resume-detail');
const storyEndingBranches = storyMapPanel.querySelectorAll('[data-story-endings]');
const endingPreview = document.querySelector('#ending-preview');
const endingPreviewTitle = document.querySelector('#ending-preview-title');
const endingPreviewArt = document.querySelector('#ending-preview-art');
const achievementList = document.querySelector('#achievement-list');
const achievementProgress = document.querySelector('#achievement-progress');
const endingAward = document.querySelector('#ending-award');
const gameOverTitle = document.querySelector('#game-over-title');
const dianaChat = document.querySelector('#diana-chat');
const chatMessages = document.querySelector('#chat-messages');
const phoneScoreboard = document.querySelector('#phone-scoreboard');
const phoneRoundLabel = document.querySelector('#phone-round-label');
const phoneScore = document.querySelector('#phone-score');
const answerFeedback = document.querySelector('#answer-feedback');

const dialogue = document.querySelector('#dialogue');
const thoughtBubble = document.querySelector('#thought-bubble');
const thoughtText = document.querySelector('#thought-text');
const thoughtMoney = document.querySelector('#thought-money');
const fingerMovement = document.querySelector('#finger-movement');
const intertitle = document.querySelector('#intertitle');
const intertitleArt = document.querySelector('#intertitle-art');
const intertitleNext = document.querySelector('#intertitle-next');
const intertitleSound = document.querySelector('#intertitle-sound');
const intertitleAudio = document.querySelector('#intertitle-audio');
const intertitleStatus = document.querySelector('#intertitle-status');

const endingsStorageKey = 'minigames.seryozha.endings';
const decisionStorageKey = 'minigames.seryozha.last-decision';
const unlockedEndings = new Set();
const hiddenEndingTitle = '????????????';
let phoneQuiz;
let lastDecision;
let pendingStoryStart;

function rememberDecision(scene, phone) {
  lastDecision = phone ? { scene, phone: { index: phone.index, correct: phone.correct } } : { scene };
  try {
    localStorage.setItem(decisionStorageKey, JSON.stringify(lastDecision));
  } catch {
    // The last decision still works within the current visit.
  }
}

function renderLastDecision() {
  try {
    const saved = JSON.parse(localStorage.getItem(decisionStorageKey) ?? 'null');
    if (saved && Object.hasOwn(scenes, saved.scene)) {
      const { scene, phone } = saved;
      if (scenes[scene].options) {
        lastDecision = { scene };
      } else if (scenes[scene].quiz && phone &&
        Number.isInteger(phone.index) && phone.index >= 0 && phone.index < phoneRounds.length &&
        Number.isInteger(phone.correct) && phone.correct >= 0 && phone.correct <= phone.index) {
        lastDecision = { scene, phone };
      }
    }
  } catch {
    // A blocked or invalid save can be replaced by playing to a decision.
  }

  resumeButton.disabled = !lastDecision;
  if (!lastDecision) {
    resumeDetail.textContent = 'Появится после первой развилки.';
  } else if (lastDecision.phone) {
    resumeDetail.textContent = `Телефон · раунд ${lastDecision.phone.index + 1} из ${phoneRounds.length}`;
  } else {
    resumeDetail.textContent = scenes[lastDecision.scene].title;
  }
}

function openStoryAt(start) {
  pendingStoryStart = start;
  window.location.hash = '#seryozha';
}

function readEndings() {
  try {
    const saved = JSON.parse(localStorage.getItem(endingsStorageKey) ?? '[]');
    if (!Array.isArray(saved)) return;
    for (const { id } of endings) {
      if (saved.includes(id)) unlockedEndings.add(id);
    }
  } catch {
    // A blocked or invalid browser save still allows progress in the current visit.
  }
}

function unlockEnding(id) {
  readEndings();
  unlockedEndings.add(id);
  try {
    localStorage.setItem(endingsStorageKey, JSON.stringify([...unlockedEndings]));
  } catch {
    // Keep the unlock available in this visit if the browser blocks writes.
  }
}

function endingLabel(result) {
  const type = result.intermediate ? 'Промежуточная концовка' : 'Концовка';
  return `${type} #${result.number}`;
}

function endingCard(result, unlocked, headingTag, preview = false) {
  const card = document.createElement('article');
  card.className = 'result-card';
  const thumbnail = document.createElement('div');
  thumbnail.className = 'result-art';
  if (unlocked) {
    const img = document.createElement('img');
    img.src = artPath(result.art);
    img.alt = '';
    thumbnail.append(img);
  } else {
    thumbnail.classList.add('result-locked', `silhouette-${result.id}`);
    thumbnail.setAttribute('aria-label', 'Концовка ещё не открыта');
    thumbnail.setAttribute('role', 'img');
  }
  const info = document.createElement('div');
  info.className = 'result-info';
  const number = document.createElement('p');
  number.className = 'genre';
  number.textContent = endingLabel(result);
  const title = document.createElement(headingTag);
  title.textContent = unlocked ? result.title : hiddenEndingTitle;
  info.append(number, title);
  card.append(thumbnail, info);
  if (unlocked && preview) {
    const trigger = document.createElement('button');
    trigger.className = 'result-preview-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', `Увеличить изображение: ${endingLabel(result).toLowerCase()} «${result.title}»`);
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', () => showEndingPreview(result));
    card.append(trigger);
  }
  return card;
}

function renderAchievements() {
  readEndings();
  achievementProgress.textContent = `Открыто ${unlockedEndings.size} из ${endings.length}`;
  achievementList.replaceChildren(...endings.map(
    (result) => endingCard(result, unlockedEndings.has(result.id), 'h4'),
  ));
}

function showEndingPreview(result) {
  endingPreviewTitle.textContent = `${endingLabel(result)} «${result.title}»`;
  endingPreviewArt.src = artPath(result.art);
  endingPreviewArt.alt = scenes[result.art].alt;
  endingPreview.showModal();
}

function renderStoryEndings() {
  readEndings();
  for (const branch of storyEndingBranches) {
    const leaves = endings.filter((result) => result.branch === branch.dataset.storyEndings);
    branch.replaceChildren(...leaves.map((result) => {
      const leaf = document.createElement('li');
      const card = endingCard(result, unlockedEndings.has(result.id), 'h4', true);
      card.classList.add('story-tree-node');
      leaf.append(card);
      return leaf;
    }));
  }
}

function renderDianaChat(reply) {
  const makeMessage = (text, fromDiana = false) => {
    const message = document.createElement('li');
    message.className = fromDiana ? 'chat-incoming' : 'chat-outgoing';
    message.textContent = text;
    return message;
  };
  const heart = makeMessage('❤️', true);
  heart.setAttribute('aria-label', 'Диана отправила красное сердце');
  chatMessages.replaceChildren(...phoneRounds.map(({ message }) => makeMessage(message)), heart);
  if (reply) {
    const message = makeMessage('', true);
    const quote = document.createElement('blockquote');
    quote.textContent = phoneRounds.at(-1).message;
    const answer = document.createElement('p');
    answer.textContent = reply;
    message.replaceChildren(quote, answer);
    chatMessages.append(message);
  }
}

function addChoice(label, onClick) {
  const button = document.createElement('button');
  button.className = 'choice';
  button.type = 'button';
  button.textContent = label;
  button.addEventListener('click', () => onClick(button));
  choices.append(button);
}

function updatePhoneScore() {
  phoneScore.textContent = `${phoneQuiz.correct}/${phoneRounds.length} правильных выборов`;
}

function renderPhoneRound() {
  activePosition.phone = { index: phoneQuiz.index, correct: phoneQuiz.correct };
  rememberDecision('phone-quiz', phoneQuiz);
  updateSceneBack();
  const round = phoneRounds[phoneQuiz.index];
  phoneRoundLabel.textContent = `Раунд ${phoneQuiz.index + 1} из ${phoneRounds.length}`;
  phoneRoundLabel.hidden = false;
  updatePhoneScore();
  choices.replaceChildren();
  phoneQuiz.answered = false;
  answerFeedback.hidden = true;
  answerFeedback.textContent = '';
  continueButton.hidden = true;
  addChoice(round.label, (button) => answerPhoneRound(button, true));
  addChoice(round.alternative, (button) => answerPhoneRound(button, false));
}

function answerPhoneRound(button, correct) {
  if (phoneQuiz.answered) return;
  phoneQuiz.answered = true;
  phoneQuiz.correct += Number(correct);
  updatePhoneScore();

  for (const choice of choices.children) choice.disabled = true;
  button.classList.add(correct ? 'choice-correct' : 'choice-incorrect');
  const icon = document.createElement('span');
  icon.className = 'choice-result-icon';
  icon.textContent = correct ? '✓' : '✕';
  icon.setAttribute('aria-hidden', 'true');
  button.append(icon);
  answerFeedback.textContent = correct ? 'Правильный выбор' : 'Неправильный выбор';
  answerFeedback.className = `answer-feedback ${correct ? 'feedback-correct' : 'feedback-incorrect'}`;
  answerFeedback.hidden = false;
  continueButton.textContent = phoneQuiz.index === phoneRounds.length - 1 ? 'Посмотреть результат' : 'Следующий раунд';
  continueButton.hidden = false;
  continueButton.focus();
}

function advancePhoneRound() {
  if (!phoneQuiz.answered) return;
  if (phoneQuiz.index + 1 < phoneRounds.length) {
    sceneHistory.push(activePosition);
    activePosition = { key: activePosition.key };
    phoneQuiz.index += 1;
    renderPhoneRound();
    sceneTitle.focus({ preventScroll: true });
    return;
  }

  const { correct } = phoneQuiz;
  goToScene(correct === 0 ? 'phone-game-over' : correct === phoneRounds.length ? 'phone-chat' : 'phone-loop');
}

function showScreen(screen) {
  if (screen !== 'story') {
    stopRouteAnimation();
    if (!intertitle.hidden) intertitleAudio.pause();
  }
  catalog.hidden = screen !== 'catalog';
  novel.hidden = screen === 'catalog';
  menu.hidden = screen !== 'menu';
  story.hidden = screen !== 'story';
  ending.hidden = screen !== 'ending';
  novel.classList.toggle('is-ending', screen === 'ending');
  backLink.href = screen === 'menu' ? '#' : '#seryozha';
  backLink.textContent = screen === 'menu' ? 'К играм' : 'В меню игры';
}

const preloadedArt = new Set();
let activeScene;
let activePosition;
const sceneHistory = [];

function updateSceneBack() {
  for (const button of sceneBackButtons) button.disabled = !sceneHistory.length;
}

function startStory(key, options) {
  sceneHistory.length = 0;
  renderScene(key, options);
}

function goToScene(key, options) {
  sceneHistory.push(activePosition);
  renderScene(key, options);
}

function goBackScene() {
  const previous = sceneHistory.pop();
  if (previous) renderScene(previous.key, { phone: previous.phone });
}

function artPath(art) {
  let folder = 'route/';
  if (['wake', 'coffee', 'tea'].includes(art)) folder = '';
  if (art.startsWith('phone-')) folder = 'endings/';
  if (art.startsWith('shift-')) folder = 'shift/';
  if (art.startsWith('diana-')) folder = 'diana/';
  return `assets/${folder}${art}.webp`;
}

function preloadScene(key) {
  const { art, poster } = scenes[key];
  const path = poster ?? (art && artPath(art));
  if (!path || preloadedArt.has(path)) return;
  preloadedArt.add(path);
  new Image().src = path;
}

function renderIntertitle(scene) {
  const visible = Boolean(scene.intertitle);
  if (!intertitle.hidden) intertitleAudio.pause();
  intertitle.hidden = !visible;
  dialogue.hidden = visible;
  if (!visible) return;

  intertitleArt.src = scene.poster;
  intertitleArt.alt = scene.title;
  intertitleStatus.textContent = '';
  intertitleSound.setAttribute('aria-pressed', 'false');
  if (intertitleAudio.getAttribute('src') !== scene.audio) intertitleAudio.src = scene.audio;
  intertitleAudio.currentTime = 0;
}

function renderWorkCall(stage) {
  workCall.hidden = stage === undefined;
  if (workCall.hidden) return;

  for (const message of workCallMessages) {
    const cue = scenes[message.dataset.callMessage];
    message.hidden = cue.callStage > stage;
    message.querySelector('span').textContent = cue.line;
  }
  workCallProgrammer.classList.toggle('work-person-speaking', stage === 1);
  workCallDesigner.classList.toggle('work-person-speaking', stage === 2);
}

function renderScene(key, { phone, remember = true } = {}) {
  const scene = scenes[key];
  activeScene = scene;
  activePosition = { key };
  updateSceneBack();
  if (remember && scene.options) rememberDecision(key);
  renderIntertitle(scene);
  renderWorkCall(scene.callStage);
  scenePicture.hidden = Boolean(scene.intertitle) || !workCall.hidden;
  thoughtBubble.hidden = !scene.thought;
  thoughtBubble.classList.toggle('thought-angry', Boolean(scene.thought?.angry));
  thoughtMoney.hidden = !scene.thought?.money;
  thoughtText.textContent = scene.thought?.text ?? '';
  fingerMovement.hidden = scene.prop !== 'finger';
  if (scene.quiz) {
    phoneQuiz = { index: 0, correct: 0, ...phone, answered: false };
    for (const next of ['phone-game-over', 'phone-chat', 'phone-loop']) preloadScene(next);
  } else if (phone) {
    phoneQuiz = { ...phone };
  }
  const showScore = scene.quiz || scene.phoneResult || scene.prop === 'chat';
  phoneScoreboard.hidden = !showScore;
  phoneRoundLabel.hidden = !scene.quiz;
  if (showScore) {
    activePosition.phone = { index: phoneQuiz.index, correct: phoneQuiz.correct };
    updatePhoneScore();
  }
  answerFeedback.hidden = true;
  gameOverTitle.hidden = scene.ending !== 'game-over';
  endingAward.hidden = !scene.ending;
  dianaChat.hidden = scene.prop !== 'chat';
  scenePicture.classList.toggle('has-ending-award', Boolean(scene.ending));
  scenePicture.classList.toggle('has-chat', scene.prop === 'chat');
  if (scene.ending) {
    unlockEnding(scene.ending);
    const result = endings.find(({ id }) => id === scene.ending);
    endingAward.replaceChildren(endingCard(result, true, 'h2'));
  }
  if (scene.prop === 'chat') renderDianaChat(scene.dianaReply);
  scenePicture.classList.toggle('is-dull-view', scene.prop === 'dull-view');
  scenePicture.classList.toggle('is-rain-reveal', scene.prop === 'rain-reveal');
  const onRoute = scene.routeIndex !== undefined;
  scenePicture.classList.toggle('is-route', onRoute);
  routeMap.hidden = !onRoute;
  routeCaption.hidden = !onRoute;
  shoppingLabels.hidden = scene.prop !== 'shopping';
  phoneProjection.hidden = scene.prop !== 'phone';

  if (scene.art) {
    sceneArt.src = artPath(scene.art);
    sceneArt.alt = scene.alt;
  }
  sceneTitle.textContent = scene.title;
  sceneSpeaker.textContent = scene.speaker ?? 'Серёжа';
  sceneLine.hidden = !scene.line || scene.callStage > 0;
  sceneLine.textContent = scene.line ?? '';
  choices.replaceChildren();
  for (const [label, next] of scene.options ?? []) {
    addChoice(label, () => goToScene(next));
    preloadScene(next);
  }
  if (scene.next) preloadScene(scene.next);
  choices.hidden = !scene.options && !scene.quiz;
  continueButton.hidden = Boolean(scene.options);
  continueButton.textContent = scene.continueLabel ?? 'Дальше';
  if (scene.quiz) renderPhoneRound();
  showScreen('story');
  if (onRoute) {
    routeStep.textContent = `${scene.routeIndex + 1} / ${workTrip.length}`;
    routeMap.setAttribute('aria-label', `Путь Серёжи из Пигелево. Сейчас: ${scene.title}.`);
    showRouteStop(scene.routeIndex);
  } else {
    stopRouteAnimation();
  }
  (scene.intertitle ? intertitleNext : sceneTitle).focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function syncRoute(moveFocus = false) {
  const hash = window.location.hash;
  const inGame = hash === '#seryozha';
  const inAchievements = hash === '#achievements';
  const inStoryMap = hash === '#story-map';
  const highlightedTab = inStoryMap ? storyMapTab : inAchievements ? achievementsTab : gamesTab;
  for (const tab of [gamesTab, achievementsTab, storyMapTab]) tab.removeAttribute('aria-current');
  highlightedTab.setAttribute('aria-current', 'page');
  gamesPanel.hidden = inAchievements || inStoryMap;
  achievementsPanel.hidden = !inAchievements;
  storyMapPanel.hidden = !inStoryMap;
  if (inAchievements) renderAchievements();
  if (inStoryMap) {
    renderLastDecision();
    renderStoryEndings();
  } else if (endingPreview.open) {
    endingPreview.close();
  }

  const pageTitle = inStoryMap ? 'Карта сюжета' : inAchievements ? 'Достижения' : 'День Серёжи';
  document.title = inGame || inAchievements || inStoryMap ? `${pageTitle} — Minigames` : 'Minigames';
  const start = pendingStoryStart;
  pendingStoryStart = undefined;
  if (inGame && start) {
    startStory(start.scene, { phone: start.phone });
    return;
  }

  showScreen(inGame ? 'menu' : 'catalog');
  if (moveFocus) {
    const focusTarget = inGame ? '#menu-title' : inStoryMap ? '#story-map-title' : inAchievements ? '#achievements-title' : '#games-tab';
    document.querySelector(focusTarget).focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

for (const start of storyMapPanel.querySelectorAll('[data-story-start]')) {
  start.addEventListener('click', () => openStoryAt({ scene: start.dataset.storyStart }));
}
resumeButton.addEventListener('click', () => {
  if (lastDecision) openStoryAt(lastDecision);
});

for (const button of sceneBackButtons) button.addEventListener('click', goBackScene);

document.querySelector('#play').addEventListener('click', () => startStory('morning'));
continueButton.addEventListener('click', () => {
  if (activeScene.quiz) {
    advancePhoneRound();
    return;
  }
  if (activeScene.next) {
    goToScene(activeScene.next, { remember: activeScene.ending !== 'time-loop' });
    return;
  }

  sceneHistory.push(activePosition);
  updateSceneBack();
  endingTitle.textContent = activeScene.endCard ?? 'Soon ...';
  endingTitle.lang = activeScene.endCardLang ?? 'en';
  showScreen('ending');
  endingTitle.focus();
});
intertitleNext.addEventListener('click', () => goToScene(activeScene.next));
intertitleSound.addEventListener('click', () => {
  if (!intertitleAudio.paused) {
    intertitleAudio.pause();
    return;
  }

  intertitleStatus.textContent = '';
  intertitleAudio.currentTime = 0;
  intertitleAudio.play().catch((error) => {
    if (!intertitle.hidden && !story.hidden && error.name !== 'AbortError') {
      intertitleStatus.textContent = 'Озвучку не удалось воспроизвести.';
    }
  });
});
for (const event of ['play', 'pause', 'ended']) {
  intertitleAudio.addEventListener(event, () => {
    intertitleSound.setAttribute('aria-pressed', String(!intertitleAudio.paused && !intertitleAudio.ended));
  });
}
novel.addEventListener('click', (event) => {
  if (event.target.closest('a[href="#seryozha"]') && window.location.hash === '#seryozha') {
    event.preventDefault();
    syncRoute(true);
  }
});
document.querySelector('#close-ending-preview').addEventListener('click', () => endingPreview.close());
endingPreview.addEventListener('click', (event) => {
  if (event.target === endingPreview) endingPreview.close();
});
window.addEventListener('hashchange', () => syncRoute(true));
window.addEventListener('storage', (event) => {
  if (event.key === endingsStorageKey && window.location.hash === '#achievements') renderAchievements();
  if (event.key === endingsStorageKey && window.location.hash === '#story-map' && !endingPreview.open) renderStoryEndings();
  if (event.key === decisionStorageKey && window.location.hash === '#story-map') renderLastDecision();
});
syncRoute();
