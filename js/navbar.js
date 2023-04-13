// // Create a variable for the collapsable navigation menu
let mainNav = document.getElementById('js-menu');
// Create a nariable for the collapsable searchbar
let searchBar = document.getElementById('js-searchbar');
// // Create a variable for the hamburger menu
let navBarToggle = document.getElementById('js-navbar-toggle');
// Create a variable for the X button in the navigation menu
let navBarToggleX = document.getElementById('js-navbar-toggle-close');
// // Create a variable for the searchbar icon
let searchBarToggle = document.getElementById('js-searchbar-toggle');

// // When the hamburger menu is clicked on mobile, open up the navigation menu
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('nav-active');
});

// When the X button in the navigation menu is clicked on mobile, close the menu
navBarToggleX.addEventListener('click', function () {
    mainNav.classList.toggle('nav-active');
});

// // When the searchbar icon is clicked on mobile, show the searchbar
searchBarToggle.addEventListener('click', function () {
    searchBar.classList.toggle('searchbar-active');
});
