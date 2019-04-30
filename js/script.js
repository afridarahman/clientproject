$("#search-button").click(function(){
    var searchTerm = $('#search-term').val();
    var giphyAPI = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: giphyAPI,
        method: "GET",
        success: function(response) {
            var randomNum = Math.floor(Math.random()*(response.searchInfo.length));
            var book = response.searchInfo.textSnippet;
            $('.text-center').html('<img src =' + book + '/>');
        }
    });

});