$(document).ready(function() { 
    console.log("Page Loaded");

    var textInput = $("input");

    textInput.keyup(function() {
        $("#textRender").text((textInput.val()))
    })
});