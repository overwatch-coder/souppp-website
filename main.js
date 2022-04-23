
// Variable declarations
let openMenu = document.getElementById('open-menu-icon');
let closeMenu = document.getElementById('close-menu-icon');
let orderHeader = document.getElementById('order-header');
let navbar = document.getElementById('navbar');

let addItemsBtn = Array.from(document.querySelectorAll('.add-general'));
let addSoup = document.querySelector('#add-soup');
let addMeat = document.querySelector('#add-meat');
let addFish = document.querySelector('#add-fish');
let addSideDish = document.querySelector('#add-side-dish');
const soup = addItemsBtn[0];
const meat = addItemsBtn[1];
const fish = addItemsBtn[2];
const sideDish = addItemsBtn[3];
let search = document.querySelector('#search');


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

// displaying customize food section
addSoup.classList.remove('d-none');
addItemsBtn.map(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('add-soup')){
            search.placeholder = 'Enter soup';
            displayActiveItem(soup, meat, fish, sideDish);
            addOrRemoveItem(addSoup, addMeat, addFish, addSideDish);
        }else if(item.classList.contains('add-meat')){
            search.placeholder = 'Enter meat';
            displayActiveItem(meat, soup, fish, sideDish);
            addOrRemoveItem(addMeat, addSoup, addFish, addSideDish);
        }else if(item.classList.contains('add-fish')){
            search.placeholder = 'Enter fish';
            displayActiveItem(fish, meat, soup, sideDish);
            addOrRemoveItem(addFish, addSoup, addMeat, addSideDish);
        }else{
            search.placeholder = 'Enter side dish';
            displayActiveItem(sideDish, meat, fish, soup);
            addOrRemoveItem(addSideDish, addSoup, addMeat, addFish);
        }
    })
})

function addOrRemoveItem(item1, item2, item3, item4) {
    item1.classList.remove('d-none');
    [item2, item3, item4].map(item => item.classList.add('d-none'));
}

function displayActiveItem(item1, item2, item3, item4) {
        item1.classList.remove('text-muted');
        ['add-item', 'text-light'].map(item => item1.classList.add(item));
        ['add-item', 'text-light'].map(item => {
            item2.classList.remove(item);
            item3.classList.remove(item);
            item4.classList.remove(item);
        });
        item2.classList.add('text-muted');
        item3.classList.add('text-muted');
        item4.classList.add('text-muted');
}