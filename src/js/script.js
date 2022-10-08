const menuItem = document.querySelectorAll('.menu__item');
const menuToggle = document.querySelector('#menu__toggle');


menuItem.forEach(item =>{
  item.addEventListener('click', e =>{
    menuToggle.checked = false
  });
});