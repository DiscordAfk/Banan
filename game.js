const catalog = document.querySelector('#catalog');
const novel = document.querySelector('#novel');
const menu = document.querySelector('#game-menu');
const gameAccessForm = document.querySelector('#game-access-form');
const gameAccessInput = document.querySelector('#game-access-code');
const gameAccessStatus = document.querySelector('#game-access-status');
const gameAccessSubmit = gameAccessForm.querySelector('button');
const playButton = document.querySelector('#play');
const story = document.querySelector('#story');
const ending = document.querySelector('#ending');
const endingArt = document.querySelector('#ending-art');
const endingTitle = document.querySelector('#ending-title');
const endingNote = document.querySelector('#ending-note');
const sceneArt = document.querySelector('#scene-art');
const stormLight = document.querySelector('#storm-light');
const sceneAudio = document.querySelector('#scene-audio');
const rewardAudio = document.querySelector('#reward-audio');
const doorNameplate = document.querySelector('#door-nameplate');
const scenePicture = document.querySelector('#story-picture');
const holdemPanel = document.querySelector('#holdem-panel');
const holdemBet = document.querySelector('#holdem-bet');
const routeCaption = document.querySelector('#route-caption');
const routeStep = document.querySelector('#route-step');
const shoppingLabels = document.querySelector('#shopping-labels');
const ozonNametags = document.querySelector('#ozon-nametags');
const phoneProjection = document.querySelector('#phone-projection');
const sceneTitle = document.querySelector('#scene-title');
const sceneLine = document.querySelector('#scene-line');
const sceneSpeaker = document.querySelector('#speaker');
const workCall = document.querySelector('#work-call');
const workCallMessages = workCall.querySelectorAll('[data-call-message]');
const workCallDesigner = document.querySelector('#work-call-designer');
const workCallProgrammer = document.querySelector('#work-call-programmer');
const workCallStreamLabel = document.querySelector('#work-call-stream-label');
const workCallLiveBadges = workCall.querySelectorAll('.work-call-live');
const choices = document.querySelector('#choices');
const continueButton = document.querySelector('#continue');
const sceneBackButtons = document.querySelectorAll('[data-scene-back]');
const backLink = document.querySelector('#game-back');
const gameLabel = novel.querySelector('#game-label');
const gameMapLink = novel.querySelector('.game-map-link');
const novelTabs = novel.querySelector('#novel-tabs');
const achievementsPanel = document.querySelector('#achievements-panel');
const achievementsTab = document.querySelector('#achievements-tab');
const dlcPanel = document.querySelector('#dlc-panel');
const dlcTab = document.querySelector('#dlc-tab');
const dlcList = document.querySelector('#dlc-list');
const dlcCardTemplate = document.querySelector('#dlc-card-template');
const dlcMenuPanel = document.querySelector('#dlc-menu-panel');
const dlcOverview = document.querySelector('#dlc-overview');
const dlcMenuTitle = document.querySelector('#dlc-menu-title');
const dlcMenuCover = document.querySelector('#dlc-menu-cover');
const playDlcButton = document.querySelector('#play-dlc');
const dlcRoadmap = document.querySelector('#dlc-roadmap');
const dlcAchievementList = document.querySelector('#dlc-achievement-list');
const dlcAchievementProgress = document.querySelector('#dlc-achievement-progress');
const dlcAchievementsEmpty = document.querySelector('#dlc-achievements-empty');
const dlcCheckpoints = new Set(downloadableStories
  .flatMap(({ roadmap = [] }) => roadmap.slice(1))
  .map(({ scene }) => scene)
  .filter(Boolean));
const dlcSections = {
  achievements: { tab: document.querySelector('#dlc-achievements-tab'), panel: document.querySelector('#dlc-achievements-panel') },
  'story-map': { tab: document.querySelector('#dlc-story-map-tab'), panel: document.querySelector('#dlc-story-map-panel') },
};
const charactersPanel = document.querySelector('#characters-panel');
const charactersTab = document.querySelector('#characters-tab');
const characterList = document.querySelector('#character-list');
const characterStoryPanel = document.querySelector('#character-story-panel');
const characterStoryTitle = document.querySelector('#character-story-title');
const characterStoryPortrait = document.querySelector('#character-story-portrait');
const characterStoryQualifier = document.querySelector('#character-story-qualifier');
const characterStoryEpisodes = document.querySelector('#character-story-episodes');
const characterStoryEmpty = document.querySelector('#character-story-empty');
const characterStoryPlay = document.querySelector('#character-story-play');
const endingMapLink = document.querySelector('#ending-map-link');
const characterProfile = document.querySelector('#character-profile');
const characterProfileBody = document.querySelector('#character-profile-body');
const characterRevealAudio = document.querySelector('#character-reveal-audio');
const storyMapPanel = document.querySelector('#story-map-panel');
const storyMapTab = document.querySelector('#story-map-tab');
const storyStarts = new Map(Array.from(storyMapPanel.querySelectorAll('[data-story-start]'),
  (button) => [button.dataset.storyStart, button]));
const resumeButton = document.querySelector('#resume-decision');
const resumeDetail = document.querySelector('#resume-detail');
const storyEndingBranches = storyMapPanel.querySelectorAll('[data-story-endings]');
const storyAchievementBranches = storyMapPanel.querySelectorAll('[data-story-achievements]');
const endingPreview = document.querySelector('#ending-preview');
const endingPreviewTitle = document.querySelector('#ending-preview-title');
const endingPreviewArt = document.querySelector('#ending-preview-art');
const settingsDialog = document.querySelector('#settings');
const developerTools = document.querySelector('#developer-tools');
const developerAccessForm = document.querySelector('#developer-access-form');
const developerCode = document.querySelector('#developer-code');
const developerCodeStatus = document.querySelector('#developer-code-status');
const developerActions = document.querySelector('#developer-actions');
const developerUnlock = document.querySelector('#developer-unlock');
const developerUnlockCharacters = document.querySelector('#developer-unlock-characters');
const developerSaveAchievements = document.querySelector('#developer-save-achievements');
const developerSceneMap = document.querySelector('#developer-scene-map');
const developerSceneForm = document.querySelector('#developer-scene-form');
const developerSceneFilter = document.querySelector('#developer-scene-filter');
const developerSceneList = document.querySelector('#developer-scene-list');
const developerSceneStatus = document.querySelector('#developer-scene-status');
const muteSound = document.querySelector('#mute-sound');
const requestProgressReset = document.querySelector('#request-progress-reset');
const progressResetConfirmation = document.querySelector('#progress-reset-confirmation');
const cancelProgressReset = document.querySelector('#cancel-progress-reset');
const achievementList = document.querySelector('#achievement-list');
const achievementProgress = document.querySelector('#achievement-progress');
const achievementAward = document.querySelector('#achievement-award');
const endingAward = document.querySelector('#ending-award');
const gameOverTitle = document.querySelector('#game-over-title');
const dianaChat = document.querySelector('#diana-chat');
const dianaChatName = document.querySelector('#diana-chat-name');
const ozonChat = document.querySelector('#ozon-chat');
const ozonChatName = document.querySelector('#ozon-chat-name');
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
const blenderLaunch = document.querySelector('#blender-launch');
const blenderWorkspace = document.querySelector('#blender-workspace');
const blenderChat = document.querySelector('#blender-chat');
const blenderDraft = document.querySelector('#blender-draft');
const blenderDimaScreen = document.querySelector('#blender-dima-screen');
const blenderModelProgress = document.querySelector('#blender-model-progress');
const blenderFiles = document.querySelector('#blender-files');
const blenderProjectLabels = document.querySelector('#blender-project-labels');
const dioramaCheck = document.querySelector('#blender-diorama-check');
const dioramaPhoto = document.querySelector('#diorama-photo');
const dioramaSelection = document.querySelector('#diorama-selection');
const dioramaCubes = document.querySelector('#diorama-cubes');
const dioramaFirstCube = document.querySelector('#diorama-first-cube');
const dioramaTitle = document.querySelector('#diorama-screen-title');
const dioramaNote = document.querySelector('#diorama-screen-note');
const nightClockCard = document.querySelector('#night-clock-card');
const nightTimeBadge = document.querySelector('#night-time-badge');
const nightPhoneNote = document.querySelector('#night-phone-note');
const nightPhoneSource = document.querySelector('#night-phone-source');
const nightPhoneText = document.querySelector('#night-phone-text');
const nightPhoneSecond = document.querySelector('#night-phone-second');
const sleepBubble = document.querySelector('#sleep-bubble');
const nightDiscord = document.querySelector('#night-discord');
const nightDiscordPlayers = document.querySelector('#night-discord-players');
const nightDiscordShots = document.querySelector('#night-discord-shots');
const nightVideoScroll = document.querySelector('#night-video-scroll');
const nightCharacterSwitch = document.querySelector('#night-character-switch');
const nightGameName = document.querySelector('#night-game-name');
const nightVoice = document.querySelector('#night-voice');
const nightVoiceGrid = document.querySelector('#night-voice-grid');
const nightVoiceCount = document.querySelector('#night-voice-count');
const nightReaction = document.querySelector('#night-reaction');
const historyClassroomPlates = document.querySelector('#history-classroom-plates');
const historyInformaticsPlate = document.querySelector('#history-informatics-plate');
const historyLockscreen = document.querySelector('#history-lockscreen');
const historyDoorSlam = document.querySelector('#history-door-slam');
const endingContinue = document.querySelector('#ending-continue');
const storyNightStart = document.querySelector('#story-night-start');

const sceneTimers = [];
let voiceSequence;
let voiceSequenceFrame;
const nightJoinTimes = [180, 860, 1540, 2220];
const nightLeaveTimes = [180, 880, 1580, 2280, 2980];
const nightPhoneMessages = {
  'two-chats': ['Telegram · Диана', 'Открыт чат'],
  sent: ['Telegram · Диана', 'Привет, спишь?'],
  news: ['Новости Петербурга', 'Объявлена опасность БПЛА'],
  received: ['Telegram · Серёжа', 'Привет, спишь?'],
  one: ['Экран блокировки', '1 уведомление'],
  letter: ['Входящий звонок', 'Д…'],
  denis: ['Вызов принят', 'Денис'],
  'sleep-call': ['Входящий звонок', 'Денис'],
  'sleep-missed': ['Пропущенный звонок', 'Денис'],
  'sleep-warning': ['Староста', 'Если сегодня опять пропустишь, то тебя отчислят'],
};
const lectureFrames = [
  ['45 минут', 'night-sleep-lecture-study-middle', 'Серёжа пододвигает к Диане конспект с рисунком на полях.'],
  ['80 минут', 'night-sleep-lecture-study-late', 'Серёжа и Диана улыбаются, сравнивая записи. Солнечный свет уже на другой стороне парты.'],
];

const gameStoragePrefix = 'minigames.seryozha.';
const gameAccessHash = '0184f0b4a19a10ce2677bb58b7ad872e316b1a2eccc99736284ea0b4ab529382';
const developerCodeHash = '4bcfec3e4eb774ccde4285b4ffbc126cf072f01c9dd64f0ca3e24de83816f868';
const gameAccessKey = `${gameStoragePrefix}access.${gameAccessHash}`;
const endingsStorageKey = `${gameStoragePrefix}endings`;
const decisionStorageKey = `${gameStoragePrefix}last-decision`;
const storyStartStoragePrefix = `${gameStoragePrefix}story-start.`;
const dlcStoragePrefix = `${gameStoragePrefix}dlc.`;
const characterStoragePrefix = `${gameStoragePrefix}character.`;
const dianaAliasStorageKey = `${characterStoragePrefix}diana-alias`;
const mutedSoundStorageKey = 'minigames.settings.mute-sound';
const progressResetStorageKey = 'minigames.settings.progress-reset';
const discoveredCharacters = new Set();
let dianaAlias;
const profileQueue = [];
let activeProfile;
let morningProfileTimer;
const unlockedEndings = new Set();
const unlockedAchievements = new Set();
const visitedStoryStarts = new Set();
const unlockedDlc = new Set();
const hiddenRewardTitle = '????????????';
let phoneQuiz;
let lastDecision;
let pendingStoryStart;
let activeCharacterStory;
let gameAccessGranted = false;
let developerMode = false;
try {
  gameAccessGranted = sessionStorage.getItem(gameAccessKey) === '1';
} catch {
  // The game can still be unlocked until the page reloads.
}

function applySoundSetting(muted) {
  muteSound.checked = muted;
  for (const audio of document.querySelectorAll('audio')) audio.muted = muted;
}

function showProgressResetConfirmation(visible) {
  progressResetConfirmation.hidden = !visible;
  requestProgressReset.setAttribute('aria-expanded', String(visible));
}

function restartAtCatalog() {
  const url = new URL(window.location.href);
  url.hash = '';
  window.history.replaceState(null, '', url);
  window.location.reload();
}

function resetProgress() {
  try {
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith(gameStoragePrefix) && !key.startsWith(dlcStoragePrefix)) localStorage.removeItem(key);
    }
    localStorage.setItem(progressResetStorageKey, String(Date.now()));
  } catch {
    // Reloading still clears in-memory progress when storage is unavailable.
  }
  restartAtCatalog();
}

function hasGameAccess() {
  return gameAccessGranted || developerMode;
}

function allBranchesOpen() {
  return developerMode && developerUnlock.checked;
}

const characterStoryHash = (id) => id === 'seryozha' ? '#story-map' : `#character-story/${id}`;

function canOpenCharacterStory(id) {
  return Object.hasOwn(characterStories, id) && (id === 'seryozha' || discoveredCharacters.has(id));
}

function playCharacterStory(id, chapter = 0) {
  if (!canOpenCharacterStory(id)) return;
  if (id === 'seryozha') {
    window.location.hash = '#seryozha';
    return;
  }
  const { episodes } = characterStories[id];
  if (!episodes.length) {
    window.location.hash = characterStoryHash(id);
    return;
  }
  if (!episodes[chapter]) return;

  const nextByScene = new Map();
  for (const [index, [, first, last]] of episodes.entries()) {
    let key = first;
    while (scenes[key] && !nextByScene.has(key)) {
      nextByScene.set(key, key === last ? episodes[index + 1]?.[1] : scenes[key].next);
      if (key === last) break;
      key = scenes[key].next;
    }
  }
  openStoryAt({ scene: episodes[chapter][1], characterStory: { id, nextByScene } });
}

function renderCharacterStoryMap(id) {
  const route = characterStories[id];
  characterStoryTitle.textContent = `Сюжет ${route.name}`;
  characterStoryQualifier.hidden = !route.qualifier;
  characterStoryQualifier.textContent = route.qualifier ?? '';
  characterStoryPortrait.src = artPath(characters[id].art);
  const hasEpisodes = route.episodes.length > 0;
  characterStoryPlay.hidden = !hasEpisodes;
  characterStoryEpisodes.hidden = !hasEpisodes;
  characterStoryEmpty.hidden = hasEpisodes;
  characterStoryPlay.onclick = () => playCharacterStory(id);
  characterStoryEpisodes.replaceChildren(...route.episodes.map(([title, first, , artwork], index) => {
    const episode = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'story-point story-point-art character-story-point';
    button.addEventListener('click', () => playCharacterStory(id, index));
    const art = document.createElement('img');
    art.alt = '';
    art.loading = 'lazy';
    art.src = artPath(artwork ?? scenes[first].art ?? characters[id].art);
    const label = document.createElement('strong');
    label.textContent = title;
    button.append(art, label);
    episode.append(button);
    return episode;
  }));
}

function canActivateDlc(character) {
  return allBranchesOpen() || discoveredCharacters.has(character);
}

function hasDlcAccess(character) {
  if (allBranchesOpen()) return true;
  if (!canActivateDlc(character)) return false;
  if (unlockedDlc.has(character)) return true;
  try {
    return localStorage.getItem(dlcStoragePrefix + character) === '1';
  } catch {
    return false;
  }
}

async function matchesAccessCode(code, hash) {
  const bytes = new TextEncoder().encode(code.trim().toUpperCase());
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('') === hash;
}

gameAccessInput.addEventListener('input', () => {
  gameAccessInput.removeAttribute('aria-invalid');
  gameAccessStatus.textContent = '';
});

gameAccessForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (gameAccessSubmit.disabled) return;
  gameAccessSubmit.disabled = true;
  gameAccessInput.readOnly = true;
  try {
    if (!await matchesAccessCode(gameAccessInput.value, gameAccessHash)) {
      gameAccessInput.setAttribute('aria-invalid', 'true');
      gameAccessStatus.textContent = 'Неверный код доступа.';
      gameAccessInput.focus();
      return;
    }
  } catch {
    gameAccessStatus.textContent = 'Проверка кода недоступна. Открой сайт через HTTPS или localhost.';
    return;
  } finally {
    gameAccessSubmit.disabled = false;
    gameAccessInput.readOnly = false;
  }

  gameAccessGranted = true;
  try {
    sessionStorage.setItem(gameAccessKey, '1');
  } catch {
    // Access remains enabled until the page reloads.
  }
  gameAccessForm.reset();
  if (window.location.hash === '#seryozha') {
    syncRoute();
    playButton.focus();
  }
});

function dlcMenuHash(character, section) {
  return section ? `#dlc/${character}/${section}` : `#dlc/${character}`;
}

function renderDlc() {
  dlcList.replaceChildren(...downloadableStories.map(({ character, title, codeHash, roadmap }) => {
    const firstScene = roadmap?.[0]?.scene;
    const card = dlcCardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector('img').src = artPath(characters[character].art);
    card.querySelector('h3').textContent = title;
    card.querySelector('.dlc-character').textContent = characters[character].name;

    const form = card.querySelector('form');
    const input = form.elements.namedItem('code');
    const submit = form.querySelector('button');
    const feedback = form.querySelector('[role="status"]');
    const play = card.querySelector('.dlc-play');
    const details = card.querySelector('details');
    const lockedNotice = card.querySelector('.dlc-locked');
    const canActivate = canActivateDlc(character);
    const hasAccess = hasDlcAccess(character);
    lockedNotice.hidden = canActivate;
    form.hidden = !canActivate || hasAccess;
    play.hidden = !hasAccess || !firstScene;
    details.hidden = !hasAccess || Boolean(firstScene);
    if (firstScene) play.href = dlcMenuHash(character);
    if (!canActivate || hasAccess) return card;

    input.addEventListener('input', () => {
      input.removeAttribute('aria-invalid');
      feedback.textContent = '';
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submit.disabled || !canActivateDlc(character)) return;
      submit.disabled = true;
      try {
        if (!await matchesAccessCode(input.value, codeHash)) {
          input.setAttribute('aria-invalid', 'true');
          feedback.textContent = 'Неверный код доступа.';
          input.focus();
          return;
        }
      } catch {
        feedback.textContent = 'Проверка кода недоступна. Попробуй открыть сайт через HTTPS или localhost.';
        return;
      } finally {
        submit.disabled = false;
      }

      if (!canActivateDlc(character)) return;
      unlockedDlc.add(character);
      try {
        localStorage.setItem(dlcStoragePrefix + character, '1');
      } catch {
        // Access lasts for this visit if storage is unavailable.
      }
      form.reset();
      form.hidden = true;
      if (firstScene) {
        play.hidden = false;
        play.focus();
      } else {
        details.hidden = false;
        details.open = true;
        details.querySelector('summary').focus();
      }
    });
    return card;
  }));
}

function playDlc(dlc, scene) {
  if (!scene || !hasDlcAccess(dlc.character)) return;
  openStoryAt(dlcStoryStart(dlc, scene));
}

function dlcStoryStart(dlc, scene) {
  return {
    scene, characterStory: { id: dlc.character, dlc: dlc.title, achievements: dlc.achievements ?? [] },
  };
}

function renderDlcMenu(dlc, section) {
  dlcOverview.hidden = Boolean(section);
  if (!section) {
    const firstScene = dlc.roadmap[0].scene;
    dlcMenuTitle.textContent = dlc.title;
    dlcMenuCover.src = artPath(scenes[firstScene].art);
    playDlcButton.onclick = () => playDlc(dlc, firstScene);
  }
  for (const [name, { tab, panel }] of Object.entries(dlcSections)) {
    tab.href = dlcMenuHash(dlc.character, name);
    panel.hidden = name !== section;
    if (name === section) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  }
  if (section === 'achievements') {
    const results = dlc.achievements ?? [];
    renderAchievementCards(results, dlcAchievementList, dlcAchievementProgress);
    dlcAchievementProgress.hidden = !results.length;
    dlcAchievementsEmpty.hidden = Boolean(results.length);
  }
  if (section === 'story-map') renderDlcRoadmap(dlc);
}

function renderDlcRoadmap(dlc) {
  readAchievements(dlc.achievements ?? []);
  const root = dlc.roadmap.reduceRight((next, { scene, reward, reachedBy }, index) => {
    const item = document.createElement('li');
    const node = document.createElement('div');
    node.className = 'story-tree-node';
    const button = document.createElement('button');
    button.className = 'story-point';
    button.classList.toggle('story-point-fork', index === 0);
    button.type = 'button';
    const data = scenes[scene];
    if (data?.art) {
      button.classList.add('story-point-art');
      const illustration = document.createElement('img');
      illustration.src = artPath(data.art);
      illustration.alt = '';
      illustration.loading = 'lazy';
      button.append(illustration);
    }
    const title = document.createElement('strong');
    title.textContent = data?.title ?? 'В разработке';
    button.append(title);
    button.disabled = !data || (index > 0 && !isDlcCheckpointUnlocked(scene, reachedBy));
    if (data && index > 0) button.dataset.dlcCheckpoint = scene;
    if (reachedBy) button.dataset.reachedBy = reachedBy;
    button.addEventListener('click', () => playDlc(dlc, scene));
    node.append(button);
    item.append(node);
    if (next || reward) {
      const branches = document.createElement('ol');
      branches.className = 'story-branches';
      if (next) branches.append(next);
      if (reward) {
        const leaf = document.createElement('li');
        leaf.className = 'story-endings';
        const card = rewardCard(reward, allBranchesOpen() || unlockedAchievements.has(reward.id), 'h4', true);
        card.classList.add('story-tree-node');
        leaf.append(card);
        branches.append(leaf);
      }
      item.append(branches);
    }
    return item;
  }, null);
  dlcRoadmap.replaceChildren(...(root ? [root] : []));
}

function isDlcCheckpointUnlocked(scene, reachedBy) {
  return isStoryStartUnlocked(scene) || unlockedAchievements.has(reachedBy);
}

function rememberStoryStart(scene) {
  if (developerMode) return;
  if (scene === 'morning' || visitedStoryStarts.has(scene)) return;
  if (!storyStarts.has(scene) && !dlcCheckpoints.has(scene)) return;
  visitedStoryStarts.add(scene);
  try {
    localStorage.setItem(storyStartStoragePrefix + scene, '1');
  } catch {
    // Visited points stay available during the current visit.
  }
}

function isStoryStartUnlocked(scene) {
  if (allBranchesOpen() || scene === 'morning' || visitedStoryStarts.has(scene)) return true;
  if (scene === 'night-choice' && unlockedEndings.has('first-step')) return true;
  try {
    return localStorage.getItem(storyStartStoragePrefix + scene) === '1';
  } catch {
    return false;
  }
}

function renderStoryStarts() {
  for (const [scene, button] of storyStarts) button.disabled = !isStoryStartUnlocked(scene);
  for (const button of dlcRoadmap.querySelectorAll('[data-dlc-checkpoint]')) {
    button.disabled = !isDlcCheckpointUnlocked(button.dataset.dlcCheckpoint, button.dataset.reachedBy);
  }
}

function rememberDecision(scene, phone) {
  if (developerMode) return;
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

  if (lastDecision) rememberStoryStart(lastDecision.phone ? 'home-phone' : lastDecision.scene);
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
  if (!hasGameAccess()) return;
  pendingStoryStart = start;
  if (window.location.hash === '#seryozha') syncRoute();
  else window.location.hash = '#seryozha';
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
  if (developerMode) return;
  readEndings();
  unlockedEndings.add(id);
  try {
    localStorage.setItem(endingsStorageKey, JSON.stringify([...unlockedEndings]));
  } catch {
    // Keep the unlock available in this visit if the browser blocks writes.
  }
}

function unlockAchievement(id) {
  if (unlockedAchievements.has(id)) return false;
  unlockedAchievements.add(id);
  try {
    const key = gameStoragePrefix + id;
    if (localStorage.getItem(key) === '1') return false;
    localStorage.setItem(key, '1');
  } catch {
    // The achievement remains unlocked in the current visit.
  }
  return true;
}

function rewardLabel(result) {
  if (result.number === undefined) return 'Достижение';
  const type = result.intermediate ? 'Промежуточная концовка' : 'Концовка';
  return `${type} #${result.number}`;
}

function rewardCard(result, unlocked, headingTag, preview = false) {
  const card = document.createElement('article');
  card.className = 'result-card';
  const thumbnail = document.createElement('div');
  const isEnding = result.number !== undefined;
  thumbnail.className = isEnding || result.crossed || result.fullArt ? 'result-art' : 'result-art result-icon';
  if (result.fullArt) thumbnail.classList.add('result-contain');
  if (unlocked) {
    if (result.crossed) thumbnail.classList.add('result-crossed');
    const img = document.createElement('img');
    img.src = artPath(result.art);
    img.alt = '';
    thumbnail.append(img);
  } else {
    thumbnail.classList.add('result-locked', `silhouette-${result.id}`);
    thumbnail.setAttribute('aria-label', isEnding ? 'Концовка ещё не открыта' : 'Достижение ещё не открыто');
    thumbnail.setAttribute('role', 'img');
  }
  const info = document.createElement('div');
  info.className = 'result-info';
  const label = document.createElement('p');
  label.className = 'genre';
  label.textContent = rewardLabel(result);
  const title = document.createElement(headingTag);
  title.textContent = unlocked ? result.title : hiddenRewardTitle;
  info.append(label, title);
  card.append(thumbnail, info);
  if (unlocked && preview) {
    const trigger = document.createElement('button');
    trigger.className = 'result-preview-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', `Увеличить изображение: ${rewardLabel(result).toLowerCase()} «${result.title}»`);
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', () => showEndingPreview(result));
    card.append(trigger);
  }
  return card;
}

function readAchievements(results = achievements) {
  try {
    for (const { id } of results) {
      if (localStorage.getItem(gameStoragePrefix + id) === '1') unlockedAchievements.add(id);
    }
  } catch {
    // In-memory progress is available when storage is blocked.
  }
}

function renderAchievements() {
  readEndings();
  renderAchievementCards(achievements, achievementList, achievementProgress, endings);
}

function renderAchievementCards(results, list, progress, endingResults = []) {
  readAchievements(results);
  const unlocked = results.filter(({ id }) => unlockedAchievements.has(id)).length;
  const ended = endingResults.filter(({ id }) => unlockedEndings.has(id)).length;
  progress.textContent = `Открыто ${ended + unlocked} из ${endingResults.length + results.length}`;
  list.replaceChildren(
    ...endingResults.map((result) => rewardCard(result, unlockedEndings.has(result.id), 'h4')),
    ...results.map((result) => rewardCard(result, unlockedAchievements.has(result.id), 'h4')),
  );
}

function renderAchievementAward(id, container = scenePicture) {
  const results = activeCharacterStory?.achievements ?? achievements;
  const achievement = results.find((result) => result.id === id);
  achievementAward.hidden = !achievement?.showOnScene;
  if (!achievement) return false;

  const recordsProgress = (!activeCharacterStory || Boolean(activeCharacterStory.dlc))
    && (!developerMode || developerSaveAchievements.checked);
  if (achievement.showOnScene) {
    const card = rewardCard(achievement, true, 'h2');
    const label = recordsProgress ? 'Достижение открыто' : 'Предпросмотр достижения';
    if (!recordsProgress) card.querySelector('.genre').textContent = label;
    achievementAward.setAttribute('aria-label', label);
    achievementAward.replaceChildren(card);
    if (achievementAward.parentElement !== container) container.append(achievementAward);
  }
  return recordsProgress && unlockAchievement(achievement.id);
}

function showEndingPreview(result) {
  endingPreviewTitle.textContent = `${rewardLabel(result)} «${result.title}»`;
  endingPreviewArt.src = artPath(result.art);
  endingPreviewArt.alt = scenes[result.art]?.alt ?? result.title;
  endingPreview.showModal();
}

function renderStoryRewards() {
  readEndings();
  readAchievements();
  storyNightStart.hidden = !allBranchesOpen() && !unlockedEndings.has('first-step');
  renderStoryStarts();
  for (const branch of [...storyEndingBranches, ...storyAchievementBranches]) {
    const achievementScenes = branch.dataset.storyAchievements?.split(' ');
    const leaves = achievementScenes
      ? achievementScenes.map((key) => achievements.find(({ id }) => id === scenes[key]?.achievement)).filter(Boolean)
      : endings.filter((result) => result.branch === branch.dataset.storyEndings);
    const unlocked = achievementScenes ? unlockedAchievements : unlockedEndings;
    branch.replaceChildren(...leaves.map((result) => {
      const leaf = document.createElement('li');
      const card = rewardCard(result, allBranchesOpen() || unlocked.has(result.id), 'h4', true);
      card.classList.add('story-tree-node');
      leaf.append(card);
      return leaf;
    }));
  }
}

function renderDianaChat(reply) {
  rememberDianaAlias('chat');
  const name = dianaContactName();
  dianaChatName.textContent = name;
  const makeMessage = (text, fromDiana = false) => {
    const message = document.createElement('li');
    message.className = fromDiana ? 'chat-incoming' : 'chat-outgoing';
    message.textContent = text;
    return message;
  };
  const heart = makeMessage('❤️', true);
  heart.setAttribute('aria-label', `${name} отправила красное сердце`);
  chatMessages.replaceChildren(...phoneRounds.map(({ message, unknownMessage }) => makeMessage(
    discoveredCharacters.has('diana') ? message : unknownMessage ?? message,
  )), heart);
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
  rememberDianaAlias('choice');
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
  addChoice(discoveredCharacters.has('diana') ? round.label : round.unknownLabel, (button) => answerPhoneRound(button, true));
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

function showScreen(screen, dlc, dlcSection) {
  if (screen !== 'story' && screen !== 'ending') rewardAudio.pause();
  if (screen !== 'story') {
    clearSceneTimers();
    clearTimeout(morningProfileTimer);
    morningProfileTimer = undefined;
    profileQueue.length = 0;
    activeProfile = undefined;
    if (characterProfile.open) characterProfile.close();
    stopRouteAnimation();
    if (!intertitle.hidden) intertitleAudio.pause();
    if (!sceneAudio.paused) sceneAudio.pause();
  }
  catalog.hidden = screen !== 'catalog';
  novel.hidden = screen === 'catalog';
  novelTabs.hidden = !hasGameAccess() || (screen !== 'menu' && screen !== 'details');
  gameAccessForm.hidden = hasGameAccess();
  playButton.hidden = !hasGameAccess();
  const playingDlc = activeCharacterStory?.dlc;
  gameLabel.textContent = playingDlc ?? dlc?.title ?? 'День Серёжи';
  gameMapLink.href = playingDlc ? dlcMenuHash(activeCharacterStory.id, 'story-map') : '#story-map';
  gameMapLink.hidden = screen !== 'story';
  menu.hidden = screen !== 'menu';
  story.hidden = screen !== 'story';
  ending.hidden = screen !== 'ending';
  novel.classList.toggle('is-playing', screen === 'story');
  novel.classList.toggle('is-ending', screen === 'ending');
  if (activeCharacterStory && (screen === 'story' || screen === 'ending')) {
    backLink.href = activeCharacterStory.dlc ? '#dlc' : characterStoryHash(activeCharacterStory.id);
    backLink.textContent = activeCharacterStory.dlc ? 'К дополнениям' : 'К карте персонажа';
  } else if (dlc) {
    backLink.href = dlcSection ? dlcMenuHash(dlc.character) : '#dlc';
    backLink.textContent = dlcSection ? 'В меню DLC' : 'К дополнениям';
  } else {
    backLink.href = screen === 'menu' ? '#' : '#seryozha';
    backLink.textContent = screen === 'menu' ? 'К играм' : 'В меню игры';
  }
}

const preloadedArt = new Set();
let activeScene;
let activePosition;
const sceneHistory = [];

function updateSceneBack() {
  for (const button of sceneBackButtons) button.disabled = !sceneHistory.length;
}

function startStory(key, { characterStory, ...options } = {}) {
  sceneHistory.length = 0;
  activeCharacterStory = characterStory;
  phoneQuiz = undefined;
  if (scenes[key].onlyEndCard) showEndCard(scenes[key]);
  else renderScene(key, options);
}

function goToScene(key, options) {
  sceneHistory.push(activePosition);
  if (scenes[key].onlyEndCard) showEndCard(scenes[key]);
  else renderScene(key, options);
}

function goBackScene() {
  const previous = sceneHistory.pop();
  if (previous) renderScene(previous.key, { phone: previous.phone });
}

function artPath(art) {
  if (art.startsWith('dlc/')) return `assets/${art}.webp`;
  let folder = 'route/';
  if (['wake', 'coffee', 'tea'].includes(art)) folder = '';
  if (art.startsWith('phone-')) folder = 'endings/';
  if (art.startsWith('shift-')) folder = 'shift/';
  if (art.startsWith('diana-')) folder = 'diana/';
  return `assets/${folder}${art}.webp`;
}

function readCharacters() {
  try {
    for (const id of Object.keys(characters)) {
      if (localStorage.getItem(characterStoragePrefix + id) === '1') discoveredCharacters.add(id);
    }
    dianaAlias = localStorage.getItem(dianaAliasStorageKey) ?? dianaAlias;
  } catch {
    // Keep discoveries for the current session if storage is unavailable.
  }
}

function dianaContactName() {
  return discoveredCharacters.has('diana') ? characters.diana.name : 'Неизвестная';
}

function rememberDianaAlias(context) {
  if (activeCharacterStory || developerMode) return;
  if (discoveredCharacters.has('diana') || dianaAlias === 'chat' || dianaAlias === context) return;
  dianaAlias = context;
  try {
    localStorage.setItem(dianaAliasStorageKey, context);
  } catch {
    // The current session still remembers the alias.
  }
}

function lockedCharacterCard(popup = false) {
  const card = document.createElement(popup ? 'div' : 'article');
  card.className = 'character-card character-locked';
  card.setAttribute(popup ? 'aria-hidden' : 'aria-label', popup ? 'true' : 'Персонаж ещё не открыт');
  const portrait = document.createElement('div');
  portrait.className = 'character-silhouette';
  const info = document.createElement('div');
  const title = document.createElement(popup ? 'h2' : 'h3');
  title.textContent = '?????';
  const bio = document.createElement('p');
  bio.textContent = '???????? ??????????? ???????? ???????????? ?????? ??????????';
  info.append(title, bio);
  card.append(portrait, info);
  return card;
}

function characterCard(id, { popup = false, reveal = false } = {}) {
  const { name, art, description, keyword, quote, quoteBy, afterQuote } = characters[id];
  const card = document.createElement(popup ? 'div' : 'article');
  card.className = 'character-card';
  const portrait = document.createElement('img');
  portrait.src = artPath(art);
  portrait.alt = '';
  portrait.width = 320;
  portrait.height = 320;
  const info = document.createElement('div');
  const title = document.createElement(popup ? 'h2' : 'h3');
  if (popup) title.id = 'profile-name';
  title.textContent = name;
  info.append(title);
  if (description) {
    const bio = document.createElement('p');
    bio.textContent = description;
    info.append(bio);
  }
  if (quote) {
    const thought = document.createElement('figure');
    thought.className = 'character-thought';
    const quotation = document.createElement('blockquote');
    quotation.textContent = quote;
    const attribution = document.createElement('figcaption');
    attribution.textContent = quoteBy;
    thought.append(quotation, attribution);
    const outsideOpinion = document.createElement('p');
    outsideOpinion.textContent = afterQuote;
    info.append(thought, outsideOpinion);
  }
  if (id === 'seryozha') {
    const favorite = document.createElement('p');
    favorite.className = 'character-favorite';
    favorite.textContent = 'Фаворит среди девушек на данный момент — ';
    if (discoveredCharacters.has('yana')) {
      const correction = document.createElement('span');
      correction.className = 'favorite-correction';
      correction.classList.toggle('is-writing', reveal);
      const former = document.createElement('s');
      former.textContent = characters.diana.name;
      const arrow = document.createElement('span');
      arrow.textContent = ' → ';
      arrow.setAttribute('aria-hidden', 'true');
      const current = document.createElement('strong');
      current.textContent = characters.yana.name;
      correction.append(former, arrow, current);
      favorite.append(correction, '.');
    } else if (reveal) {
      const revealName = document.createElement('span');
      revealName.className = 'favorite-reveal';
      const questions = document.createElement('span');
      questions.textContent = '?????';
      questions.setAttribute('aria-hidden', 'true');
      const answer = document.createElement('span');
      answer.textContent = characters.diana.name;
      revealName.append(questions, answer);
      favorite.append(revealName, '.');
    } else {
      favorite.append(discoveredCharacters.has('diana') ? characters.diana.name : '?????', '.');
    }
    info.append(favorite);
  }
  if (popup && id === 'diana' && dianaAlias) {
    const alias = document.createElement('p');
    alias.className = 'character-alias';
    alias.textContent = dianaAlias === 'chat' ? 'В переписке — «Неизвестная»' : 'В вариантах ответа — «Неизвестная»';
    info.append(alias);
  }
  if (keyword) {
    const trait = document.createElement('p');
    trait.className = 'character-keyword';
    const word = document.createElement('strong');
    word.textContent = keyword;
    trait.append('В одном слове ', word);
    info.append(trait);
  }
  if (!popup && canOpenCharacterStory(id)) {
    const actions = document.createElement('div');
    actions.className = 'character-story-actions';
    const play = document.createElement('button');
    play.type = 'button';
    play.className = 'pixel-button';
    play.textContent = `Пройти сюжет ${characterStories[id].name}`;
    play.addEventListener('click', () => playCharacterStory(id));
    const map = document.createElement('a');
    map.className = 'nav-link';
    map.href = characterStoryHash(id);
    map.textContent = 'Карта сюжета';
    actions.append(play, map);
    info.append(actions);
  }
  card.append(portrait, info);
  return card;
}

function renderCharacters() {
  const showAll = developerMode && developerUnlockCharacters.checked;
  characterList.replaceChildren(...Object.keys(characters).map((id) => {
    const visible = showAll || id === 'seryozha' || discoveredCharacters.has(id);
    return visible ? characterCard(id) : lockedCharacterCard();
  }));
}

function resetCharacters() {
  if (!window.confirm('Сбросить знакомства? Карточки снова появятся при прохождении.')) return;

  const status = document.querySelector('#character-reset-status');
  try {
    for (const id of Object.keys(characters)) localStorage.removeItem(characterStoragePrefix + id);
    localStorage.removeItem(dianaAliasStorageKey);
    status.textContent = 'Знакомства сброшены.';
  } catch {
    status.textContent = 'Знакомства сброшены в этой вкладке. Хранилище браузера недоступно.';
  }
  discoveredCharacters.clear();
  dianaAlias = undefined;
  renderCharacters();
}

function showNextCharacterProfile() {
  if (developerMode || story.hidden || characterProfile.open) return;
  let entry;
  do {
    entry = profileQueue.shift();
  } while (entry && !entry.reveal && discoveredCharacters.has(entry.id));
  if (!entry) return;
  activeProfile = entry.id;
  const card = characterCard(entry.id, { popup: true, reveal: entry.reveal });
  characterProfileBody.classList.toggle('character-unlock', !entry.reveal);
  characterProfileBody.replaceChildren(...(entry.reveal ? [card] : [lockedCharacterCard(true), card]));
  characterProfile.showModal();
  discoveredCharacters.add(entry.id);
  try {
    localStorage.setItem(characterStoragePrefix + entry.id, '1');
  } catch {
    // In-memory progress still prevents duplicate pop-ups.
  }
}

function showCharacterEncounters(key, meet = []) {
  if (key === 'morning' && !discoveredCharacters.has('seryozha') && morningProfileTimer === undefined) {
    morningProfileTimer = setTimeout(() => {
      morningProfileTimer = undefined;
      profileQueue.push({ id: 'seryozha' });
      showNextCharacterProfile();
    }, 2000);
  }
  profileQueue.push(...meet.map((id) => ({ id })));
  showNextCharacterProfile();
}

function preloadScene(key) {
  const { art, poster, endCardArt } = scenes[key];
  const image = endCardArt ?? art;
  preloadArt(poster ?? (image && artPath(image)));
}

function preloadArt(path) {
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
  intertitleArt.lang = scene.intertitleLang ?? 'en';
  intertitleStatus.textContent = '';
  intertitleSound.hidden = !scene.audio;
  intertitleSound.setAttribute('aria-pressed', 'false');
  if (!scene.audio) return;
  if (intertitleAudio.getAttribute('src') !== scene.audio) intertitleAudio.src = scene.audio;
  intertitleAudio.currentTime = 0;
}

function renderWorkCall({ callStage: stage, callGroup: group }) {
  workCall.hidden = stage === undefined;
  if (workCall.hidden) return;

  for (const message of workCallMessages) {
    const cue = scenes[message.dataset.callMessage];
    message.hidden = cue.callGroup !== group || cue.callStage > stage;
    message.querySelector('span').textContent = cue.line;
  }
  const bothLive = group === 'blender' && stage >= 2;
  workCallStreamLabel.textContent = bothLive ? 'Две демонстрации Blender' : 'Демонстрация экрана';
  for (const badge of workCallLiveBadges) badge.hidden = !bothLive;
  workCallProgrammer.classList.toggle('work-person-speaking', stage === 1 || stage === 3);
  workCallDesigner.classList.toggle('work-person-speaking', stage === 2);
}

function renderSceneTitle(scene) {
  const showPrice = scene.prop === 'ozon-price';
  sceneTitle.classList.toggle('ozon-price', showPrice);
  if (!showPrice) {
    sceneTitle.textContent = !discoveredCharacters.has('diana') && scene.unknownTitle ? scene.unknownTitle : scene.title;
    return;
  }

  const amount = scene.title.replace(/ ₽$/, '');
  const digit = document.createElement('span');
  digit.className = 'ozon-price-digit';
  digit.textContent = amount.at(-1);
  sceneTitle.replaceChildren(amount.slice(0, -1), digit, scene.title.slice(amount.length));
}

function clearSceneTimers() {
  for (const timer of sceneTimers) clearTimeout(timer);
  sceneTimers.length = 0;
  scenePicture.classList.remove('is-ripple-collapse');
  cancelAnimationFrame(voiceSequenceFrame);
  voiceSequence = undefined;
  continueButton.disabled = false;
}

function runSceneSequence(times, step) {
  continueButton.disabled = true;
  for (const [index, delay] of times.entries()) sceneTimers.push(setTimeout(() => step(index), delay));
  sceneTimers.push(setTimeout(() => { continueButton.disabled = false; }, times.at(-1) + 850));
}

function syncVoiceSequence(playback) {
  const sequence = voiceSequence;
  const lastCue = sequence.times.at(-1);
  let index = 0;
  let fallbackStart;
  playback.catch(() => { fallbackStart = performance.now(); });
  const update = (now) => {
    if (voiceSequence !== sequence) return;
    const elapsed = fallbackStart === undefined ? sceneAudio.currentTime * 1000 : now - fallbackStart;
    while (index < sequence.times.length && elapsed >= sequence.times[index]) sequence.step(index++);
    if (elapsed >= lastCue + 850 || (sceneAudio.ended && index === sequence.times.length)) {
      continueButton.disabled = false;
    } else {
      voiceSequenceFrame = requestAnimationFrame(update);
    }
  };
  voiceSequenceFrame = requestAnimationFrame(update);
}

function renderNightVoice(mode) {
  nightVoice.hidden = !mode;
  if (!mode) return;
  const focus = nightRoster.findIndex(({ id }) => id === mode);
  const tiles = nightRoster.map(({ nick, avatar }, index) => {
    const tile = document.createElement('li');
    tile.className = 'night-voice-tile';
    tile.classList.toggle('is-focused', focus === index);
    tile.classList.toggle('is-dimmed', focus !== -1 && focus !== index);
    tile.hidden = mode === 'joining' ? index > 1 : mode === 'alone' && index > 0;
    const portrait = document.createElement('img');
    portrait.src = avatar;
    portrait.alt = '';
    const name = document.createElement('strong');
    name.textContent = nick;
    tile.append(portrait, name);
    return tile;
  });
  nightVoiceGrid.replaceChildren(...tiles);
  nightReaction.hidden = focus === -1 && mode !== 'joining';
  if (!nightReaction.hidden) nightReaction.src = artPath(`night-reaction-${Math.max(focus, 0) + 1}`);
  const updateCount = () => { nightVoiceCount.textContent = `В канале ${tiles.filter((tile) => !tile.hidden).length}`; };
  updateCount();
  const joining = mode === 'joining';
  if (joining || mode === 'leaving') {
    continueButton.disabled = true;
    voiceSequence = {
      times: joining ? nightJoinTimes : nightLeaveTimes,
      step: (index) => {
        tiles[joining ? index + 2 : tiles.length - 1 - index].hidden = !joining;
        updateCount();
      },
    };
  }
}

function renderNightProps(scene) {
  const { clockCard, timeBadge, phoneNote, dioramaView, prop } = scene;
  nightClockCard.hidden = !clockCard;
  nightClockCard.textContent = clockCard ?? '';
  sceneArt.hidden = Boolean(clockCard);
  nightTimeBadge.hidden = !timeBadge;
  nightTimeBadge.textContent = timeBadge ?? '';
  nightPhoneNote.hidden = !phoneNote;
  if (phoneNote) {
    nightPhoneNote.dataset.note = phoneNote;
    [nightPhoneSource.textContent, nightPhoneText.textContent] = nightPhoneMessages[phoneNote];
    const missed = phoneNote === 'sleep-missed';
    nightPhoneSecond.hidden = !missed && phoneNote !== 'two-chats';
    nightPhoneSecond.firstElementChild.textContent = missed ? 'Discord · Общая группа' : 'Telegram · Серёжа';
    nightPhoneSecond.lastElementChild.textContent = missed ? 'Много новых сообщений' : 'Открыт чат';
  }
  dioramaCheck.hidden = !dioramaView;
  if (dioramaView) {
    dioramaCheck.dataset.view = dioramaView;
    const cubesVisible = dioramaView === 'cubes' || dioramaView === 'platform';
    dioramaTitle.textContent = dioramaView === 'cubes' ? 'Две демонстрации Blender' : 'Экран Димы';
    dioramaNote.textContent = dioramaView === 'capture' ? 'За 10 минут до проверки' : 'Blender';
    dioramaPhoto.hidden = cubesVisible;
    dioramaCubes.hidden = !cubesVisible;
    dioramaFirstCube.hidden = dioramaView === 'platform';
    dioramaSelection.hidden = dioramaView !== 'selected' && dioramaView !== 'capture';
  }
  nightVideoScroll.hidden = prop !== 'shorts-timelapse';
  nightCharacterSwitch.hidden = prop !== 'character-switch';
  scenePicture.dataset.nightEffect = prop ?? '';
  sleepBubble.hidden = prop !== 'deep-sleep';
  nightDiscord.hidden = prop !== 'sleep-discord';
  if (!nightDiscord.hidden && !nightDiscordShots.childElementCount) {
    nightDiscordPlayers.textContent = nightRoster
      .filter(({ id }) => id !== 'seryozha')
      .map(({ id }) => characters[id].name)
      .join(' · ');
    for (const [name, art] of nightGames) {
      const shot = document.createElement('li');
      const image = document.createElement('img');
      image.src = artPath(art);
      image.alt = '';
      image.width = 832;
      image.height = 468;
      const caption = document.createElement('span');
      caption.textContent = name;
      shot.append(image, caption);
      nightDiscordShots.append(shot);
    }
  }
  if (prop === 'lecture-timelapse') {
    for (const [, art] of lectureFrames) preloadArt(artPath(art));
    runSceneSequence([1050, 2100], (index) => {
      const [time, art, alt] = lectureFrames[index];
      nightTimeBadge.textContent = time;
      sceneArt.src = artPath(art);
      sceneArt.alt = alt;
    });
  }
  nightGameName.hidden = prop !== 'night-games';
  if (!nightGameName.hidden) {
    nightGameName.textContent = nightGames[0][0];
    for (const [, art] of nightGames.slice(1)) preloadArt(artPath(art));
    runSceneSequence(nightGames.slice(1).map((_, index) => 720 * (index + 1)), (index) => {
      const [game, art] = nightGames[index + 1];
      nightGameName.textContent = game;
      sceneArt.src = artPath(art);
      sceneArt.alt = `Игровой вечер — ${game}`;
    });
  }
}

const holdemRankNames = { T: '10', J: 'валет', Q: 'дама', K: 'король', A: 'туз' };
const holdemSuitNames = { c: 'треф', d: 'бубен', h: 'червей', s: 'пик' };

function renderHoldem(scene) {
  holdemBet.hidden = !scene.holdemBet;
  holdemBet.textContent = scene.holdemBet ? `Фишки ${scene.holdemBet}` : '';
  const hand = scene.holdem;
  holdemPanel.hidden = !hand;
  holdemPanel.dataset.layout = hand?.layout ?? '';
  holdemPanel.replaceChildren();
  if (!hand) return;

  if (hand.title) {
    const title = document.createElement('h2');
    title.textContent = hand.title;
    holdemPanel.append(title);
  }
  const table = document.createElement('div');
  table.className = 'holdem-table';
  for (const [label, cards] of [['На столе', hand.board], ['На руках', hand.hole]]) {
    if (!cards?.length) continue;
    const group = document.createElement('div');
    group.className = 'holdem-group';
    const groupLabel = document.createElement('span');
    groupLabel.textContent = label;
    const row = document.createElement('div');
    row.className = 'holdem-cards';
    for (const code of cards) {
      const [rank, suit] = code;
      const highlighted = hand.highlight?.includes(code);
      const card = document.createElement('img');
      card.className = 'holdem-card';
      card.classList.toggle('holdem-card-highlighted', Boolean(highlighted));
      card.classList.toggle('holdem-card-muted', Boolean(hand.highlight && !highlighted));
      card.src = `assets/cards/${code}.svg`;
      card.alt = `${holdemRankNames[rank] ?? rank} ${holdemSuitNames[suit]}${highlighted ? ', в комбинации' : ''}`;
      card.width = 159;
      card.height = 235;
      row.append(card);
    }
    group.append(groupLabel, row);
    table.append(group);
  }
  holdemPanel.append(table);
  if (hand.layout === 'manga') {
    const caption = document.createElement('p');
    caption.className = 'holdem-manga-caption';
    caption.textContent = scene.line;
    holdemPanel.append(caption);
  }
}

function renderScene(key, { phone, remember = true } = {}) {
  rewardAudio.pause();
  clearSceneTimers();
  const scene = activeCharacterStory?.nextByScene
    ? { ...scenes[key], next: activeCharacterStory.nextByScene.get(key) }
    : scenes[key];
  activeScene = scene;
  activePosition = { key };
  updateSceneBack();
  if (!activeCharacterStory || activeCharacterStory.dlc) rememberStoryStart(key);
  if (!activeCharacterStory && remember && scene.options) rememberDecision(key);
  renderIntertitle(scene);
  renderWorkCall(scene);
  renderNightProps(scene);
  renderNightVoice(scene.nightVoice);
  const blenderStage = scene.blenderStage;
  blenderLaunch.hidden = blenderStage !== 'launch';
  blenderWorkspace.hidden = blenderStage !== 'workspace';
  blenderChat.hidden = blenderStage !== 'chat' && blenderStage !== 'draft';
  blenderDraft.hidden = blenderStage !== 'draft';
  blenderDimaScreen.hidden = blenderStage !== 'shorts' && blenderStage !== 'cube';
  blenderDimaScreen.dataset.focus = blenderStage ?? '';
  blenderFiles.hidden = blenderStage !== 'files' && blenderStage !== 'recent-files';
  blenderFiles.classList.toggle('shows-recent-files', blenderStage === 'recent-files');
  blenderProjectLabels.hidden = scene.prop !== 'blender-project';
  blenderModelProgress.hidden = scene.modelProgress === undefined;
  if (!blenderModelProgress.hidden) {
    const progress = blenderModelProgress.querySelector('progress');
    progress.value = scene.modelProgress;
    blenderModelProgress.querySelector('span').textContent = `${scene.modelProgress}%`;
  }
  scenePicture.classList.toggle('has-blender-screen', Boolean(blenderStage || scene.dioramaView));
  scenePicture.classList.toggle('is-blender-twitch', scene.prop === 'blender-eye-twitch');
  historyClassroomPlates.hidden = scene.prop !== 'history-doors';
  const seesInformaticsPlaque = scene.prop === 'history-informatics-plaque';
  historyInformaticsPlate.hidden = !seesInformaticsPlaque && scene.prop !== 'history-informatics-door';
  historyInformaticsPlate.classList.toggle('is-closeup', seesInformaticsPlaque);
  historyLockscreen.hidden = scene.prop !== 'history-date';
  historyDoorSlam.hidden = scene.prop !== 'card-door-slam';
  scenePicture.hidden = Boolean(scene.intertitle || scene.holdem?.layout) || !workCall.hidden || !nightVoice.hidden;
  renderHoldem(scene);
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
    phoneQuiz ??= {
      index: phoneRounds.length - 1,
      correct: scene.prop === 'chat' ? phoneRounds.length : Number(scene.ending === 'time-loop'),
    };
    activePosition.phone = { index: phoneQuiz.index, correct: phoneQuiz.correct };
    updatePhoneScore();
  }
  answerFeedback.hidden = true;
  gameOverTitle.hidden = scene.ending !== 'game-over';
  endingAward.hidden = !scene.ending;
  dianaChat.hidden = scene.prop !== 'chat';
  ozonChat.hidden = scene.prop !== 'ozon-montage';
  if (!ozonChat.hidden) {
    rememberDianaAlias('chat');
    ozonChatName.textContent = dianaContactName();
  }
  scenePicture.classList.toggle('has-ending-award', Boolean(scene.ending));
  scenePicture.classList.toggle('is-achievement', scene.prop === 'achievement');
  scenePicture.classList.toggle('has-chat', scene.prop === 'chat');
  const endingResult = endings.find(({ id }) => id === scene.ending);
  if (endingResult) {
    if (!activeCharacterStory) unlockEnding(endingResult.id);
    endingAward.replaceChildren(rewardCard(endingResult, true, 'h2'));
  }
  const earnedAchievement = renderAchievementAward(
    scene.achievement, scene.holdem?.layout ? holdemPanel : scenePicture,
  );
  if (scene.prop === 'chat') renderDianaChat(scene.dianaReply);
  scenePicture.classList.toggle('is-dull-view', scene.prop === 'dull-view');
  scenePicture.classList.toggle('is-rain-reveal', scene.prop === 'rain-reveal');
  scenePicture.classList.toggle('is-fainting', scene.prop === 'fainting');
  scenePicture.classList.toggle('is-opening-eyes', scene.prop === 'opening-eyes');
  scenePicture.classList.toggle('is-pulling-back', scene.prop === 'pullback');
  doorNameplate.hidden = scene.prop !== 'door-nameplate';
  const onRoute = scene.routeIndex !== undefined;
  scenePicture.classList.toggle('is-route', onRoute);
  routeMap.hidden = !onRoute;
  routeCaption.hidden = !onRoute;
  shoppingLabels.hidden = scene.prop !== 'shopping';
  ozonNametags.hidden = scene.prop !== 'ozon-nametags';
  phoneProjection.hidden = scene.prop !== 'phone';

  if (scene.art) {
    sceneArt.src = artPath(scene.art);
    sceneArt.alt = scene.alt ?? '';
  }
  renderSceneTitle(scene);
  sceneSpeaker.textContent = scene.prop === 'achievement' && developerMode && !developerSaveAchievements.checked
    ? 'Предпросмотр достижения'
    : scene.speaker ?? 'Серёжа';
  sceneLine.hidden = !scene.line || scene.callStage > 0 || scene.holdem?.layout === 'manga';
  sceneLine.textContent = (!discoveredCharacters.has('diana') ? scene.unknownLine : undefined) ?? scene.line ?? '';
  choices.replaceChildren();
  for (const [label, next] of scene.options ?? []) {
    addChoice(label, () => goToScene(next));
    preloadScene(next);
  }
  if (scene.next) preloadScene(scene.next);
  choices.hidden = !scene.options && !scene.quiz;
  continueButton.hidden = Boolean(scene.options) || blenderStage === 'launch' || blenderStage === 'workspace';
  continueButton.textContent = scene.continueLabel ?? 'Дальше';
  if (scene.quiz) renderPhoneRound();
  showScreen('story');
  if (scene.autoAdvance && scene.next) {
    continueButton.disabled = true;
    sceneTimers.push(setTimeout(() => renderScene(scene.next), scene.autoAdvance));
  }
  if (!sceneAudio.paused) sceneAudio.pause();
  sceneAudio.loop = Boolean(scene.loopSound);
  stormLight.hidden = !scene.lightning;
  stormLight.classList.toggle('is-vanish', scene.lightning === 'vanish');
  const sound = scene.sound ?? (scene.lightning ? 'assets/route/kirill-thunder.mp3' : null);
  if (sound) {
    if (sceneAudio.getAttribute('src') !== sound) sceneAudio.src = sound;
    sceneAudio.currentTime = 0;
    const playback = sceneAudio.play();
    if (voiceSequence) syncVoiceSequence(playback);
    else playback.catch(() => {});
  }
  const rewardSound = endingResult?.audio ?? (earnedAchievement ? 'assets/rewards/achievement-fanfare.mp3' : null);
  if (rewardSound) {
    if (rewardAudio.getAttribute('src') !== rewardSound) rewardAudio.src = rewardSound;
    rewardAudio.volume = sound ? 0.4 : 1;
    rewardAudio.currentTime = 0;
    rewardAudio.play().catch(() => {});
  }
  if (onRoute) {
    routeStep.textContent = `${scene.routeIndex + 1} / ${workTrip.length}`;
    routeMap.setAttribute('aria-label', `Путь Серёжи из Пигелево. Сейчас: ${scene.title}.`);
    showRouteStop(scene.routeIndex);
  } else {
    stopRouteAnimation();
  }
  (scene.intertitle ? intertitleNext : sceneTitle).focus({ preventScroll: true });
  window.scrollTo(0, 0);
  if (!activeCharacterStory && !developerMode) showCharacterEncounters(key, scene.meet);
}

function syncRoute(moveFocus = false) {
  let hash = window.location.hash;
  if (!hasGameAccess() && /^#(?:achievements|characters|story-map|character-story(?:\/.*)?|dlc(?:\/.*)?)$/.test(hash)) {
    hash = '#seryozha';
    window.history.replaceState(null, '', hash);
  }
  readCharacters();
  if (hash === '#character-story/seryozha') {
    hash = characterStoryHash('seryozha');
    window.history.replaceState(null, '', hash);
  }
  const characterStoryId = hash.startsWith('#character-story/') ? hash.slice('#character-story/'.length) : undefined;
  const inCharacterStory = characterStoryId !== undefined && canOpenCharacterStory(characterStoryId);
  if (characterStoryId !== undefined && !inCharacterStory) {
    hash = '#characters';
    window.history.replaceState(null, '', hash);
  }
  const [, dlcCharacter, dlcSection] = hash.match(/^#dlc\/([^/]+)(?:\/(achievements|story-map))?$/) ?? [];
  const dlc = downloadableStories.find(({ character, roadmap }) =>
    character === dlcCharacter && roadmap?.[0]?.scene && hasDlcAccess(character));
  if (hash.startsWith('#dlc/') && !dlc) {
    hash = '#dlc';
    window.history.replaceState(null, '', hash);
  }
  const inGame = hash === '#seryozha';
  const inAchievements = hash === '#achievements';
  const inCharacters = hash === '#characters';
  const inStoryMap = hash === '#story-map';
  const inDlc = hash === '#dlc';
  const highlightedTab = inStoryMap ? storyMapTab : inAchievements ? achievementsTab : inCharacters || inCharacterStory ? charactersTab : inDlc ? dlcTab : null;
  for (const tab of [achievementsTab, charactersTab, storyMapTab, dlcTab]) {
    if (tab === highlightedTab) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  }
  achievementsPanel.hidden = !inAchievements;
  charactersPanel.hidden = !inCharacters;
  storyMapPanel.hidden = !inStoryMap;
  dlcPanel.hidden = !inDlc;
  dlcMenuPanel.hidden = !dlc;
  characterStoryPanel.hidden = !inCharacterStory;
  if (inAchievements) renderAchievements();
  if (inCharacters) renderCharacters();
  if (inDlc) renderDlc();
  if (dlc) renderDlcMenu(dlc, dlcSection);
  if (inCharacterStory) renderCharacterStoryMap(characterStoryId);
  if (inStoryMap) {
    renderLastDecision();
    renderStoryRewards();
  } else if (endingPreview.open && !(dlc && dlcSection === 'story-map')) {
    endingPreview.close();
  }

  const sectionTitle = dlc?.title ?? (inCharacterStory ? characterStoryTitle.textContent : highlightedTab?.textContent);
  document.title = sectionTitle ? `${sectionTitle} — День Серёжи — Minigames` : inGame ? 'День Серёжи — Minigames' : 'Minigames';
  const start = pendingStoryStart;
  pendingStoryStart = undefined;
  if (inGame && start) {
    startStory(start.scene, { phone: start.phone, characterStory: start.characterStory });
    return;
  }

  activeCharacterStory = undefined;
  showScreen(dlc ? 'dlc-menu' : inGame ? 'menu' : highlightedTab ? 'details' : 'catalog', dlc, dlcSection);
  if (moveFocus) {
    const focusTarget = inStoryMap && developerMode && developerSceneMap.open
      ? '#developer-scene-filter'
      : dlc ? `#dlc-${dlcSection ?? 'menu'}-title` : inGame ? '#menu-title' : inCharacterStory ? '#character-story-title' : highlightedTab ? `${highlightedTab.hash}-title` : '#collection-title';
    document.querySelector(focusTarget).focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

for (const [scene, button] of storyStarts) {
  button.addEventListener('click', () => openStoryAt({ scene }));
}
resumeButton.addEventListener('click', () => {
  if (lastDecision) openStoryAt(lastDecision);
});

for (const button of sceneBackButtons) button.addEventListener('click', goBackScene);

playButton.addEventListener('click', () => {
  if (hasGameAccess()) startStory('morning');
});
document.querySelector('#launch-blender').addEventListener('click', () => goToScene(activeScene.next));
document.querySelector('#blender-notification').addEventListener('click', () => goToScene(activeScene.next));
function showEndCard(scene) {
  updateSceneBack();
  const inDlc = activeCharacterStory?.dlc;
  const character = activeCharacterStory && !inDlc && characterStories[activeCharacterStory.id];
  const next = activeCharacterStory ? undefined : scene.afterEndCard;
  const artwork = character ? undefined : scene.endCardArt;
  endingArt.hidden = !artwork;
  if (artwork) endingArt.src = artPath(artwork);
  endingTitle.classList.toggle('ending-title-over-art', Boolean(artwork));
  endingTitle.textContent = character ? `Сюжет ${character.name} пройден` : scene.endCard ?? 'Soon ...';
  endingTitle.lang = character ? 'ru' : scene.endCardLang ?? 'en';
  endingNote.textContent = character ? '' : scene.endCardNote ?? '';
  endingNote.hidden = !endingNote.textContent;
  endingContinue.hidden = !next;
  endingContinue.dataset.next = next ?? '';
  endingMapLink.href = inDlc ? '#dlc' : character ? characterStoryHash(activeCharacterStory.id) : '#story-map';
  endingMapLink.textContent = inDlc ? 'К дополнениям' : character ? 'К карте персонажа' : 'Карта сюжета';
  if (next) preloadScene(next);
  showScreen('ending');
  endingTitle.focus();
}

endingContinue.addEventListener('click', () => renderScene(endingContinue.dataset.next));
continueButton.addEventListener('click', () => {
  if (activeScene.quiz) {
    advancePhoneRound();
    return;
  }
  if (activeScene.next) {
    if (activeScene.transition === 'ripple-collapse' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const next = activeScene.next;
      continueButton.disabled = true;
      scenePicture.classList.add('is-ripple-collapse');
      sceneTimers.push(setTimeout(() => goToScene(next), 1250));
      return;
    }
    goToScene(activeScene.next, { remember: activeScene.ending !== 'time-loop' });
    return;
  }

  sceneHistory.push(activePosition);
  showEndCard(activeScene);
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
document.querySelector('#reset-characters').addEventListener('click', resetCharacters);
document.querySelector('#close-character-profile').addEventListener('click', () => characterProfile.close());
characterProfileBody.addEventListener('animationstart', (event) => {
  if (event.animationName !== 'character-mask-out' || !characterProfile.open || !characterProfileBody.contains(event.target)) return;
  characterRevealAudio.currentTime = 0;
  characterRevealAudio.play().catch(() => {});
});
characterProfile.addEventListener('close', () => {
  characterRevealAudio.pause();
  if (activeProfile === 'yana' || (activeProfile === 'diana' && !discoveredCharacters.has('yana'))) {
    profileQueue.unshift({ id: 'seryozha', reveal: true });
  }
  activeProfile = undefined;
  showNextCharacterProfile();
});
endingPreview.addEventListener('click', (event) => {
  if (event.target === endingPreview) endingPreview.close();
});
for (const trigger of document.querySelectorAll('[data-open-settings]')) {
  trigger.addEventListener('click', () => settingsDialog.showModal());
}

function renderDeveloperScenes() {
  const query = developerSceneFilter.value.trim().toLowerCase();
  const previousSelection = developerSceneList.value;
  const matches = Object.entries(scenes).filter(([key, scene]) => {
    const title = scene.title ?? scene.endCard ?? '';
    return `${key} ${title}`.toLowerCase().includes(query);
  });
  developerSceneList.replaceChildren(...matches.map(([key, scene]) =>
    new Option(`${scene.title ?? scene.endCard ?? key} · ${key}`, key)));
  if (matches.some(([key]) => key === previousSelection)) developerSceneList.value = previousSelection;
  else developerSceneList.selectedIndex = matches.length ? 0 : -1;
  developerSceneForm.querySelector('button').disabled = !matches.length;
  developerSceneStatus.textContent = matches.length ? '' : 'Сцены не найдены.';
}

function setDeveloperMode(enabled) {
  developerMode = enabled;
  developerAccessForm.hidden = enabled;
  developerActions.hidden = !enabled;
  developerSceneMap.hidden = !enabled;
  developerUnlock.checked = false;
  developerUnlockCharacters.checked = false;
  developerSaveAchievements.checked = false;
  developerSceneMap.open = false;
  developerSceneFilter.value = '';
  if (enabled) renderDeveloperScenes();
  else developerSceneList.replaceChildren();
  if (!enabled || (story.hidden && ending.hidden)) syncRoute();
}

developerCode.addEventListener('input', () => {
  developerCode.removeAttribute('aria-invalid');
  developerCodeStatus.textContent = '';
});

developerAccessForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = developerAccessForm.querySelector('button');
  if (submit.disabled) return;
  submit.disabled = true;
  developerCode.readOnly = true;
  try {
    if (!/^[A-Fa-f0-9]{64}$/.test(developerCode.value) || !await matchesAccessCode(developerCode.value, developerCodeHash)) {
      developerCode.setAttribute('aria-invalid', 'true');
      developerCodeStatus.textContent = 'Неверный код администратора.';
      developerCode.focus();
      return;
    }
    developerAccessForm.reset();
    developerCodeStatus.textContent = '';
    setDeveloperMode(true);
    if (settingsDialog.open) developerUnlock.focus();
  } catch {
    developerCodeStatus.textContent = 'Проверка кода недоступна. Открой сайт через HTTPS или localhost.';
  } finally {
    submit.disabled = false;
    developerCode.readOnly = false;
  }
});

developerUnlock.addEventListener('change', () => {
  if (developerMode && story.hidden && ending.hidden) syncRoute();
});
developerUnlockCharacters.addEventListener('change', () => {
  if (developerMode && !charactersPanel.hidden) renderCharacters();
});
document.querySelector('#developer-exit').addEventListener('click', () => {
  setDeveloperMode(false);
  developerTools.querySelector('summary').focus();
});
document.querySelector('#developer-open-map').addEventListener('click', () => {
  if (!developerMode) return;
  settingsDialog.close();
  developerSceneMap.open = true;
  if (window.location.hash === '#story-map') developerSceneFilter.focus();
  else window.location.hash = '#story-map';
});

developerSceneFilter.addEventListener('input', renderDeveloperScenes);
developerSceneForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const key = developerSceneList.value;
  if (!developerMode || !Object.hasOwn(scenes, key)) return;

  const dlc = downloadableStories.find(({ roadmap }) => {
    const visited = new Set();
    const pending = [roadmap?.[0]?.scene];
    while (pending.length) {
      const sceneKey = pending.pop();
      if (sceneKey === key) return true;
      if (!sceneKey || visited.has(sceneKey) || !Object.hasOwn(scenes, sceneKey)) continue;
      visited.add(sceneKey);
      const { next, options = [] } = scenes[sceneKey];
      pending.push(next, ...options.map(([, target]) => target));
    }
    return false;
  });
  openStoryAt(dlc ? dlcStoryStart(dlc, key) : { scene: key });
});

document.querySelector('#close-settings').addEventListener('click', () => settingsDialog.close());
settingsDialog.addEventListener('close', () => showProgressResetConfirmation(false));
muteSound.addEventListener('change', () => {
  applySoundSetting(muteSound.checked);
  try {
    localStorage.setItem(mutedSoundStorageKey, muteSound.checked ? '1' : '0');
  } catch {
    // Sound can still be changed for the current visit.
  }
});
requestProgressReset.addEventListener('click', () => {
  showProgressResetConfirmation(true);
  cancelProgressReset.focus();
});
cancelProgressReset.addEventListener('click', () => {
  showProgressResetConfirmation(false);
  requestProgressReset.focus();
});
document.querySelector('#confirm-progress-reset').addEventListener('click', resetProgress);
window.addEventListener('hashchange', () => syncRoute(true));
window.addEventListener('storage', (event) => {
  if (event.key === mutedSoundStorageKey) {
    applySoundSetting(event.newValue === '1');
    return;
  }
  if (event.key === progressResetStorageKey) {
    restartAtCatalog();
    return;
  }
  if (event.key === dianaAliasStorageKey) {
    dianaAlias = event.newValue;
  } else if (event.key?.startsWith(characterStoragePrefix)) {
    const id = event.key.slice(characterStoragePrefix.length);
    if (!Object.hasOwn(characters, id)) return;
    if (event.newValue === '1') discoveredCharacters.add(id);
    else discoveredCharacters.delete(id);
    if (!charactersPanel.hidden) renderCharacters();
    const openDlc = !dlcMenuPanel.hidden && window.location.hash.split('/')[1] === id;
    if (openDlc && !hasDlcAccess(id)) syncRoute(true);
    else if (!dlcPanel.hidden) renderDlc();
    else if (event.newValue !== '1' && !characterStoryPanel.hidden && window.location.hash === characterStoryHash(id)) syncRoute(true);
  }
  const rewardChanged = event.key === endingsStorageKey || achievements.some(({ id }) => event.key === gameStoragePrefix + id);
  if (rewardChanged) {
    if (window.location.hash === '#achievements') renderAchievements();
    if (window.location.hash === '#story-map' && !endingPreview.open) renderStoryRewards();
  }
  if (!dlcMenuPanel.hidden && dlcOverview.hidden && downloadableStories.some(({ achievements: results = [] }) =>
    results.some(({ id }) => event.key === gameStoragePrefix + id))) {
    syncRoute();
  }
  if (!storyMapPanel.hidden && event.key === decisionStorageKey) {
    renderLastDecision();
    renderStoryStarts();
  }
  if (event.key?.startsWith(storyStartStoragePrefix)) renderStoryStarts();
});
try {
  applySoundSetting(localStorage.getItem(mutedSoundStorageKey) === '1');
} catch {
  // The default sound setting remains available without storage.
}
syncRoute();
