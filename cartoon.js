"use strict";
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
//circle for right eye
context.beginPath();
context.ellipse(380, 240, 50, 60, 70, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "black";
context.lineWidth = 5;
context.stroke();
context.fillStyle = "white";
context.fill();
//triangle for face
context.beginPath();
context.moveTo(150, 300); //(x: number, y: number)//nose
context.lineTo(600, 180); //head
context.lineTo(450, 500); //neck
context.lineWidth = 3;
context.closePath();
context.strokeStyle = "#e28637";
context.fillStyle = "#fce1c4";
context.fill();
context.stroke();
//circle for left eye
context.beginPath();
context.ellipse(410, 230, 50, 60, 70, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "black";
context.lineWidth = 5;
context.stroke();
context.fillStyle = "white";
context.fill();
//circle for eyes color 
context.beginPath();
context.arc(430, 240, 19, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "#233878";
context.lineWidth = 10;
context.stroke();
context.fillStyle = "#233878";
context.fill();
//circle for eyes color light
context.beginPath();
context.arc(430, 240, 19, 7, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "white";
context.lineWidth = 10;
context.stroke();
context.fillStyle = "white";
context.fill();
//circle for freckles1
context.beginPath();
context.arc(540, 230, 2, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "#e6a572";
context.lineWidth = 5;
context.stroke();
context.fillStyle = "#e6a572";
context.fill();
//circle for freckles2
context.beginPath();
context.arc(550, 210, 2, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "#e6a572";
context.lineWidth = 5;
context.stroke();
context.fillStyle = "#e6a572";
context.fill();
//circle for freckles3
context.beginPath();
context.arc(560, 222, 2, 0, 2 * Math.PI, true);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "#e6a572";
context.lineWidth = 5;
context.stroke();
context.fillStyle = "#e6a572";
context.fill();
//smile
context.beginPath();
context.moveTo(300, 400); //lip tip
context.lineTo(345, 393); //smirk
context.lineTo(370, 380); //edge
context.strokeStyle = "#e28637";
context.lineWidth = 3;
context.stroke();
//cheek 
context.beginPath();
context.moveTo(365, 376); //up
context.lineTo(372, 385); //down
context.strokeStyle = "#e28637";
context.lineWidth = 3;
context.stroke();
//ears
context.beginPath();
context.arc(485, 343, 28, 1.3 * Math.PI, 0.6 * Math.PI, false);
/*CanvasPath.arc(x: number, y: number, radius: number,
startAngle: number, endAngle: number, anticlockwise?: boolean): void */
context.strokeStyle = "#e6a572";
context.lineWidth = 5;
context.stroke();
//hairs
context.beginPath();
context.moveTo(488, 175);
context.bezierCurveTo(520, 180, 670, 170, 640, 200);
context.strokeStyle = "red";
context.stroke();
context.fillStyle = "red";
context.fill();
context.beginPath();
context.moveTo(440, 105);
context.bezierCurveTo(470, 93, 650, 205, 632, 250);
context.strokeStyle = "red";
context.stroke();
context.fillStyle = "red";
context.fill();
context.beginPath();
context.moveTo(532, 65);
context.bezierCurveTo(593, 122, 580, 200, 580, 295);
context.strokeStyle = "red";
context.stroke();
context.fillStyle = "red";
context.fill();
// //arc for hairs
// context.beginPath();
// context.arc(560,190,50,0*Math.PI,0.5*Math.PI,true);
// context.strokeStyle="red"
// context.stroke();
// context.lineWidth=30;
// //context.fillStyle="red" ;
// //context.fill();
// context.font='warnock pro itallic bold';
// context.fillStyle="black"
// context.fillText("BLACK",380,80)
// context.fillText("WIDOW",390,530)
// context.fillText("I have lived a lot of lives but i am done running from my past",290,550)
// context.fillText("I don't see how that's a party?",340,570)
// context.fillText("-Natasha Romanoff",350,590)
