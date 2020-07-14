var refreshRate = 1000;
var tickSpeed = 1000;
var number = 0;
var increment = 1;
var computeInterval;

window.onload = function(){    
    initCanvas();
    keepComputing();
    keepDrawingCanvas();
}

function initCanvas(){
   redrawCanvas();
}

function keepDrawingCanvas(){
    setInterval(redrawCanvas, refreshRate);
}


function redrawCanvas(){
    var canvas = document.getElementById("numberCircle");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.font = "20px Georgia";
    context.lineWidth = 10;
    context.arc(150, 150, 150, 0, 2 * Math.PI, false);
    context.fill();
    context.beginPath();
    context.fillStyle = "white";    
    var textWidth = context.measureText(number).width;
    context.fillText(number, 150 - (textWidth/2), 150);
    context.fill();
}

function keepComputing(){
    computeInterval = setInterval(compute, tickSpeed);
}

function compute(){
    number = number + increment;
}

function refreshTickSpeed(){
    clearInterval(computeInterval);
    keepComputing();
}