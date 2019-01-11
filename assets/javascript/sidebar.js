$("#patronus-quiz-nav").on("mouseover", function(event) {
    $("#patronus-quiz-nav").text("Take a nine question quiz to find your inner Patronus");
});
$("#patronus-quiz-nav").on("mouseout", function(event) {
    $("#patronus-quiz-nav").text("Defense Against the Dark Arts");
});

$("#chat-room-nav").on("mouseover", function(event) {
    $("#chat-room-nav").text("Chat with fellow Potter fans in a fun and welcoming place");
});
$("#chat-room-nav").on("mouseout", function(event) {
    $("#chat-room-nav").text("Great Hall");
});

$("#movie-section-nav").on("mouseover", function(event) {
    $("#movie-section-nav").text("Learn about the wizarding world of Harry Potter films");
});
$("#movie-section-nav").on("mouseout", function(event) {
    $("#movie-section-nav").text("A History of Magic");
});

$("#house-points-nav").on("mouseover", function(event) {
    $("#house-points-nav").text("Check in on the current house point standings");
});
$("#house-points-nav").on("mouseout", function(event) {
    $("#house-points-nav").text("House Points");
});

$("#sorting-quiz-nav").on("mouseover", function(event) {
    $("#sorting-quiz-nav").text("A short quiz will place you in one of the four houses");
});
$("#sorting-quiz-nav").on("mouseout", function(event) {
    $("#sorting-quiz-nav").text("Sorting Ceremony");
});
$("#flappy-potter-nav").on("mouseover", function(event) {
    $("#flappy-potter-nav").text("Play a quick match!");
});
$("#flappy-potter-nav").on("mouseout", function(event) {
    $("#flappy-potter-nav").text("Quidditch Match");
});
$("#character-quiz-nav").on("mouseover", function(event) {
    $("#character-quiz-nav").text("Take a quiz to earn house points");
});
$("#character-quiz-nav").on("mouseout", function(event) {
    $("#character-quiz-nav").text("Divination");
});
$("#spell-quiz-nav").on("mouseover", function(event) {
    $("#spell-quiz-nav").text("Did you study your spells?");
});
$("#spell-quiz-nav").on("mouseout", function(event) {
    $("#spell-quiz-nav").text("Charms");
});
$("#hermione-game-nav").on("mouseover", function(event) {
    $("#hermione-game-nav").text("Help Hermione solve a potions riddle");
});
$("#hermione-game-nav").on("mouseout", function(event) {
    $("#hermione-game-nav").text("Potions");
});

$(document).ready(function() { 
    var vid = document.getElementById("myVideo");
    vid.playbackRate = 1.0;
    var today = new Date();
    var thisDay = today.getDay();
    var myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    thisDay = myDays[thisDay];
    $("#today-date").text(thisDay);
    var playerHouse = localStorage.getItem("playerHouse");
    console.log(playerHouse);
    if(playerHouse == "Gryffindor")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/patronusquiz.css');
        $("#emblem").attr("src", "assets/images/emblems/gry_emblem.png");
    }
    else if(playerHouse == "Hufflepuff")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/huf.css');
        $("#emblem").attr("src", "assets/images/emblems/huf_emblem.png");
    }
    else if(playerHouse == "Ravenclaw")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/rav.css');
        $("#emblem").attr("src", "assets/images/emblems/rav_emblem.png");
    }
    else if(playerHouse == "Slytherin")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/sly.css');
        $("#emblem").attr("src", "assets/images/emblems/sly_emblem.png");
    }
    else{

    }
});
