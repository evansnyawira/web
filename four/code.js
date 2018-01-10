window.addEventListener('load', function(){
    var html = '';
    for(var i=0; i<25; i++){
        html += '<span></span><span></span>';
    }
    var containers = document.querySelectorAll('.tiled > *:last-child');
    for(var i=0; i<containers.length; i++){
        containers[i].innerHTML = html;
    }
});