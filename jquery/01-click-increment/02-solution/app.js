$(document).ready(function() {
    console.log("Page Loaded");

    var initialClickToIncreaseVal = 0;
    var clickToIncrease = $("#clickToIncrease").text(initialClickToIncreaseVal);
    

    function incrementNum() {
        initialClickToIncreaseVal++;
        clickToIncrease = $("#clickToIncrease").text(initialClickToIncreaseVal);

    // EVERYTHING BELOW IS NOT MANDATORY
        // changes color when mouseclick is down
        // contained inside the click function assigned to the button
        $(document).mousedown(function() {
            $("#clickToIncrease").css("color", "red") 
        });
        // changes color when mouseclick is up
        $(document).mouseup(function() {
            $("#clickToIncrease").css("color", "#000")
        })
    // EVERYTHING ABOVE IS NOT MANDATORY
        
    }

    // applying the incrementNum() function when clicking button
    $("#incrementButton").click(incrementNum) 
})