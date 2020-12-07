import './cards.css';
import template from './template/templateMenuCard.hbs';
import menu from './menu.json';

const templateFoodCards = template(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const LOCAL_THEME_KEY = 'choice-theme';

class menuCards {
  constructor({ menuContainer, switchTheme }) {
    this.refs = {
      switchTheme: document.querySelector(switchTheme),
      containerFoodMenu: document.querySelector(menuContainer),
    };

    this.refs.containerFoodMenu.insertAdjacentHTML(
      'beforeend',
      templateFoodCards,
    );

    this.refs.switchTheme.addEventListener(
      'change',
      this.choiceTheme.bind(this),
    );

    this.readStorageTheme(); // вызов ф-ия присвоения текущего класса на body взятого с LocalStoraпe
  }

  choiceTheme(e) {
    const isActive = e.target.checked;
    if (isActive) {
      this.darkTheme();
    } else {
      this.lightTheme();
    }
  }

  darkTheme() {
    this.changeTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(LOCAL_THEME_KEY, Theme.DARK);
  }

  lightTheme() {
    this.changeTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(LOCAL_THEME_KEY, Theme.LIGHT);
  }

  changeTheme(oldTheme, newTheme) {
    document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);
  }

  readStorageTheme() {
    const getLocal = localStorage.getItem(LOCAL_THEME_KEY);
    if (getLocal === Theme.DARK) {
      document.body.classList.add(getLocal);
      document.querySelector('#theme-switch-toggle').checked = true;
    }
  }
}

export default menuCards;
