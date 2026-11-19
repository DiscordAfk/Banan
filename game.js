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

function showScreen(screen) {
  if (screen !== 'story') stopRouteAnimation();
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
  return `assets/${['wake', 'coffee', 'tea'].includes(art) ? '' : 'route/'}${art}.webp`;
}

function preloadScene(key) {
  const path = artPath(scenes[key].art);
  if (preloadedArt.has(path)) return;
  preloadedArt.add(path);
  new Image().src = path;
}

function renderScene(key) {
  const scene = scenes[key];
  activeScene = scene;
  const onRoute = scene.routeIndex !== undefined;
  scenePicture.classList.toggle('is-route', onRoute);
  routeMap.hidden = !onRoute;
  routeCaption.hidden = !onRoute;
  shoppingLabels.hidden = scene.prop !== 'shopping';
  phoneProjection.hidden = scene.prop !== 'phone';

  sceneArt.src = artPath(scene.art);
  sceneArt.alt = scene.alt;
  sceneTitle.textContent = scene.title;
  sceneLine.textContent = scene.line;
  choices.replaceChildren();
  for (const [label, next] of scene.options ?? []) {
    const button = document.createElement('button');
    button.className = 'choice';
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', () => renderScene(next));
    choices.append(button);
    preloadScene(next);
  }
  if (scene.next) preloadScene(scene.next);

  choices.hidden = !scene.options;
  continueButton.hidden = Boolean(scene.options);
  showScreen('story');
  if (onRoute) {
    routeStep.textContent = `${scene.routeIndex + 1} / ${workTrip.length}`;
    routeMap.setAttribute('aria-label', `Путь Серёжи из Пигелево. Сейчас: ${scene.title}.`);
    showRouteStop(scene.routeIndex);
  } else {
    stopRouteAnimation();
  }
  sceneTitle.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function syncRoute(moveFocus = false) {
  const inGame = window.location.hash === '#seryozha';
  showScreen(inGame ? 'menu' : 'catalog');
  document.title = inGame ? 'День Серёжи — Minigames' : 'Minigames';
  if (moveFocus) {
    document.querySelector(inGame ? '#menu-title' : '.card-content a').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

document.querySelector('#play').addEventListener('click', () => renderScene('morning'));
continueButton.addEventListener('click', () => {
  if (activeScene.next) {
    renderScene(activeScene.next);
    return;
  }

  showScreen('ending');
  document.querySelector('#ending-title').focus();
});
novel.addEventListener('click', (event) => {
  if (event.target.closest('a[href="#seryozha"]') && window.location.hash === '#seryozha') {
    event.preventDefault();
    syncRoute(true);
  }
});
window.addEventListener('hashchange', () => syncRoute(true));
syncRoute();
