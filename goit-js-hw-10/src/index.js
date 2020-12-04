import './styles.css';
import menuFood from './menu.json';
import templateCards from './template/templateMenuCard.hbs';

const creatFoodCards = templateCards(menuFood);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuFood: document.querySelector('.js-menu'),
  switch: document.querySelector('.theme-switch input'),
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
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);
}

function lightTheme() {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
}
