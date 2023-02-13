	var ctx1 = null;
	var canvas1,v1=0;
	var x1,y1,xCo1,yCo1;
	
	function canvas11() {
	canvas1=document.getElementById("mycanvas1"),
	ctx1 = canvas1.getContext('2d'),
	mycanvas1.addEventListener('click', handleClick1);
/*  ctx1.font = '13pt Arial Black';
    ctx1.fillStyle = 'black';
	ctx1.fillText('Almost Clean', 20, 30);
	ctx1.fillText('Dirty', 200, 30);
	ctx1.fillText('Soiled', 320, 30);
	ctx1.fillText('Filthy', 520, 30);
*/	canvas1.onmousemove = function(e) {
	var pos = getMousePos1(canvas1, e);
/*	out1.innerHTML = 'X:' + pos.x1 + ' Y:' + pos.y1;    
*/	}
	drawGrid1('deep gray', 22,22);
	linedraw1();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas1").click(function(e){
		getPosition1(e);
	});
});

function getPosition1(event){
     var rect = canvas1.getBoundingClientRect();
     x1 = event.clientX - rect.left;
      y1 = event.clientY - rect.top ;
     //drawCoordinates(x,y);
}
function getMousePos1(canvas1, evt) {
    var rect = canvas1.getBoundingClientRect();
	//alert(rect+"    "+evt.clientX+"    "+rect.left+"     "+transX);
	xCo1 = (evt.clientX - rect.left);
	yCo1 = (evt.clientY - rect.top);
    return {
    x1: evt.clientX - (rect.left) ,
    y1: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
function handleClick1(e) {
clearCanvas1();
if ((xCo1>= 0 && xCo1 <= 88) && (yCo1 >= 0 && yCo1 <= 176))
        {
        ctx1.beginPath();
		ctx1.moveTo(0,0);
		ctx1.lineTo(88, 176);
		ctx1.lineTo(0, 176);
		ctx1.closePath();
		ctx1.lineWidth = 2;
		ctx1.strokeStyle = 'black';
		ctx1.stroke();
		ctx1.fillStyle='blue';
		ctx1.fill();
		v1=1;
		}
else if ((xCo1 >= 44 && xCo1 <= 176) && (yCo1 >= 0 && yCo1 <= 176))
{
        ctx1.beginPath();
		ctx1.moveTo(44,176);
		ctx1.lineTo(132,0);
		ctx1.lineTo(220, 176);
		ctx1.closePath();
		ctx1.lineWidth = 2;
		ctx1.strokeStyle = 'black';
		ctx1.stroke();
	    ctx1.fillStyle='blue';
        ctx1.fill();
		v1=2;
}
else if ((xCo1 >= 176 && xCo1 <= 352) && (yCo1 >= 0 && yCo1 <= 176))
{
		ctx1.beginPath();
		ctx1.moveTo(176,176);
		ctx1.lineTo(308,0);
		ctx1.lineTo(440,176);
		ctx1.closePath();
		ctx1.lineWidth = 2;
		ctx1.strokeStyle = 'black';
		ctx1.stroke();
		ctx1.fillStyle='blue';
		ctx1.fill();
		v1=3;
}
else if ((xCo1 >= 352 && xCo1 <= 440) && (yCo1 >= 0 && yCo1 <= 176))
{
		ctx1.beginPath();
		ctx1.moveTo(352,176);
		ctx1.lineTo(440,0);
		ctx1.lineTo(440,300);
		ctx1.closePath();
		ctx1.lineWidth = 2;
		ctx1.strokeStyle = 'black';
		ctx1.stroke();
		ctx1.fillStyle='blue';
		ctx1.fill();
		v1=4;
}
}

   function drawGrid1(color, stepx, stepy) {
   ctx1.fillStyle = "white";

   ctx1.lineWidth = 0.5;
   ctx1.strokeStyle = color;

   for (var i =0; i < canvas1.width; i += stepx) {
   ctx1.beginPath();
   ctx1.moveTo(i, 0);
   ctx1.lineTo(i, canvas1.height);
   ctx1.stroke();
   }

   for (var i = 0; i < canvas1.height; i += stepy) {
   ctx1.beginPath();
   ctx1.moveTo(0, i);
   ctx1.lineTo(canvas1.width, i);
   ctx1.stroke();
   
  }
} 

function linedraw1(){
        ctx1.beginPath();
		ctx1.moveTo(0,0);
		ctx1.lineTo(88,176);
		ctx1.moveTo(44,176);
		ctx1.lineTo(132,0);
		ctx1.lineTo(220,176);
		ctx1.moveTo(176,176);
		ctx1.lineTo(308,0);
		ctx1.lineTo(440,176);
		ctx1.moveTo(352,176);
		ctx1.lineTo(440,0);
        ctx1.lineWidth=2;
		ctx1.stroke();
  }
  document.getElementById('clr').addEventListener('click', function() {
        ctx1.clearRect(0, 0, mycanvas1.width, mycanvas1.height);
		 drawGrid1('deep gray', 22,22);
		 linedraw1();
  }, false);

function clearCanvas1() {
	    ctx1.clearRect(0,0,mycanvas1.width,mycanvas1.height); 
	    drawGrid1('deep gray', 22,22);
		linedraw1();
  }	   