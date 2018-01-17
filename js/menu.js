function openHeaderMenu(e) {
    e.preventDefault();
    touch.removeEventListener('click', openHeaderMenu);
    touch.addEventListener('click', closeHeaderMenu);
    headerMenu.setAttribute('style','display:block; height:0; overflow:hidden');
    headerBasket.setAttribute('style','display:block; height:0; overflow:hidden');
    touchIndicators[1].style.display = 'none';
    touchIndicators[0].setAttribute('style','position:absolute; top:50%; left:50%; margin-top:-2px; margin-left:-15px; transform:rotate(45deg)');
    touchIndicators[2].setAttribute('style','position:absolute; top:50%; left:50%; margin-top:-2px; margin-left:-15px; transform:rotate(-45deg)');
    var currentHeightMenu = 0;
    var currentHeightBasket = 0;
    function animationOpenMenu() {
        currentHeightMenu += 10;
        headerMenu.style.height = currentHeightMenu + 'px';
        var startOpenMenu = requestAnimationFrame(animationOpenMenu);
        if(currentHeightMenu >= headerMenu.scrollHeight){
            headerMenu.style.height = headerMenu.scrollHeight +'px';
            cancelAnimationFrame(startOpenMenu);
            function animationOpenBasket() {
                currentHeightBasket += 10;
                headerBasket.style.height = currentHeightBasket + 'px';
                var startOpenBasket = requestAnimationFrame(animationOpenBasket);
                if(currentHeightBasket >= headerBasket.scrollHeight){
                    headerBasket.style.height = headerBasket.scrollHeight + 'px';
                    cancelAnimationFrame(startOpenBasket);
                }
            }
            requestAnimationFrame(animationOpenBasket);
        }
    }
    requestAnimationFrame(animationOpenMenu);
}
function closeHeaderMenu(e) {
    e.preventDefault();
    touch.addEventListener('click', openHeaderMenu);
    touch.removeEventListener('click', closeHeaderMenu);
    touchIndicators[1].removeAttribute('style');
    touchIndicators[0].removeAttribute('style');
    touchIndicators[2].removeAttribute('style');
    var currentHeightBasket = headerBasket.scrollHeight;
    var currentHeightMenu = headerMenu.scrollHeight;
    function animationCloseBasket() {
        currentHeightBasket -= 10;
        if(currentHeightBasket < 10 && currentHeightBasket > 0){
            currentHeightBasket = 0;
        }
        headerBasket.style.height = currentHeightBasket + 'px';
        var startCloseBasket = requestAnimationFrame(animationCloseBasket);
        if(currentHeightBasket <= 0){
            headerBasket.style.height = '0px';
            headerBasket.style.display = 'none';
            cancelAnimationFrame(startCloseBasket);
            requestAnimationFrame(animationCloseMenu);
            function animationCloseMenu() {
                console.log(headerBasket.style.height);
                headerMenu.style.height = currentHeightMenu + 'px';
                currentHeightMenu -= 10;
                var startCloseMenu = requestAnimationFrame(animationCloseMenu);
                if(currentHeightMenu <= 0){
                    headerMenu.style.height = '0px';
                    headerMenu.style.display = 'none';
                    cancelAnimationFrame(startCloseMenu);
                }
            }

        }
    }
    requestAnimationFrame(animationCloseBasket);
}

var touch = document.getElementById('header-show');
var headerMenu = document.getElementById('header-menu');
var headerBasket = document.getElementById('header-basket');
var touchIndicators = document.querySelectorAll('.main-header__indicator');

touch.addEventListener('click', openHeaderMenu);
window.addEventListener('resize', function () {
   if(document.documentElement.clientWidth > 768){
       headerMenu.removeAttribute('style');
       headerBasket.removeAttribute('style');
   }
});