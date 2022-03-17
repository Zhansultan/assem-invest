var aside = document.getElementById('aside');
var aside_backdrop = document.getElementById('aside-backdrop');

function toggleMenu(action) {
  if (action == 'show') {
    aside.style.left = '0';
    aside_backdrop.style.display = 'block';
  } else {
    aside.style.left = '-270px';
    aside_backdrop.style.display = 'none';
  }
}
