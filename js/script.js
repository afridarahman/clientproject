/* global $ */
$(document).ready(function() {

$("button").click(function(){
    var searchTerm = $('.search-term').val();
    var giphyAPI = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
$.ajax({
        url: giphyAPI,
        method: "GET",
        success: function(response) {
            var bookTitle = response.items[0].volumeInfo.title;
            var bookAuthor = response.items[0].volumeInfo.authors;
            var bookDescription = response.items[0].volumeInfo.description;
            var bookImage = response.items[0].volumeInfo.imageLinks.thumbnail;
            $('.searchImage').html('<img src =' + bookImage + '/>')
            $('.searchTitle').html(bookTitle + " " + "by" + " " + bookAuthor)
            $('.searchDescription').html(bookDescription)
         }
    });
});
});