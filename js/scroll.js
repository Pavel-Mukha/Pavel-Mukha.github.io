var getLinks = document.querySelectorAll('a[href*="#"]'); //находим ссылки
var clickedLink = [];
for(var i = 0; i < getLinks.length; i++){ //ищем токен #***
    var href = getLinks[i].getAttribute('href');
    var pattern = /#.+$/;
    if(pattern.test(href) === true){
        clickedLink.push(getLinks[i]);
    }
}
for(var i = 0; i < clickedLink.length; i++){
    clickedLink[i].addEventListener('click', function (event) { //вещаем слушатели
        event.preventDefault();
        var href = this.getAttribute('href');
        var idValue = href.substring(1);
        var targetLink = document.querySelector('#'+idValue);   //цель прокрутки
        var block = targetLink.getBoundingClientRect();
        var position = block.top + window.pageYOffset;  //координаты цели
        var step = 0;
        function animationScroll() {    //анимируем
            step +=50;
            window.scrollTo(0, step);
            var steper = requestAnimationFrame(animationScroll);
            if(window.pageYOffset >= document.documentElement.scrollHeight - document.documentElement.clientHeight){    //костыль, чтобы не упереться в футер
                cancelAnimationFrame(steper);
                window.scrollTo(0, position - 20);
            }else if(window.pageYOffset >= position){
                cancelAnimationFrame(steper);
                window.scrollTo(0, position - 20);
            }
        }
        requestAnimationFrame(animationScroll);
    })
}
