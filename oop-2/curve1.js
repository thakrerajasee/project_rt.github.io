var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
var c = new curve(150, 250, canvas, context);
c.draw();
