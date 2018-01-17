var pageLinks = document.links;
for( var i = 0; i < pageLinks.length; i++){
    if(pageLinks[i].getAttribute('href') === '#'){
        pageLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
        })
    }
}