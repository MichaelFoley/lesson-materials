$(document).ready(function () {
    const placeholderImage = 'http://via.placeholder.com/210x295';
    const apiUrl = "http://api.tvmaze.com/search/shows?q=";
    const ENTER_KEY = 13;
    const $searchInputField = $("#searchInput");
    const $submitButton = $("#submitButton");
    const $resultItems = $("#result-items");

    function displayResults(data){
    // 2. Store that data returned from API call
    // 3. Iterate through that data
        for(let i in data){
            let image = placeholderImage;
            if(data[i].show.image){
                image = data[i].show.image.medium;
            }
    // 4. Append results to page
            $resultItems.append(
                '<div class="columns">'
                +'    <div class="column is-8 is-offset-2">'
                +'        <div class="box">'
                +'            <article class="media">'
                +'                <div class="media-left">'
                +'                    <figure class="image is-64x64">'
                +'                        <img src="'+ image +'">'
                +'                    </figure>'
                +'                </div>'
                +'                <div class="media-content">'
                +'                    <div class="content">'
                +'                       <p>'
                +'                          <strong>'
                +'                              <a href="'+ data[i].show.url +'" target="_blank">' + data[i].show.name + '</a>'
                +'                          </strong>'
                +'                          <span>'
                +'                             <small>Rating: ' + Math.round(data[i].show.rating.average) + '</small>'
                +'                          </span>'
                +'                          <br/>'
                +                           data[i].show.summary
                +'                       </p>'
                +'                    </div>'
                +'                 </div>'
                +'              </article>'
                +'          </div>'
                +'     </div>'
                +'</div>'
            );
        }
    }
    // 1. Make a call to API
    function search(){
        $.ajax(apiUrl + $searchInputField.val().trim())
            .done(displayResults);
    };

    $submitButton.click(search);
    $searchInputField.keyup(function(event){
        if(event.which === ENTER_KEY){
            search();
        }
    });
});