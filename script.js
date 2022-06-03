'use strict';
const subText = document.querySelector('.heading-subtext');
const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('.menu-btn');
const walletBtn = document.getElementById('wallet-btn');
const modalBoxes = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

function removeHidden(e) {
  e.preventDefault();
  modalBoxes.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function addHidden() {
  modalBoxes.classList.add('hidden');
  overlay.classList.add('hidden');
}
walletBtn.addEventListener('click', removeHidden);

closeBtn.addEventListener('click', addHidden);

overlay.addEventListener('click', addHidden);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

const text =
  'Call of duty warzone is a game driven token which aims to develop atrading habit where unique players can fight against other clans.';

const speed = 40;
let idx = 0;
runText();
function runText() {
  subText.textContent = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = text.length;
  }
  setTimeout(runText, speed);
}
