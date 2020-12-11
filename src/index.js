import './styles.css';
import menuData from './js/menu.json';
import template from './menu.hbs';

const menuRef = document.querySelector('.js-menu');
const markup = template(menuData);
menuRef.insertAdjacentHTML('afterbegin', markup);



