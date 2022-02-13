let openMenu = document.getElementById('open-menu-icon');
let closeMenu = document.getElementById('close-menu-icon');
let orderHeader = document.getElementById('order-header');
let navbar = document.getElementById('navbar');

openMenu.addEventListener('click', displayNavbar);
closeMenu.addEventListener('click', hideNavbar);

function displayNavbar(){
    orderHeader.style.backgroundColor = "rgb(251, 251, 251, 1)";
    navbar.style.display = "block";
    displayOrHideProps(openMenu, closeMenu);
}

function hideNavbar(){
    orderHeader.style.backgroundColor = "transparent";
    navbar.style.display = "none";
    displayOrHideProps(closeMenu, openMenu);
}

function displayOrHideProps(param1, param2) {
    param1.classList.remove('d-block');
    param1.classList.add('d-none');

    param2.classList.remove('d-none');
    param2.classList.add('d-block');
}