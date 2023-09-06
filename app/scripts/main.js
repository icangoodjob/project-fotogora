// import 'fslightbox'; // Lightbox: npm install fslightbox, site: https://fslightbox.com/javascript/documentation
// import Swiper from 'swiper'; // Slider: npm install swiper, site: https://swiperjs.com/get-started
// import AirDatepicker from 'air-datepicker'; // Datepicker: npm i air-datepicker -S, site: https://air-datepicker.com/ru
import fslightbox from 'fslightbox';
import './modules/sliders.js';

import * as Module from './modules/functions.js';
Module.isWebp();

const menuBody = document.querySelector('.menu');
const menuCatalog = document.querySelector('.menu-catalog');
const filterBody = document.querySelector('.catalog__aside');
document.addEventListener('click', documentActions);
function documentActions(event) {
	let target = event.target;
	// Открытие/ закрытие разделов в фильтрах
	if (target.closest('.filter-group__btn')) {
		let parent = target.parentNode;
		parent.classList.toggle('show');
		target.innerText = parent.classList.contains('show') ? "Скрыть" : "Показать все 20 брендов";
	}
	// Показать скрытые разделы на главной странице
	if (target.closest('.partions__btn')) {
		let parent = target.parentNode.previousElementSibling;
		parent.classList.toggle('show');
		target.innerText = parent.classList.contains('show') ? "Скрыть" : "Смотреть все разделы";
	}
	// Добавление активного класса для кнопки Избранное
	if (target.closest('.favorites-btn')) {
		target.classList.toggle('active');
	}
	// Открытие/закрытие меню
	if (target.closest('.menu-header__button')) {
		target.parentNode.classList.toggle('show');
	}
	if (!target.closest('.top-header__menu') || target.closest('.close-btn')) {
		menuBody?.parentNode.classList.remove('show');
	}
	// Открытие/закрытие каталога
	if (target.closest('#catalog-btn')) {
		menuCatalog?.classList.toggle('show');
	}
	if (!target.closest('#catalog-btn') && !target.closest('.menu-catalog__body')) {
		menuCatalog?.classList.remove('show');
	}
	// Открытие/закрытие фильтров
	if (target.closest('#filter-btn')) {
		filterBody?.classList.toggle('show');
	}
	if (!target.closest('.catalog__filter') && !target.closest('#filter-btn')) {
		filterBody?.classList.remove('show');
	}
}
// HashChange Event for Links
window.addEventListener('hashchange', getHash);
function getHash(event) {
	let hash = window.location.hash;
	let target = event.target;
	const hashLink = document.querySelector(`.card-info__link[href$="${hash}"]`);
	if (hashLink) {
		const hashElement = document.querySelector(hash);
		window.scrollTo({ top: hashElement.offsetTop });
	}
}
if (window.location.hash) {
	window.dispatchEvent(new Event("hashchange"))
}

