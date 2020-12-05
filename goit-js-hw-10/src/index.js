import './styles.css';
import menuFood from './menu.json';
import templateCards from './template/templateMenuCard.hbs';

const LOCAL_THEME_KEY = 'choice-theme';
const creatFoodCards = templateCards(menuFood);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorageTheme();

const refs = {
  menuFood: document.querySelector('.js-menu'),
  switch: document.querySelector('#theme-switch-toggle'),
};

refs.menuFood.insertAdjacentHTML('beforeend', creatFoodCards);
refs.switch.addEventListener('change', choiceTheme);

function choiceTheme(e) {
  if (e.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function darkTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem(LOCAL_THEME_KEY, Theme.DARK);
}

function lightTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem(LOCAL_THEME_KEY, Theme.LIGHT);
}

function localStorageTheme() {
  const getLocal = localStorage.getItem(LOCAL_THEME_KEY);
  document.body.classList.add(getLocal);
  if (getLocal === Theme.DARK) {
    document.querySelector('#theme-switch-toggle').checked = true;
  }
}
