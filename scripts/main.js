$(document).ready(function () {
    // Get the menu icon and navigation items
    var menuIcon = document.querySelector('.menu-icon');
    var navItems = document.querySelector('.nav-items');

    // Add a click event to the menu icon
    menuIcon.addEventListener('click', function () {
        // Toggle the class "show" on the navigation items
        navItems.classList.toggle('show');
    });
});