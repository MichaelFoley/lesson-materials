$(document).ready(function () {
    console.log('Page has loaded');
    var corsMask = "https://cors.now.sh/";
    var placeholderImage = 'http://via.placeholder.com/210x295';
    var apiUrl = "http://api.tvmaze.com/search/shows?q=";
    var searchInput = '';

    // event listener for ENTER key
    $(document).keypress(function(event){
        if(event.which == 13) {
            setInput();
        }
    })

    // replace whitespace with '+' for api URL
    function parseInputForSearch(input) {
        return input.split(' ').join('+');
    };

    // clears search results
    function emptyResults(){
        $('#result-items').empty();
    }

    function setInput() {
        emptyResults();
        searchInput = $('#searchInput').val();
        if(searchInput.length > 0) {
            apiCall(parseInputForSearch(searchInput));
        } else {
            alert('Need to input a valid show title')
        }
    };

    function apiCall(searchInput) {
        $.ajax({
            url: apiUrl+searchInput,
        }).done(function (data) {
                console.log(data)            
            for (var i = 0; i < data.length; i++) {
                var image;
                if(!data[i].show.image) {
                    image = placeholderImage
                } else {
                    image = data[i].show.image.medium
                }

                $('#result-items').append(
                    '<div class="columns"><div class="column is-8 is-offset-2"><div class="box"><article class="media"><div class="media-left"><figure class="image is-64x64"><img src="'+ image +'"></figure></div><div class="media-content"><div class="content"><p><strong><a href="'+ data[i].show.url +'" target="_blank">' + data[i].show.name + '</a></strong> <span><small>Rating: ' + Math.round(data[i].show.rating.average) + '</small></span><br>' + data[i].show.summary
                )
            }
        })
    }

    $('#submitButton').click(setInput)
});