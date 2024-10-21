//Making the hamburger icon show the screen in mobile mode

//To show the pop up
const popUp = document.getElementById('popUp');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
});

//To close the pop up
const closeButton = document.querySelector('.closeBtn');

closeButton.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
})

//Clickable divs on the services part of the home page.
document.getElementById('clickableDiv').addEventListener('click', function () {
    window.location.href = "https://www.google.com/";
})