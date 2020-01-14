const menu = document.querySelector('.menu');
const ipad = window.matchMedia('screen and (max-width:767px)');
// console.log(ipad);
// console.log(menu);
const burgerButton = document.querySelector('#burger-menu');
// console.log(burgerButton);


ipad.addListener(validation)

function validation(event){
  // console.log(event.matches);
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
  }else {
    burgerButton.removeEventListener('click', hideShow);
  }
}

function hideShow(){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  }else {
    menu.classList.add('is-active');
  }
}
