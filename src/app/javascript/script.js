const $buttonMenu = document.querySelector('.navbar > button');
const $menuMobile = document.querySelector('.menu-mobile');

$buttonMenu.addEventListener('click', function() {
  $menuMobile.classList.toggle('show');
});
