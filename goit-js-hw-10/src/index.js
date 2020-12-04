import './styles.css';
import menuFood from './menu.json';
import templateCards from './template/templateMenuCard.hbs';

const creatFoodCards = templateCards(menuFood);

const refs = {
  menuFood: document.querySelector('.js-menu'),
};

refs.menuFood.insertAdjacentHTML('beforeend', creatFoodCards);
