/* global $ */
$(document).ready(function() {

$("button").click(function(){
    var searchTerm = $('.search-term').val();
    var giphyAPI = "https://www.googleapis.com/books/v1/volumes?q=harry%20potter";
    $.ajax({
        url: giphyAPI,
        method: "GET",
        success: function(response) {
            var bookTitle = response.items[0].volumeInfo.title
            $('.searchResult').html(bookTitle);
        }
    });

});
});