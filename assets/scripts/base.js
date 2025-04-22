let btnOpenMenu = document.getElementById('openMenu');
let btnCloseMenu = document.getElementById('closeMenu');
let mainMenu = document.querySelector('.header-right');
let layer = document.querySelector('.layer');

if (btnCloseMenu) {
    btnCloseMenu.addEventListener('click', function() {
        closeMenuMobile();
    })
}

if (btnOpenMenu) {
    btnOpenMenu.addEventListener('click', function() {
        openMenuMobile();
    })
}

function openMenuMobile() {
    mainMenu.classList.add('visible');
    layer.classList.add('visible');
} 

function closeMenuMobile() {
    
    mainMenu.classList.add('loading');
    
    setTimeout(() => {
        mainMenu.classList.remove('visible');
        mainMenu.classList.remove('loading');
        layer.classList.remove('visible');
      }, 300);
      
} 