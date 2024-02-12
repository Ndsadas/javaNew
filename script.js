'use strict';

let brandDark = document.querySelector('.brandDark');
let headerBars = document.querySelector('.lineIcon');
let menuClose = document.querySelector('.menuTitle');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
