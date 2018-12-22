$("#movie-section-nav").on("click", function(event) {
    event.preventDefault();
    $("#main-content-area").empty();
    loadPosters("Harry Potter and the Sorcerer's Stone");
    loadPosters("Harry Potter and the Chamber of Secrets");
    loadPosters("Harry Potter and the Prisoner of Azkaban");
    loadPosters("Harry Potter and the Goblet of Fire");
    loadPosters("Harry Potter and the Order of the Phoenix");
    loadPosters("Harry Potter and the Half-Blood Prince");
    loadPosters("Harry Potter and the Deathly Hallows Part 1");
    loadPosters("Harry Potter and the Deathly Hallows Part 2");

});

var movieArray = [];

function loadPosters(themovie){
    var queryURL = "https://www.omdbapi.com/?t=" + themovie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.Poster);
        var myDiv = $("<div>");
        myDiv.append('<img class="movie-poster" src="'+response.Poster+'" />');
        movieArray.push(myDiv);
    });
}

setTimeout(() => {
    $("#main-content-area").empty();
    console.log(movieArray);
    for(var i = 0; i<movieArray.length; i++)
    {
        $("#main-content-area").append(movieArray[i]);
    }
}, 5000);