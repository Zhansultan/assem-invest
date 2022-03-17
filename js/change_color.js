let image = document.getElementById('white_phone_image');

document.getElementById("header-bottom-right").onmouseover = function() {
   console.log('changeColor');
    image.src = 'images/Vector_black.svg';
};

document.getElementById("header-bottom-right").onmouseout = function() {
  console.log('changeColor');
   image.src = 'images/Vector_white.svg';
};

let width = document.getElementById('buildings-first').offsetWidth;
console.log('width = ' + width);

let deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

if(deviceWidth > 768) {

    console.log("device width = " + width)
    let buildings_third = document.getElementById('buildings-third');

    buildings_third.style.left = width/1.6 + 'px';
}


let buildings_second = document.getElementById("buildings-second")

buildings_second_height = buildings_second.offsetHeight + 60

let buildings = document.getElementById("buildings")

buildings.style.height = buildings_second_height + 'px'

document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '+' + x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
});