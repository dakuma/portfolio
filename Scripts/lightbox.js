﻿$(document).ready(function () {
    $('#contactDiv').slideUp(0); // hide the contact panel on page load
    $("a[rel=image_group]").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
        
    });

    /* 
    *  not implemented
    *  sample only!
    */
    $("a#example1").fancybox();
    $("a#example2").fancybox({
        'overlayShow': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });

    $("a#example3").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    $("a#example4").fancybox({
        'opacity': true,
        'overlayShow': false,
        'transitionIn': 'elastic',
        'transitionOut': 'none'
    });

    $("a#example5").fancybox();

    $("a#example6").fancybox({
        'titlePosition': 'outside',
        'overlayColor': '#fff',
        'overlayOpacity': 1
    });

    $("a#example7").fancybox({
        'titlePosition': 'inside'
    });

    $("a#example8").fancybox({
        'titlePosition': 'over'
    });

    /*
    *   Examples - various
    */
    $("#various1").fancybox({
        'titlePosition': 'inside',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    $("#various2").fancybox();

    $("#various3").fancybox({
        'width': '75%',
        'height': '75%',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $("#various4").fancybox({
        'padding': 0,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

});