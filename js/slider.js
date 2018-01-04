function toggleSlide() {
    if(btn1.checked){
        s1.show();
        s2.hide();
        s3.hide();
        setTimeout(function () {
            slide1.style.opacity = '1';
        },0)
    }else if(btn2.checked){
        s1.hide();
        s2.show();
        s3.hide();
        setTimeout(function () {
            slide2.style.opacity = '1';
        },0)
    }else if(btn3.checked){
        s1.hide();
        s2.hide();
        s3.show();
        setTimeout(function () {
            slide3.style.opacity = '1';
        },0)
    }
}

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var slide1 = document.querySelector('.slider__slide_1');
var slide2 = document.querySelector('.slider__slide_2');
var slide3 = document.querySelector('.slider__slide_3');
s1 = {
    name : slide1,
    hidden : function(){slide1.setAttribute('style','visibility:hidden; opacity:0')},
    visible : function(){slide1.setAttribute('style','visibility:visible; opacity:1')},
    show : function () {slide1.setAttribute('style', 'visibility:visible; opacity:0;')},
    hide : function () {slide1.setAttribute('style', 'visibility:hidden; opacity:0;')}
};
s2 = {
    name : slide2,
    hidden : function(){slide2.setAttribute('style','visibility:hidden; opacity:0')},
    visible : function(){slide2.setAttribute('style','visibility:visible; opacity:1')},
    show : function () {slide2.setAttribute('style', 'visibility:visible; opacity:0;')},
    hide : function () {slide2.setAttribute('style', 'visibility:hidden; opacity:0;')}
};
s3 = {
    name : slide3,
    hidden : function(){slide3.setAttribute('style','visibility:hidden; opacity:0')},
    visible : function(){slide3.setAttribute('style','visibility:visible; opacity:1')},
    show : function () {slide3.setAttribute('style', 'visibility:visible; opacity:0;')},
    hide : function () {slide3.setAttribute('style', 'visibility:hidden; opacity:0;')}
};


btn1.addEventListener('click', toggleSlide);
btn2.addEventListener('click', toggleSlide);
btn3.addEventListener('click', toggleSlide);

setInterval(function () {
    if(btn1.checked){
        btn2.checked = true;
        s1.hidden();
        setTimeout(function () {
            s2.visible();
        },300);
    }else if(btn2.checked){
        btn3.checked = true;
        s2.hidden();
        setTimeout(function () {
            s3.visible();
        },300);
    }else if(btn3.checked){
        btn1.checked = true;
        s3.hidden();
        setTimeout(function () {
            s1.visible();
        },300);
    }
},6000);

var block = document.querySelector('.main-header__logo-img');
block.addEventListener('click', anim);

function anim() {
    requestAnimationFrame(step);
    var stepLeft = 5;
    var now = Date.now();
    var iter = 0;
    function step(time) {
        iter++;
        var passed = Date.now() - now;
        stepLeft += 5;
        block.style.position = 'relative';
        block.style.left = stepLeft + 'px';
        var animRun = requestAnimationFrame(step);
        if(parseInt(block.style.left) >= 200){
            console.log('time',time);
            console.log('passed',passed);
            console.log('iter',iter);
            cancelAnimationFrame(animRun);
        }
    }
}

