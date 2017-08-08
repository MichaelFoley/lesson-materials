$(document).ready(function() { 
// http://www.tvmaze.com/api
    console.log('Page has loaded');
    var corsMask = "https://cors.now.sh/";
    var apiUrl = "http://api.tvmaze.com/search/shows?q=girls";
    

    $.ajax({
        url: apiUrl, 
    }).done(function(data) {
        console.log(data)
    })
});