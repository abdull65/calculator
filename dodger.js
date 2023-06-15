const containerEl = document.querySelector('#container');
const gameBackgroundEl = document.querySelector('.game_background');
const dodgerEl = document.querySelector('.dodger_el')

function moveDodgerLeft() {
  dodgerEl.style.right = '0px';
}
dodgerEl.addEventListener('click', function(e) {
  moveDodgerLeft()
})