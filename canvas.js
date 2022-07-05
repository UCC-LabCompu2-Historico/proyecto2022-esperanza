
  x=0;
  dx=2;


 /*
    Esta funcion es un canvas que dibuja un signo de pregunta
    que se mueve para la izquierda y vuelve a aparecer infinitamente.
    @method animarSigno
*/


  function animarSigno(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  
    canvas.width = canvas.width;
    var yMax = canvas.height;
  
    ctx.fillRect(85+x, yMax-40, 30, 30);
  
    ctx.fillRect(85+x, yMax-50, 30, -70);
  
    ctx.fillRect(110+x, yMax-120, 50, 30);
  
    ctx.fillRect(130+x, yMax-180, 30, 60);
  
    ctx.fillRect(80+x, yMax-180, 50, 30);  

    if(x>canvas.width){
        x=0;
    }

    x+=dx; 
  }