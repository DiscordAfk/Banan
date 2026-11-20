const catalog = document.querySelector('#catalog');
const novel = document.querySelector('#novel');
const menu = document.querySelector('#game-menu');
const story = document.querySelector('#story');
const ending = document.querySelector('#ending');
const sceneArt = document.querySelector('#scene-art');
const scenePicture = document.querySelector('#story-picture');
const routeCaption = document.querySelector('#route-caption');
const routeStep = document.querySelector('#route-step');
const shoppingLabels = document.querySelector('#shopping-labels');
const phoneProjection = document.querySelector('#phone-projection');
const sceneTitle = document.querySelector('#scene-title');
const sceneLine = document.querySelector('#scene-line');
const choices = document.querySelector('#choices');
const continueButton = document.querySelector('#continue');
const backLink = document.querySelector('#game-back');
const gamesPanel = document.querySelector('#games-panel');
const achievementsPanel = document.querySelector('#achievements-panel');
const gamesTab = document.querySelector('#games-tab');
const achievementsTab = document.querySelector('#achievements-tab');
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
const unlockedEndings = new Set();
const hiddenEndingTitle = '????????????';
let phoneQuiz;

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

function endingCard(result, unlocked, headingTag) {
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
  number.textContent = `Концовка #${result.number}`;
  const title = document.createElement(headingTag);
  title.textContent = unlocked ? result.title : hiddenEndingTitle;
  info.append(number, title);
  card.append(thumbnail, info);
  return card;
}

function renderAchievements() {
  readEndings();
  achievementProgress.textContent = `Открыто ${unlockedEndings.size} из ${endings.length}`;
  achievementList.replaceChildren(...endings.map(
    (result) => endingCard(result, unlockedEndings.has(result.id), 'h4'),
  ));
}

function renderDianaChat() {
  const makeMessage = (text, fromDiana = false) => {
    const message = document.createElement('li');
    message.className = fromDiana ? 'chat-incoming' : 'chat-outgoing';
    message.textContent = text;
    if (fromDiana) message.setAttribute('aria-label', 'Диана отправила красное сердце');
    return message;
  };
  chatMessages.replaceChildren(
    ...phoneRounds.map(({ message }) => makeMessage(message)),
    makeMessage('❤️', true),
  );
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
    phoneQuiz.index += 1;
    renderPhoneRound();
    sceneTitle.focus({ preventScroll: true });
    return;
  }

  const { correct } = phoneQuiz;
  renderScene(correct === 0 ? 'phone-game-over' : correct === phoneRounds.length ? 'phone-chat' : 'phone-loop');
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

function artPath(art) {
  let folder = 'route/';
  if (['wake', 'coffee', 'tea'].includes(art)) folder = '';
  if (art.startsWith('phone-')) folder = 'endings/';
  if (art.startsWith('shift-')) folder = 'shift/';
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
  scenePicture.hidden = visible;
  dialogue.hidden = visible;
  if (!visible) return;

  intertitleArt.src = scene.poster;
  intertitleStatus.textContent = '';
  intertitleSound.setAttribute('aria-pressed', 'false');
  if (intertitleAudio.getAttribute('src') !== scene.audio) intertitleAudio.src = scene.audio;
  intertitleAudio.currentTime = 0;
}

function renderScene(key) {
  const scene = scenes[key];
  activeScene = scene;
  renderIntertitle(scene);
  thoughtBubble.hidden = !scene.thought;
  thoughtBubble.classList.toggle('thought-angry', Boolean(scene.thought?.angry));
  thoughtMoney.hidden = !scene.thought?.money;
  thoughtText.textContent = scene.thought?.text ?? '';
  fingerMovement.hidden = scene.prop !== 'finger';
  if (scene.quiz) {
    phoneQuiz = { index: 0, correct: 0, answered: false };
    for (const next of ['phone-game-over', 'phone-chat', 'phone-loop']) preloadScene(next);
  }
  const showScore = scene.quiz || scene.ending || scene.prop === 'chat';
  phoneScoreboard.hidden = !showScore;
  phoneRoundLabel.hidden = !scene.quiz;
  if (showScore) updatePhoneScore();
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
  if (scene.prop === 'chat') renderDianaChat();
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
  sceneLine.textContent = scene.line;
  choices.replaceChildren();
  for (const [label, next] of scene.options ?? []) {
    addChoice(label, () => renderScene(next));
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
  showScreen(inGame ? 'menu' : 'catalog');
  gamesPanel.hidden = inAchievements;
  achievementsPanel.hidden = !inAchievements;
  gamesTab.toggleAttribute('aria-current', !inAchievements);
  achievementsTab.toggleAttribute('aria-current', inAchievements);
  (inAchievements ? achievementsTab : gamesTab).setAttribute('aria-current', 'page');
  if (inAchievements) renderAchievements();
  document.title = inGame ? 'День Серёжи — Minigames' : inAchievements ? 'Достижения — Minigames' : 'Minigames';
  if (moveFocus) {
    const focusTarget = inGame ? '#menu-title' : inAchievements ? '#achievements-title' : '#games-tab';
    document.querySelector(focusTarget).focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

document.querySelector('#play').addEventListener('click', () => renderScene('morning'));
continueButton.addEventListener('click', () => {
  if (activeScene.quiz) {
    advancePhoneRound();
    return;
  }
  if (activeScene.next) {
    renderScene(activeScene.next);
    return;
  }

  showScreen('ending');
  document.querySelector('#ending-title').focus();
});
intertitleNext.addEventListener('click', () => renderScene(activeScene.next));
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
window.addEventListener('hashchange', () => syncRoute(true));
window.addEventListener('storage', (event) => {
  if (event.key === endingsStorageKey && window.location.hash === '#achievements') renderAchievements();
});
syncRoute();
