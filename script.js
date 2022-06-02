'use strict';

const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('.menu-btn');
const walletBtn = document.getElementById('wallet-btn');
const modalBoxes = document.querySelector('.modal-boxes');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

walletBtn.addEventListener('click', () => {
  modalBoxes.classList.add('open-modal');
});

function removeOpen() {
  modalBoxes.classList.remove('open-modal');
}

overlay.addEventListener('click', removeOpen);
closeBtn.addEventListener('click', removeOpen);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
