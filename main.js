
// Variable declarations
let openMenu = document.getElementById('open-menu-icon');
let closeMenu = document.getElementById('close-menu-icon');
let orderHeader = document.getElementById('order-header');
let navbar = document.getElementById('navbar');

// Adding event listeners
openMenu.addEventListener('click', displayNavbar);
closeMenu.addEventListener('click', hideNavbar);
window.addEventListener('resize', changeWidth);

// Adding functions

function displayNavbar(){
    changeWidth(); 
    orderHeader.style.backgroundColor = "rgb(251, 251, 251, 1)";  
    orderHeader.style.width = "100%";
    orderHeader.style.transition = "0.5s";
    navbar.style.display = "block";
    displayOrHideProps(openMenu, closeMenu); 
}

function hideNavbar(){
    changeWidth(); 
    orderHeader.style.backgroundColor = "transparent";
    orderHeader.style.transition = "0.5s";
    displayOrHideProps(closeMenu, openMenu);
}

function displayOrHideProps(param1, param2) {
    param1.classList.remove('d-block');
    param1.classList.add('d-none');
    
    param2.classList.remove('d-none');
    param2.classList.add('d-block');
}

function changeWidth() {
    if(document.documentElement.clientWidth >= 760){
        orderHeader.style.width = "18%";
        navbar.style.display = "block";
    }else{
        orderHeader.style.width = "0";
        navbar.style.display = "none";
    }
}