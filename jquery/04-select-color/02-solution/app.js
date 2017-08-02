$(document).ready(function() {
    console.log("Page Loaded")

    var colorResult = $('#colorResult');
    
    var colorPick = $('#colorPick');

    colorPick.on("change", function() {
         console.log(colorPick.val());
         var newColor = colorPick.val();
         colorResult.css("background-color", newColor)
    })
})