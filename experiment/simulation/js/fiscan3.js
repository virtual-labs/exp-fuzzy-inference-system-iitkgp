var ctx3 = null;
var canvas3;
	var x3,y3,xCo3,yCo3;
	
	function canvas33() {
	canvas3=document.getElementById("mycanvas3"),
	ctx3 = canvas3.getContext('2d'),
//	mycanvas3.addEventListener('click', handleClick3);

	ctx3.font = '13pt Arial Black';
    ctx3.fillStyle = 'black';
	canvas3.onmousemove = function(e) {
	var pos = getMousePos3(canvas3, e);
/*	out3.innerHTML = 'X:' + pos.x3 + ' Y:' + pos.y3;    
*/	}
	drawGrid3('deep gray', 22,22);
	linedraw3();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas3").click(function(e){
		getPosition3(e); 
	});
});
function getPosition3(event){
     var rect = canvas3.getBoundingClientRect();
     var x3 = event.clientX - rect.left;
     var y3 = event.clientY - rect.top ;
     //drawCoordinates(x,y);
}
function getMousePos3(canvas3, evt) {
    var rect = canvas3.getBoundingClientRect();
	//alert(rect+"    "+evt.clientX+"    "+rect.left+"     "+transX);
	xCo3 = (evt.clientX - rect.left);
	yCo3 = (evt.clientY - rect.top);
    return {
    x3: evt.clientX - (rect.left) ,
    y3: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
function drawGrid3(color, stepx, stepy) {
   ctx3.fillStyle = "white";
   

   ctx3.lineWidth = 0.5;
   ctx3.strokeStyle = color;

   for (var i =0; i <canvas3.width; i += stepx) {
   ctx3.beginPath();
   ctx3.moveTo(i, 0);
   ctx3.lineTo(i, canvas3.height);
   ctx3.stroke();
   }

   for (var i = 0; i < canvas3.height; i += stepy) {
   ctx3.beginPath();
   ctx3.moveTo(0, i);
   ctx3.lineTo(canvas3.width, i);
   ctx3.stroke();
  }
}
function linedraw3(){
        ctx3.beginPath();
		ctx3.moveTo(0,0);
		ctx3.lineTo(88,176);
		ctx3.moveTo(44,176);
		ctx3.lineTo(110,0);
		ctx3.lineTo(176,176);
		ctx3.moveTo(132,176);
		ctx3.lineTo(198,0);
		ctx3.lineTo(264,176);
		ctx3.moveTo(220,176);
		ctx3.lineTo(308,0);
		ctx3.lineTo(396,176);
		ctx3.moveTo(352,176);
		ctx3.lineTo(440,0);
        ctx3.lineWidth=2;
		ctx3.strokeStyle="black";
		ctx3.stroke();
  }
    document.getElementById('clr').addEventListener('click', function() {
        ctx3.clearRect(0, 0, mycanvas3.width, mycanvas3.height);
		 drawGrid3('deep gray', 22,22);
		 linedraw3();
  }, false);
    function clearCanvas3() {
	    ctx3.clearRect(0,0,mycanvas3.width,mycanvas3.height); 
	    drawGrid3('deep gray', 22,22);
		linedraw3();
  }	   