$(document).ready(function() { 
    console.log("Page Loaded");

    // FADEIN
    var boxFadeIn = $('#boxFadeIn');
    boxFadeIn.hide();
    boxFadeIn.fadeIn(3*1000)
        

    //FADEOUT
    var boxFadeOut = $('#boxFadeOut');
    boxFadeOut.click(function() {
        boxFadeOut.fadeOut("slow")
    });

    //TOGGLE
    var boxToggle = $('boxToggle');
    function toggleFunc() {
        boxToggle.toggle(
            function() {
                $(this).animate("left", "+=200");
            }, function() {
                $(this).animate("left", "-=200");
        })
    }
    boxToggle.click(toggleFunc)
});