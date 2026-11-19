const scenes = {
  morning: {
    title: 'Утро',
    art: 'wake',
    alt: 'Серёжа просыпается в кровати. Тёмную комнату освещают монитор и RGB-подсветка компьютера.',
    line: 'Открываю глаза. Компьютер, похоже, и не ложился. Так, что бы выпить с утра?',
  },
  coffee: {
    title: 'Большой латте',
    art: 'coffee',
    alt: 'Серёжа залпом выпивает гигантскую кружку кофе с молоком. На столе стоят две канистры.',
    line: 'Наливаю полканистры кофе и полканистры молока. Два глотка, две секунды. Теперь я слышу, как мигает подсветка.',
  },
  tea: {
    title: 'Чай на балконе',
    art: 'tea',
    alt: 'Серёжа в халате стоит на балконе с чашкой чая и смотрит на восход над крышами Петербурга.',
    line: 'Накидываю халат и выхожу на балкон с чаем. Над крышами встаёт солнце. Вот бы Диана тоже это увидела.',
  },
};

const catalog = document.querySelector('#catalog');
const novel = document.querySelector('#novel');
const menu = document.querySelector('#game-menu');
const story = document.querySelector('#story');
const ending = document.querySelector('#ending');
const sceneArt = document.querySelector('#scene-art');
const sceneTitle = document.querySelector('#scene-title');
const sceneLine = document.querySelector('#scene-line');
const choices = document.querySelector('#choices');
const continueButton = document.querySelector('#continue');
const backLink = document.querySelector('#game-back');

function showScreen(screen) {
  catalog.hidden = screen !== 'catalog';
  novel.hidden = screen === 'catalog';
  menu.hidden = screen !== 'menu';
  story.hidden = screen !== 'story';
  ending.hidden = screen !== 'ending';
  novel.classList.toggle('is-ending', screen === 'ending');
  backLink.href = screen === 'menu' ? '#' : '#seryozha';
  backLink.textContent = screen === 'menu' ? 'К играм' : 'В меню игры';
}

function renderScene(key) {
  const scene = scenes[key];
  sceneArt.src = `assets/${scene.art}.webp`;
  sceneArt.alt = scene.alt;
  sceneTitle.textContent = scene.title;
  sceneLine.textContent = scene.line;
  choices.hidden = key !== 'morning';
  continueButton.hidden = key === 'morning';
  showScreen('story');
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

document.querySelector('#play').addEventListener('click', () => {
  renderScene('morning');
  for (const key of ['coffee', 'tea']) {
    new Image().src = `assets/${scenes[key].art}.webp`;
  }
});
for (const button of choices.querySelectorAll('button')) {
  button.addEventListener('click', () => renderScene(button.dataset.next));
}
continueButton.addEventListener('click', () => {
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
