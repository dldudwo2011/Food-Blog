// Find and assign your constant.


// Create a click event for it that toggles a CSS class. 
const iconToggle = document.querySelector('.menu-icon');

iconToggle.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active-menu');
});