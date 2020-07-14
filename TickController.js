var refreshRate = 1000;
var tickSpeed = 1000;
var number = 0;
var increment = 1;
var computeInterval;

window.onload = function(){    
    initValues();
    initCanvas();
    keepComputing();
    keepDrawingCanvas();
    keepSaving();
}

function initValues(){
    var innerNumber = getCookie("number");
    if(innerNumber != ""){
        number=innerNumber * 1;
    }
    var innerTickSpeed = getCookie("tickspeed");
    if(innerTickSpeed != ""){
        tickSpeed=innerTickSpeed * 1;
    }
}

function initCanvas(){
   redrawCanvas();
}

function keepDrawingCanvas(){
    setInterval(redrawCanvas, refreshRate);
}

function keepComputing(){
    computeInterval = setInterval(compute, tickSpeed);
}

function keepSaving(){
    setInterval(save, 10000);
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

function compute(){
    number = parseFloat(number) + parseFloat(increment);  
}

function save(){
    setCookie("number", number);
    setCookie("tickspeed", tickSpeed);
    var d = new Date();
    var time = d.toLocaleDateString() + " - - " + d.toLocaleTimeString();
    document.getElementById("lastSavedDiv").innerHTML = "Last saved:" + time;
}

function refreshTickSpeed(){
    clearInterval(computeInterval);
    keepComputing();
}

function reset(){
    setCookie("number", "");
    setCookie("tickSpeed", "");
    number = 0;
    tickSpeed = 1000;
}