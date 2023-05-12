$(function() 
{
    function changeSlide(newSlide) 
    {
        // cancel any timeout
        clearTimeout(slideTimeout);
        
        // change the currSlide value
        currSlide = newSlide;
        
        // make sure the currSlide value is not too low or high
        if (currSlide > maxSlide) currSlide = 0;
        else if ( currSlide < 0 ) currSlide = maxSlide;
        
        // animate the slide reel
        $slideReel.animate(
        {
            left : currSlide * -848
        }, 330, 'swing', function() 
        {     
            // set new timeout if active
            if (activeSlideshow) slideTimeout = setTimeout(nextSlide, 4200);
        })
	}
    function nextSlide() 
    {
        changeSlide(currSlide + 1);
    }
    // define some variables/DOM references
    var activeSlideshow = true,
    currSlide = 0,
    slideTimeout,
    $slideshow = $('#slideshow'),
    $slideReel = $slideshow.find('#slideshow-reel'),
    maxSlide = $slideReel.children().length - 1,
    $slideLeftNav = $slideshow.find('#slideshow-left'),
    $slideRightNav = $slideshow.find('#slideshow-right'),
    $activeNavItem = $slideshow.find('#active-nav-item');          
    // main navigation
    $slideshow.find('#slideshow-nav a.nav-item').click(function(ev) 
    {
        ev.preventDefault();  
        activeSlideshow = false;   
        changeSlide($(this).index());
    });
});