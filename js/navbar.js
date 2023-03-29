// Create a variable for the collapsable navigation menu
let mainNav = document.getElementById('js-menu');
// Create a variable for the hamburger menu
let navBarToggle = document.getElementById('js-navbar-toggle');
// Create a variable for the searchbar icon
let searchBarToggle = document.getElementById('js-searchbar-toggle');

// When the hamburger menu is clicked on mobile, open up the navigation menu
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('nav-active');
});

// When the searchbar icon is clicked on mobile, open up the navigation menu
searchBarToggle.addEventListener('click', function () {
    mainNav.classList.add('nav-active');
});
