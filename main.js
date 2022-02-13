let openMenu = document.getElementById('open-menu-icon');
let closeMenu = document.getElementById('close-menu-icon');
let orderHeader = document.getElementById('order-header');
let navbar = document.getElementById('navbar');

openMenu.addEventListener('click', displayNavbar);
closeMenu.addEventListener('click', hideNavbar);

function displayNavbar(){
    orderHeader.style.backgroundColor = "rgb(251, 251, 251, 1)";
    if(document.documentElement.clientWidth >= 760){
        orderHeader.style.width = "100%";
        navbar.style.display = "block";
    }
    
    orderHeader.style.width = "100%";
    orderHeader.style.transition = "0.5s";
    navbar.style.display = "block";
    displayOrHideProps(openMenu, closeMenu);
}

function hideNavbar(){
    orderHeader.style.backgroundColor = "transparent";
    if(document.documentElement.clientWidth >= 760){
        orderHeader.style.width = "100%";
        navbar.style.display = "block";
    }else{
        orderHeader.style.width = "0";
        navbar.style.display = "none";
    }
    orderHeader.style.transition = "0.5s";
    displayOrHideProps(closeMenu, openMenu);
}

function displayOrHideProps(param1, param2) {
    param1.classList.remove('d-block');
    param1.classList.add('d-none');
    param2.classList.remove('d-none');
    param2.classList.add('d-block');
}