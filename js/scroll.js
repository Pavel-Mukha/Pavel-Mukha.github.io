var getLinks = document.querySelectorAll('a[href*="#"]');
var clickedLink = [];

for(var i = 0; i < getLinks.length; i++){
    var href = getLinks[i].getAttribute('href');
    var pattern = /#.+$/;
    if(pattern.test(href) === true){
        clickedLink.push(getLinks[i]);
    }
}
for(var i = 0; i < clickedLink.length; i++){
    clickedLink[i].addEventListener('click', function (event) {
        event.preventDefault();
        var href = this.getAttribute('href');
        var idValue = href.substring(1);
        var targetLink = document.querySelector('#'+idValue);
        var block = targetLink.getBoundingClientRect();
        var position = block.top + window.pageYOffset;
        var step = 0;
        var mainBody = document.documentElement;
        function animationScroll() {
            step +=50;
            window.scrollTo(0, step);
            var steper = requestAnimationFrame(animationScroll);
            if(window.pageYOffset >= mainBody.scrollHeight - mainBody.clientHeight){
                cancelAnimationFrame(steper);
            }else if(window.pageYOffset >= position){
                cancelAnimationFrame(steper);
            }
        }
        requestAnimationFrame(animationScroll);
    })
}
