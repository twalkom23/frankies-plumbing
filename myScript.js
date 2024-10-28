
//For the drop down menu
let dropDownMenu = document.querySelector('.drop-down-menu');
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    dropDownMenu.classList.toggle('show');
    hamburger.classList.toggle('rotate');
});