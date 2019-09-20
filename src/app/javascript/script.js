const $buttonMenu = document.querySelector('.navbar > button');
const $menuMobile = document.querySelector('.menu-mobile');

$buttonMenu.addEventListener('click', function() {
  $menuMobile.classList.toggle('show');
});

function typeWrite(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(function() {
      elemento.innerHTML += letra;
    }, 80 * i);
  });
}
const title = document.querySelector('h1');
typeWrite(title);
