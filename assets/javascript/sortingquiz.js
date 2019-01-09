var questionSortingObject = {
    question1: {
        question: "Your best friend is being missing. What do you do?",
        answer1: "Search for them yourself",
        answer2: "Ask your fellow students for help",
        answer3: "Notify a professor right away",
        answer4: "Move on with your life"
        },
    question2: {
        question: "What is your favorite subject at Hogwarts?",
        answer1: "Defense Against the Dark Arts",
        answer2: "Divination",
        answer3: "Arithmancy",
        answer4: "History of Magic"
    },
    question3: {
        question: "What is your favorite fantastic beast?",
        answer1: "Hippogriff",
        answer2: "Fairy",
        answer3: "Niffler",
        answer4: "Dragon"
    },
    question4: {
        question: "Who is your favorite professor at Hogwarts?",
        answer1: "Minerva McGonagall",
        answer2: "Sybill Trelawney",
        answer3: "Remus Lupin",
        answer4: "Severus Snape"
    },
    question5: {
        question: "What position would you play in a match of Quidditch?",
        answer1: "Seeker",
        answer2: "Chaser",
        answer3: "Keeper",
        answer4: "Beater"
    }
};

var sortingSet1=0;
var sortingSet2=0;
var sortingSet3=0;
var sortingSet4=0;

var currentSortingQuestionNumber = 1;

//Create global variable to tell what the current page should be

//set the current page if the table is clicked for chat room
$("#sorting-quiz-nav").on("click", function(event) {
    $('#emblem').width(96);
    event.preventDefault();
    currentSortingQuestionNumber = 1;
    sortingSet1=0;
    sortingSet2=0;
    sortingSet3=0;
    sortingSet4=0;
    if (localStorage.getItem("playerHouse") === null) {
        startSortingQuiz();
    }
    else{
        var sortingDiv = $("<div>");
        sortingDiv.attr("id", "sorting-div");
        $("#main-content-area").empty();
        $("#main-content-area").hide();
        sortingDiv.append("<p>Welcome to the great Sorting Ceremony!</p>");
        sortingDiv.append("</br>");
        sortingDiv.append("</br>");
        sortingDiv.append("<p class='myText'>You have already been sorted by the great Sorting Hat. Your house is "+localStorage.getItem("playerHouse")+"</p>");
        sortingDiv.append("</br>");
        sortingDiv.append("</br>");
        $("#main-content-area").append(sortingDiv);
        $("#start-sorting-button").css("visibility", "hidden");
        $("#main-content-area").fadeIn(fadeDuration);
        $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {} }});;
    }
});

function startSortingQuiz(){
    var sortingDiv = $("<div>");
    sortingDiv.attr("id", "sorting-div");
    $("#main-content-area").empty();
    $("#main-content-area").hide();
    sortingDiv.append("<p>Welcome to the great Sorting Ceremony!</p>");
    sortingDiv.append("</br>");
    sortingDiv.append("</br>");
    sortingDiv.append("<p class='myText'>Gryffindor? Hufflepuff? Ravenclaw? Or, Slytherin? Which house will be your home for your time in Hogwarts? Let the Sorting Hat guide you on your journey by putting it on your head and answering a few simple questions.</p>");
    sortingDiv.append("</br>");
    sortingDiv.append("</br>");
    $("#start-sorting-button").unbind("click");
    $("#start-sorting-button").on("click", function(event) {
        console.log("hello");
        sortingQuiz();
    });
    sortingDiv.append($('<button/>', {
        text: 'Start', //set text 1 to 10
        id: 'start-sorting-button',
        class: 'buttonClass',
        click: function () { sortingQuiz(); }
    }));
    $("#main-content-area").append(sortingDiv);
    $("#start-sorting-button").css("visibility", "hidden");
    $("#main-content-area").fadeIn(fadeDuration);
    $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {showSortingButton()} }});;
}

function showSortingButton(){
    $("#start-sorting-button").css("visibility", "visible");
}

function sortingQuiz(){
    console.log("start sorting quiz");
    $("#main-content-area").empty();
    var myDiv = $("<div>");
    myDiv.attr("id", "sorting-div");
    myDiv.addClass("row");
    myDiv.append("<h1 id='question'></h1>");
    myDiv.append("<h3 id='answer1'></h3>");
    myDiv.append("<h3 id='answer2'></h3>");
    myDiv.append("<h3 id='answer3'></h3>");
    myDiv.append("<h3 id='answer4'></h3>");
    $("#main-content-area").append(myDiv);
    $("#answer1").unbind("click");
    $("#answer1").on("click", function(event) {
        sortingSet1 = sortingSet1 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        currentSortingQuestionNumber++;
        newSortingQuestion();
    });
    $("#answer2").unbind("click");
    $("#answer2").on("click", function(event) {
        sortingSet2 = sortingSet2 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        currentSortingQuestionNumber++;
        newSortingQuestion();
    });
    $("#answer3").unbind("click");
    $("#answer3").on("click", function(event) {
        sortingSet3 = sortingSet3 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        currentSortingQuestionNumber++;
        newSortingQuestion();
    });
    $("#answer4").unbind("click");
    $("#answer4").on("click", function(event) {
        sortingSet4 = sortingSet4 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        currentSortingQuestionNumber++;
        newSortingQuestion();
    });
    newSortingQuestion();
}

function newSortingQuestion(){
    if(currentSortingQuestionNumber<=5){
        $("#question").text(questionSortingObject['question'+currentSortingQuestionNumber].question);
        $("#answer1").text(questionSortingObject['question'+currentSortingQuestionNumber].answer1);
        $("#answer2").text(questionSortingObject['question'+currentSortingQuestionNumber].answer2);
        $("#answer3").text(questionSortingObject['question'+currentSortingQuestionNumber].answer3);
        $("#answer4").text(questionSortingObject['question'+currentSortingQuestionNumber].answer4);
    }
    else{
        sortingAnswer();
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }
}
function sortingAnswer(){
    var playerSorting = "potato";

    if(sortingSet1>sortingSet2&&sortingSet1>sortingSet3&&sortingSet1>sortingSet4)
    {
        playerSorting = "Gryffindor";
    }
    else if(sortingSet2>sortingSet1&&sortingSet2>sortingSet3&&sortingSet2>sortingSet4)
    {
        playerSorting = "Hufflepuff";
    }
    else if(sortingSet3>sortingSet2&&sortingSet3>sortingSet1&&sortingSet3>sortingSet4)
    {
        playerSorting = "Ravenclaw";
    }
    else if(sortingSet4>sortingSet2&&sortingSet4>sortingSet3&&sortingSet4>sortingSet1)
    {
        playerSorting = "Slytherin";
    }
    else{

    }
    localStorage.setItem("playerHouse", playerSorting);
    $("#question").text("Congrats! You have been sorted into "+playerSorting);
    var queryURL = "https://www.potterapi.com/v1/houses?key=$2a$10$DDBq6xjn5.ygspvLDlhbzexwx3Y2SSm4giR3S3S8ntNgucfIJkhd6";

    if(playerSorting == "Gryffindor")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/patronusquiz.css');
        $("#emblem").attr("src", "assets/images/emblems/gry_emblem.png");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response[0]);
            $("#question").append("<h3 class='myText'>House Founder: "+response[0].founder+"</h3>");
            $("#question").append("<h3 class='myText'>Head of House: "+response[0].headOfHouse+"</h3>");
            $("#question").append("<h3 class='myText'>House Ghost: "+response[0].houseGhost+"</h3>");
            $("#question").append("<h3 class='myText'>House Mascot: "+response[0].mascot+"</h3>");
            $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {} }});;
        });
    }
    else if(playerSorting == "Hufflepuff")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/huf.css');
        $("#emblem").attr("src", "assets/images/emblems/huf_emblem.png");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response[0]);
            $("#question").append("<h3 class='myText'>House Founder: "+response[3].founder+"</h3>");
            $("#question").append("<h3 class='myText'>Head of House: "+response[3].headOfHouse+"</h3>");
            $("#question").append("<h3 class='myText'>House Ghost: "+response[3].houseGhost+"</h3>");
            $("#question").append("<h3 class='myText'>House Mascot: "+response[3].mascot+"</h3>");
            $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {} }});;
        });
    }
    else if(playerSorting == "Ravenclaw")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/rav.css');
        $("#emblem").attr("src", "assets/images/emblems/rav_emblem.png");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response[0]);
            $("#question").append("<h3 class='myText'>House Founder: "+response[1].founder+"</h3>");
            $("#question").append("<h3 class='myText'>Head of House: "+response[1].headOfHouse+"</h3>");
            $("#question").append("<h3 class='myText'>House Ghost: "+response[1].houseGhost+"</h3>");
            $("#question").append("<h3 class='myText'>House Mascot: "+response[1].mascot+"</h3>");
            $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {} }});;
        });
    }
    else if(playerSorting == "Slytherin")
    {
        $('link[href="assets/css/patronusquiz.css"]').attr('href','assets/css/sly.css');
        $("#emblem").attr("src", "assets/images/emblems/sly_emblem.png");
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response[0]);
            $("#question").append("<h3 class='myText'>House Founder: "+response[2].founder+"</h3>");
            $("#question").append("<h3 class='myText'>Head of House: "+response[2].headOfHouse+"</h3>");
            $("#question").append("<h3 class='myText'>House Ghost: "+response[2].houseGhost+"</h3>");
            $("#question").append("<h3 class='myText'>House Mascot: "+response[2].mascot+"</h3>");
            $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {} }});;
        });
    }
    else{

    }
}