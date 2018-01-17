function animationDown (e) {
    e.preventDefault();
    if(document.documentElement.clientWidth > 768){
        logoMainPage.classList.remove('up');
        logoMainPage.classList.add('down');
        logoMainPage.removeEventListener('click', animationDown);
        logoMainPage.addEventListener('click', animationUp);
    }

}
function animationUp (e) {
    e.preventDefault();
    logoMainPage.classList.remove('down');
    logoMainPage.classList.add('up');
    logoMainPage.removeEventListener('click', animationUp);
    logoMainPage.addEventListener('click', animationDown);
}
var logoMainPage = document.getElementById('main-logo');
logoMainPage.addEventListener('click', animationDown);
window.addEventListener('resize', function () {
    if(document.documentElement.clientWidth < 768){
        if(logoMainPage.getAttribute('class') === 'down'){
            logoMainPage.classList.remove('down');
            logoMainPage.classList.add('up');
            logoMainPage.removeEventListener('click', animationUp);
            logoMainPage.addEventListener('click', animationDown);
        }
    }
});
