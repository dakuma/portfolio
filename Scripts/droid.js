// version notSoLame.0
var count = 0;
var randVal = 0;
var randDir = 0; 
// animation delay timer
var delay = 720;
// tracks the droids position
var leftPos = 500; // initial
var topPos = 500;  // location
// area for droid to roam
var areaHeight = 700;
var areaWidth = 950;
var horzCenter = pageWidth()/2;
var vertCenter = pageHeight()/2;
// setup droid box
var leftBox = horzCenter - 390;
var rightBox = horzCenter + 380;
var topBox = 50;
var bottomBox = vertCenter + 230;

function loadDroid()
{
	count = 0;
	while(count < 1)
	{	
		randVal = Math.ceil(Math.random() * 67);
		randDir = Math.ceil(Math.random() * 4);
		
		//
		// RIGHT
		//
		if(randDir == 1)
		{
			$('#direction').html("right");
			if(leftPos > rightBox) // go left instead
			{
				$('#direction').html("doh! Left!");
				leftPos -= (randVal);
				$('#droid').animate({"left": "-=" + randVal}, delay);
			}
			else
			{
				leftPos += randVal;
				$('#droid').animate({"left": "+=" + randVal}, delay);
			}	
		}
		//
		// DOWN
		//
		else if(randDir == 2)
		{
			$('#direction').html("down");
			if(topPos > bottomBox) // go up instead
			{
				$('#direction').html("doh! Up!");
				topPos -= randVal;
				$('#droid').animate({"top": "-=" + randVal}, delay);
			}
			else
			{
				topPos += randVal;
				$('#droid').animate({"top": "+=" + randVal}, delay);
			}	
		}
		//
		// LEFT
		//
		else if(randDir == 3)
		{
			$('#direction').html("left");
			if(leftPos <= leftBox) // go right instead
			{
				$('#direction').html("doh! Right!");
				leftPos += (randVal);
				$('#droid').animate({"left": "+=" + randVal}, delay);
			}
			else
			{
				leftPos -= randVal;
				$('#droid').animate({"left": "-=" + randVal}, delay);
			}
		}
		//
		// UP
		//
		else
		{
			$('#direction').html("up");
			if(topPos <= topBox) // go down instead
			{
				$('#direction').html("doh! Down!");
				topPos += (randVal);
				$('#droid').animate({"top": "+=" + randVal}, delay);
			}
			else
			{
				topPos -= randVal;
				$('#droid').animate({"top": "-=" + randVal}, delay);
			}	
		}
		$('#leftPos').html(leftPos + "px from Left");
		$('#topPos').html(topPos + "px from Top");
		count++;
	}	
}
// functions to grab the window width and height
function pageWidth() 
{
	return window.innerWidth != null? window.innerWidth : document.documentElement && document.documentElement.clientWidth ?       document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
} 
function pageHeight() 
{
	return  window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ?  document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;
}                  