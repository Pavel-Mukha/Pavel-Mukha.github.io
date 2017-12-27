function menuShow(e) {
    event.preventDefault();
    adaptiveMenuList.setAttribute('style', 'display:block; height:0; overflow:hidden');
    var heightMenu = 0;
    menuTouchOpen.style.opacity = '0';
    function animate() {
        heightMenu += 10;
        adaptiveMenuList.style.height = heightMenu + 'px';
        var openAnimation = requestAnimationFrame(animate);
        if(parseInt(adaptiveMenuList.style.height) >= 220){
            cancelAnimationFrame(openAnimation);
            adaptiveMenuList.style.height = adaptiveMenuList.scrollHeight + 'px';
            menuTouchOpen.removeEventListener('click', menuShow);
            menuTouchClose.addEventListener('click', menuHide);
        }
    }
    requestAnimationFrame(animate);
}
function menuHide(e) {
    event.preventDefault();
    var heightMenu = adaptiveMenuList.scrollHeight;
    function animate() {
        heightMenu -= 10;
        adaptiveMenuList.style.height = heightMenu + 'px';
        var closeAnimation = requestAnimationFrame(animate);
        if(parseInt(adaptiveMenuList.style.height) <= 0){
            cancelAnimationFrame(closeAnimation);
            adaptiveMenuList.style.height = 0 + 'px';
            menuTouchOpen.addEventListener('click', menuShow);
            menuTouchClose.removeEventListener('click', menuHide);
            menuTouchOpen.style.opacity = '1';
        }
    }
    requestAnimationFrame(animate);
}

var menuTouchOpen = document.querySelector('.adaptive-menu__indicator');
var adaptiveMenuList = document.querySelector('.adaptive-menu__list');
var menuTouchClose = document.querySelector('.adaptive-menu__close');

menuTouchOpen.addEventListener('click', menuShow);
