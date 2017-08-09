$(document).ready(function () {
    console.log('Page has loaded');
    var corsMask = "https://cors.now.sh/";
    var placeholderImage = 'http://via.placeholder.com/210x295';
    var apiUrl = "http://api.tvmaze.com/search/shows?q=breaking+bad";
    var searchInput = '';

    // replace whitespace with '+' for api URL
    function parseInputForSearch(input) {
        return input.split(' ').join('+');
    };

    function setInput() {
        searchInput = $('#searchInput').val();
        apiCall(parseInputForSearch(searchInput));
    };

    function apiCall(searchInput) {
        $.ajax({
            url: apiUrl,
        }).done(function (data) {
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].show.image)
                var image;
                if(!data[i].show.image) {
                    image = placeholderImage
                } else {
                    image = data[i].show.image.medium
                }

                $('#result-items').append(
                    '<div class="columns"><div class="column is-8 is-offset-2"><div class="box"><article class="media"><div class="media-left"><figure class="image is-64x64"><img src="'+ image +'"></figure></div><div class="media-content"><div class="content"><p><strong>' + data[i].show.name

                )
            }
        })
    }

    $('#submitButton').click(setInput)

    // var boxContainer = $('<div class="box"><article class="media"><div class="media-left">');

    // $('#result-items').append(boxContainer)




    // var movieApp = {
    //     initialVars: {
    //         corsMask: 'https://cors.now.sh/',
    //         apiUrl: 'http://api.tvmaze.com/search/shows?q=',
    //         userInput: ''
    //     },
    //     appFunctions: {
    //         parseSearchTerm: function () {

    //         },
    //         apiCall: function () {
    //             $.ajax({
    //                 url: movieApp.initialVars.apiUrl,
    //             }).done(function (data) {
    //                 console.log(data)
    //                 for (var i = 0; i < data.length; i++) {
    //                     console.log(data[i].show.name)
    //                 }
    //             })
    //         }
    //     }
    // }
});