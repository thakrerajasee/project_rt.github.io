var canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context:CanvasRenderingContext2D = canvas.getContext('2d');

let c:curve = new curve(150,250,canvas,context);
c.draw();