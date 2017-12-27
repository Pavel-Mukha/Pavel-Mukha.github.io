// $(document).ready(function(){
//     var touch = $('.touch-menu');
//     var menu = $('.adaptive-navigation');

//     $(touch).on('click', function(e) {
//         e.preventDefault();
//         menu.slideToggle();
//     });
//     $(window).resize(function(){
//         var wid = $(window).width();
//         if(wid > 768 && menu.is(':hidden')) {
//             menu.removeAttr('style');
//         }
//     });
// });

function openMenu(event){
    event.preventDefault();
    adaptiveNav.setAttribute('style', 'display:block; height:0; overflow:hidden;');
    var height = 0;
    var iter = 0;
    var start = Date.now();
    function animate(){
        height +=18;
        adaptiveNav.style.height = height + 'px';
        var opener = requestAnimationFrame(animate);
        iter++;
        var timePassed = Date.now() - start;
        if(parseInt(adaptiveNav.style.height) >= adaptiveNav.scrollHeight){
            cancelAnimationFrame(opener);
            adaptiveNav.style.height = adaptiveNav.scrollHeight + 'px';
            touchMenu.removeEventListener('click', openMenu);
            touchMenu.addEventListener('click', closeMenu);
            console.log('раз вызвана функция - ' +iter );
            console.log('прошмло мс - ' + timePassed)
        }
    }
    requestAnimationFrame(animate);
}
function closeMenu(event){
    event.preventDefault();
    var height = adaptiveNav.scrollHeight;
    function animate(){
        height -=18;
        adaptiveNav.style.height = height + 'px';
        var opener = requestAnimationFrame(animate);
        if(parseInt(adaptiveNav.style.height) <= 0){
            cancelAnimationFrame(opener);
            adaptiveNav.removeAttribute('style');
            touchMenu.addEventListener('click', openMenu);
            touchMenu.removeEventListener('click', closeMenu);
        }
    }
    requestAnimationFrame(animate);
}
var adaptiveNav = document.querySelector('.adaptive-navigation');
var touchMenu = document.querySelector('.touch-menu');
touchMenu.addEventListener('click', openMenu);