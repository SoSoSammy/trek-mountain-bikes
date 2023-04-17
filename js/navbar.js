// // Create a variable for the collapsable navigation menu
let mainNav = document.getElementById('js-menu');

// Create a variable for the collapsable searchbar
let searchBar = document.getElementById('js-searchbar');

// Create a variable for the dropdown menu in the link
let dropDown1 = document.getElementById('js-dropdown-1');
let dropDown2 = document.getElementById('js-dropdown-2');
let dropDown3 = document.getElementById('js-dropdown-3');
let dropDown4 = document.getElementById('js-dropdown-4');

// Create a variable for the cart sidebar
let cartSideBar = document.getElementById('js-cart-sidebar');

// // Create a variable for the navigation menu toggle hamburger menu
let navBarToggle = document.getElementById('js-navbar-toggle');

// Create a variable for the navigation menu toggle X button
let navBarToggleClose = document.getElementById('js-navbar-toggle-close');

// // Create a variable for the searchbar toggle searchbar icon
let searchBarToggle = document.getElementById('js-searchbar-toggle');

// Create a variable for the dropdown toggle dropdown link
let dropDownToggle1 = document.getElementById('js-dropdown-toggle-1');
let dropDownToggle2 = document.getElementById('js-dropdown-toggle-2');
let dropDownToggle3 = document.getElementById('js-dropdown-toggle-3');
let dropDownToggle4 = document.getElementById('js-dropdown-toggle-4');

// Create a variable for the cart toggle shopping cart
let cartSideBarToggle = document.getElementById('js-cart-toggle');
let cartSideBarToggleDesktop = document.getElementById('js-cart-toggle-desktop');

// Create a variable for the cart toggle X button
let cartSideBarToggleClose = document.getElementById('js-cart-toggle-close');

// // When the hamburger menu is clicked on mobile, open up the navigation menu
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('nav-active');
});

// When the X button in the navigation menu is clicked on mobile, close the menu
navBarToggleClose.addEventListener('click', function () {
    mainNav.classList.toggle('nav-active');
});

// // When the searchbar icon is clicked on mobile, show the searchbar
searchBarToggle.addEventListener('click', function () {
    searchBar.classList.toggle('searchbar-active');
});

// When the dropdown link is clicked, show the dropdown menu and change the icon next to it
dropDownToggle1.addEventListener('click', function () {
    dropDown1.classList.toggle('dropdown-active');
    dropDownToggle1.childNodes[1].classList.toggle('dropdown-label-active');
});

dropDownToggle2.addEventListener('click', function () {
    dropDown2.classList.toggle('dropdown-active');
    dropDownToggle2.childNodes[1].classList.toggle('dropdown-label-active');
});

dropDownToggle3.addEventListener('click', function () {
    dropDown3.classList.toggle('dropdown-active');
    dropDownToggle3.childNodes[1].classList.toggle('dropdown-label-active');
});

dropDownToggle4.addEventListener('click', function () {
    dropDown4.classList.toggle('dropdown-active');
    dropDownToggle4.childNodes[1].classList.toggle('dropdown-label-active');
});

// When the shopping cart button is clicked, open the cart sidebar
cartSideBarToggle.addEventListener('click', function () {
    cartSideBar.classList.toggle('cart-active');
});

cartSideBarToggleDesktop.addEventListener('click', function () {
    cartSideBar.classList.toggle('cart-active');
});

// When the X button in the cart sidebar is clicked, close the sidebar
cartSideBarToggleClose.addEventListener('click', function () {
    cartSideBar.classList.toggle('cart-active');
});