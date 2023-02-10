var ctx2 = null;
var canvas2,v2=0;
	var x2,y2,xCo2,yCo2;
	
function canvas22() {
	canvas2=document.getElementById("mycanvas2"),
	ctx2 = canvas2.getContext('2d'),
	mycanvas2.addEventListener('click', handleClick2);

/*	ctx2.font = '13pt Arial Black';
    ctx2.fillStyle = 'black';
	ctx2.fillText('Very Light', 20, 30);
	ctx2.fillText('Light', 200, 30);
	ctx2.fillText('Heavy', 300, 30);
	ctx2.fillText('Very Heavy', 460, 30);   
*/	
	canvas2.onmousemove = function(e) {
	var pos = getMousePos2(canvas2, e);
/*	out2.innerHTML = 'X:' + pos.x2 + ' Y:' + pos.y2;    
*/	}
	drawGrid2('deep gray', 22,22);
	linedraw2();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas2").click(function(e){
		getPosition2(e); 
	});
});
function getPosition2(event){
     var rect = canvas2.getBoundingClientRect();
     var x2 = event.clientX - rect.left;
     var y2 = event.clientY - rect.top ;
     //drawCoordinates(x,y);
}
function getMousePos2(canvas2, evt) {
    var rect = canvas2.getBoundingClientRect();
	//alert(rect+"    "+evt.clientX+"    "+rect.left+"     "+transX);
	xCo2 = (evt.clientX - rect.left);
	yCo2 = (evt.clientY - rect.top);
    return {
    x2: evt.clientX - (rect.left) ,
    y2: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
function handleClick2(e) {
	clearCanvas2();
if ((xCo2>= 0 && xCo2 <= 88) && (yCo2 >= 0 && yCo2 <= 176))
        {
			
        ctx2.beginPath();
		ctx2.moveTo(0,0);
		ctx2.lineTo(88, 176);
		ctx2.lineTo(0, 176);
		ctx2.closePath();
		ctx2.lineWidth = 2;
		ctx2.strokeStyle = 'black';
		ctx2.stroke();
		ctx2.fillStyle='green';
		ctx2.fill();
		v2=1;
		}
else if ((xCo2 >= 44 && xCo2 <= 176) && (yCo2 >= 0 && yCo2 <= 176))
{
	    ctx2.beginPath();
		ctx2.moveTo(44,176);
		ctx2.lineTo(132,0);
		ctx2.lineTo(220, 176);
		ctx2.closePath();
		ctx2.lineWidth = 2;
		ctx2.strokeStyle = 'black';
		ctx2.stroke();
	    ctx2.fillStyle='green';
        ctx2.fill();
		v2=2;
}
else if ((xCo2 >= 176 && xCo2 <= 330) && (yCo2 >= 0 && yCo2 <= 176))
{
		ctx2.beginPath();
		ctx2.moveTo(176,176);
		ctx2.lineTo(286,0);
		ctx2.lineTo(396,176);
		ctx2.closePath();
		ctx2.lineWidth = 2;
		ctx2.strokeStyle = 'black';
		ctx2.stroke();
		ctx2.fillStyle='green';
		ctx2.fill();
		v2=3;
}
else if ((xCo2 >= 330 && xCo2 <= 440) && (yCo2 >= 0 && yCo2 <= 176))
{
		ctx2.beginPath();
		ctx2.moveTo(330,176);
		ctx2.lineTo(440,0);
		ctx2.lineTo(440,300);
		ctx2.closePath();
		ctx2.lineWidth = 2;
		ctx2.strokeStyle = 'black';
		ctx2.stroke();
		ctx2.fillStyle='green';
		ctx2.fill();
		v2=4;
}
}
function drawGrid2(color, stepx, stepy) {
   ctx2.fillStyle = "white";
   

   ctx2.lineWidth = 0.5;
   ctx2.strokeStyle = color;

   for (var i =0; i <canvas2.width; i += stepx) {
   ctx2.beginPath();
   ctx2.moveTo(i, 0);
   ctx2.lineTo(i, canvas2.height);
   ctx2.stroke();
   }

   for (var i = 0; i < canvas2.height; i += stepy) {
   ctx2.beginPath();
   ctx2.moveTo(0, i);
   ctx2.lineTo(canvas2.width, i);
   ctx2.stroke();
  }
}
function linedraw2(){
        ctx2.beginPath();
		ctx2.moveTo(0,0);
		ctx2.lineTo(88,176);
		ctx2.moveTo(44,176);
		ctx2.lineTo(132,0);
		ctx2.lineTo(220,176);
		ctx2.moveTo(176,176);
		ctx2.lineTo(286,0);
		ctx2.lineTo(396,176);
		ctx2.moveTo(330,176);
		ctx2.lineTo(440,0);
        ctx2.lineWidth=2;
		ctx2.strokeStyle="black";
		ctx2.stroke();
  }
    document.getElementById('clr').addEventListener('click', function() {
        ctx2.clearRect(0, 0, mycanvas2.width, mycanvas2.height);
		 drawGrid2('deep gray', 22,22);
		 linedraw2();
  }, false);

  function clearCanvas2() {
	    ctx2.clearRect(0,0,mycanvas2.width,mycanvas2.height); 
	    drawGrid2('deep gray', 22,22);
		linedraw2();
  }	   