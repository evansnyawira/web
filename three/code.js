window.addEventListener('load', function(){
    var mouseXY ={};
    var pointer = document.querySelector('#pointer');
   
    document.addEventListener('mousemove', function(event){
        mouseXY.X = event.pageX;
        mouseXY.Y = event.pageY;
    });

    setInterval(function(){
        var pointerXY = pointer.getBoundingClientRect();
        var change ={
            'x': pointerXY.left - mouseXY.X,
            'y': pointerXY.top - mouseXY.Y
        };

        var tan = change.y/change.x;
        var atan = Math.atan(tan)* 180 / Math.PI;
        if(change.x > 0 && change.y > 0){
            atan += 180;
        }else if(change.x > 0 && change.y < 0){
            atan -+ 180;
        }
        pointer.style.transform = 'rotate(' + atan + 'deg)';

    }, 20);
    
});