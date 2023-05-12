function switchMenu(selNav)
{
	if(selNav == 1) // about selected
	{
		$('#contactDiv').slideUp(170);
		$('#contactDiv').fadeOut(330, function(){movePanel(selNav);});
	}
	else // contact selected
	{
		$('#aboutDiv').slideUp(170);
		$('#aboutDiv').fadeOut(330, function(){movePanel(selNav);});	
	}
}
function movePanel(selNav)
{
	if(selNav == 1)
	{	
		
		$('#aboutDiv').slideDown(170);
		$('#aboutDiv').fadeIn(500);
	}
	else
	{	
		$('#contactDiv').slideDown(170);
		$('#contactDiv').fadeIn(500);
	}
}	
function switchContent(curSel)
{
	// first fade out content out then set new content
	if(curSel < 5)
	{
		$('#webPane').fadeOut(150, function(){setContent(curSel);});
		$('#webImage').fadeOut(150, function(){setContent(curSel);});
	}
	else
	{
		$('#designPane').fadeOut(150, function(){setContent(curSel);});
		$('#designImage').fadeOut(150, function(){setContent(curSel);});
	}
		
	// finally fade in content 
	if(curSel < 5)
	{
		$('#webPane').fadeIn(500);
		$('#webImage').fadeIn(500);
	}
	else
	{
		$('#designPane').fadeIn(500);
		$('#designImage').fadeIn(500);
	}
}
function setContent(curSel) // sets the web pane content
{
	switch(curSel)
	{
		case 1: // darksilver.ca
		{
			$('#webImageURLsmall').attr("src", "Images/webImage1.jpg");
			$('#webImageURLbig').attr("href", "Images/BigImages/webImage1Big.jpg");
			$('#webInfo').html("Darksilver.ca is a Silverlight based project, created as a tutorial for my web students at triOS College.<span class='specialText'> ~ Launched 2010 ~</span>");
			$('#webTech').html("Created with Silverlight 3, using Expression Blend 4 and hand-written C# code!");
			$('#webLink').html("<a href='http://www.michaellewis.ca/darkSilver' id='webLink' title='darksilver.ca' target='_blank'>http://www.michaellewis.ca/darkSilver</a>");
			break;
		}
		case 2: // carquestlewisporte.com
		{
			$('#webImageURLsmall').attr("src", "Images/webImage2.jpg");
			$('#webImageURLbig').attr("href", "Images/BigImages/webImage2Big.jpg");
			$('#webInfo').html("CarQuestLewisPorte.com is the only place in Lewisporte to get quality auto parts! <span class='specialText'> ~ Currently in limited beta. ~</span>");		
			$('#webTech').html("HTML5, CSS3, with some simple JavaScript/jQuery.");		
			$('#webLink').html("<a href='http://www.michaellewis.ca/carquest' id=webLink' title='carquestlewisporte.com' target='_blank'>http://www.michaellewis.ca/carquest</a>");
			break;
		}
		case 3: // aerocomp.org
		{
			$('#webImageURLsmall').attr("src", "Images/webImage3.jpg");
			$('#webImageURLbig').attr("href", "Images/BigImages/webImage3Big.jpg");
			$('#webInfo').html("Provides simple, straight-forward syntax samples.  A Windows Phone 7 app that provides simple syntax samples.<span class='specialText'> ~ Coming 2012 ~</span>");
			$('#webTech').html("App created with Expression Studio 4, Visual Studio 2010, C# & XAML.");
			$('#webLink').html("<a href='http://www.simplesyn.ca' id=webLink' title='simplesyn.ca' target='_blank'>http://www.simplesyn.ca</a>");
			break;
		}
		case 4: // webmix.ca
		{
			$('#webImageURLsmall').attr("src", "Images/webImage4.jpg");
			$('#webImageURLbig').attr("href", "Images/BigImages/webImage4Big.jpg");
			$('#webInfo').html("Webmix.ca will be my blogging destination.  The site will be hand-crafted and built on the .NET Framework!<span class='specialText'> ~ Expected 2011 ~</span>");
			$('#webTech').html(".NET Framework, C# 4.0, SQL Server 2008, and the MVC 3 design model!");
			$('#webLink').html("<a href='http://www.webmix.ca' id=webLink' title='webmix.ca' target='_blank'>http://www.webmix.ca</a>");
			break;
		}
		case 5: // skull-diver watch
		{
			$('#designImageURLsmall').attr("src", "Images/designImage1.jpg");
			$('#designImageURLbig').attr("href", "Images/BigImages/designImage1Big.jpg");
			$('#designInfo').html("Skull-Diver Watch design, used as an embedded element(Flash) for various websites.<span class='specialText'> ~ Ticking since Jan 2011 ~</span>");
			$('#designTech').html("Vector design created solely with Microsoft Expression Design 4.");
			$('#designLink').html("<a href='http://www.michaellewis.ca/flash.aspx' id='designLink' title='Skull-Diver Watch' target='_blank'>Skull-Diver Watch</a>");
			break;
		}
		case 6: // logo samples
		{
			$('#designImageURLsmall').attr("src", "Images/designImage2.jpg");
			$('#designImageURLbig').attr("href", "Images/BigImages/designImage2Big.jpg");
			$('#designInfo').html("Creating a great logo is a challenge, but one that brings great satisfaction!<br><span class='specialText'> ~ Some of my favs! ~</span>");
			$('#designTech').html("All logos are vector based and created with Expression Design or Adobe Illustrator.");
			$('#designLink').html("<a href='http://www.darksilver.ca' id='designLink' title='darksilver.ca' target='_blank'>http://www.darksilver.ca</a>");
			break;
		}
		case 7: // Charlize Theron Image
		{
			$('#designImageURLsmall').attr("src", "Images/designImage3.jpg");
			$('#designImageURLbig').attr("href", "Images/BigImages/designImage3Big.jpg");
			$('#designInfo').html("Photo correction, manipulation and enhancements are required skills for any Webmaster!<span class='specialText'> ~ Almost looks real! ~</span>");
			$('#designTech').html("Charlize Theron with tattoos courtesy of Photoshop CS4.");
			$('#designLink').html("<a href='http://www.darksilver.ca' id='designLink' title='darksilver.ca' target='_blank'>http://www.darksilver.ca/beta2</a>");		
			break;
		}
		case 8: // JNation mock-up
		{
			$('#designImageURLsmall').attr("src", "Images/designImage4.jpg");
			$('#designImageURLbig').attr("href", "Images/BigImages/designImage4Big.jpg");
			$('#designInfo').html("In the early stages the site mockup is a great aid that helps provide clarity of vision.<span class='specialText'> ~ Mockup Sample! ~</span>");
			$('#designTech').html("Most of my early concept/design work is done using Microsoft's Expression Design.");
			$('#designLink').html("<a href='http://www.darksilver.ca/beta2' id='designLink' title='darksilver.ca' target='_blank'>http://www.darksilver.ca/beta2</a>");
			break;
		}
		default:
		{
			break;
		}
	}
}