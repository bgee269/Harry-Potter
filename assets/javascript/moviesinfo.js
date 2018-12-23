$("#movie-section-nav").on("click", function(event) {
    event.preventDefault();
    $("#main-content-area").empty();
    var row1 = $("<div>");
    row1.addClass("row");
    var col1a = $("<div>");
    var col1b = $("<div>");
    col1a.addClass("col-sm-6");
    col1b.addClass("col-sm-6");
    col1a.attr("id", "scorcerer-poster");
    col1a.attr("data-state", "poster");        
    col1b.attr("id", "chamber-poster");
    col1b.attr("data-state", "poster");        
    col1a.append('<img class="moviePoster" src="assets/images/posters/scorcerer-poster.png" />');
    col1b.append('<img class="moviePoster" src="assets/images/posters/chamber-poster.png" />');
    row1.append(col1a);
    row1.append(col1b);
    $("#main-content-area").append(row1);
    var row2 = $("<div>");
    row2.addClass("row");
    var col2a = $("<div>");
    var col2b = $("<div>");
    col2a.attr("id", "prisoner-poster");
    col2a.attr("data-state", "poster");
    col2b.attr("id", "goblet-poster");
    col2b.attr("data-state", "poster");
    col2a.addClass("col-sm-6");
    col2b.addClass("col-sm-6");
    col2a.append('<img class="moviePoster" src="assets/images/posters/prisoner-poster.png" />');
    col2b.append('<img class="moviePoster" src="assets/images/posters/goblet-poster.png" />');
    row2.append(col2a);
    row2.append(col2b);
    $("#main-content-area").append(row2);
    var row3 = $("<div>");
    row3.addClass("row");
    var col3a = $("<div>");
    var col3b = $("<div>");
    col3a.attr("id", "order-poster");
    col3a.attr("data-state", "poster");
    col3b.attr("id", "prince-poster");
    col3b.attr("data-state", "poster");
    col3a.addClass("col-sm-6");
    col3b.addClass("col-sm-6");
    col3a.append('<img class="moviePoster" src="assets/images/posters/order-poster.png" />');
    col3b.append('<img class="moviePoster" src="assets/images/posters/prince-poster.png" />');
    row3.append(col3a);
    row3.append(col3b);
    $("#main-content-area").append(row3);
    var row4 = $("<div>");
    row4.addClass("row");
    var col4a = $("<div>");
    var col4b = $("<div>");
    col4a.attr("id", "hallows-poster");
    col4a.attr("data-state", "poster");
    col4b.attr("id", "hallows2-poster");
    col4b.attr("data-state", "poster");
    col4a.addClass("col-sm-6");
    col4b.addClass("col-sm-6");
    col4a.append('<img class="moviePoster" src="assets/images/posters/hallows-poster.png" />');
    col4b.append('<img class="moviePoster" src="assets/images/posters/hallows-poster.png" />');
    row4.append(col4a);
    row4.append(col4b);
    $("#main-content-area").append(row4);
    $("#scorcerer-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Sorcerer's Stone", $(this));
        }
        else{
            $("#scorcerer-poster").empty();
            $("#scorcerer-poster").append('<img class="moviePoster" src="assets/images/posters/scorcerer-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#chamber-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Chamber of Secrets", $(this));
        }
        else{
            $("#chamber-poster").empty();
            $("#chamber-poster").append('<img class="moviePoster" src="assets/images/posters/chamber-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#prisoner-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Prisoner of Azkaban", $(this));
        }
        else{
            $("#prisoner-poster").empty();
            $("#prisoner-poster").append('<img class="moviePoster" src="assets/images/posters/prisoner-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#goblet-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Goblet of Fire", $(this));
        }
        else{
            $("#goblet-poster").empty();
            $("#goblet-poster").append('<img class="moviePoster" src="assets/images/posters/goblet-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#order-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Order of the Phoenix", $(this));
        }
        else{
            $("#order-poster").empty();
            $("#order-poster").append('<img class="moviePoster" src="assets/images/posters/order-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#prince-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Half-Blood Prince", $(this));
        }
        else{
            $("#prince-poster").empty();
            $("#prince-poster").append('<img class="moviePoster" src="assets/images/posters/prince-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#hallows-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Deathly Hallows Part 1", $(this));
        }
        else{
            $("#hallows-poster").empty();
            $("#hallows-poster").append('<img class="moviePoster" src="assets/images/posters/hallows-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
    $("#hallows2-poster").on("click", function(event) {
        if($(this).attr("data-state")=="poster"){
            $(this).attr("data-state", "movie-info");
            loadMovieInfo("Harry Potter and the Deathly Hallows Part 2", $(this));
        }
        else{
            $("#hallows2-poster").empty();
            $("#hallows2-poster").append('<img class="moviePoster" src="assets/images/posters/hallows-poster.png" />');
            $(this).attr("data-state", "poster");
        }
    });
});

var movieArray = [];

function loadMovieInfo(theMovie, theItem){
    var queryURL = "https://www.omdbapi.com/?t=" + theMovie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        // console.log(theItem);
        theItem.empty();
        theItem.append("<h1>"+response.Title+"</h1>");
        theItem.append("<p>Released: "+response.Released+"</p>");
        theItem.append("<p>Runtime: "+response.Runtime+"</p>");
        theItem.append("<p>Directed by: "+response.Director+"</p>");
        theItem.append("<p>Written by: "+response.Writer+"</p>");
        theItem.append("<p>Synopsis: "+response.Plot+"</p>");
    });
}