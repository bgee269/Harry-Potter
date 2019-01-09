

var containerOne = $("<div>");
containerOne.attr("id", "riddle-div");
var containerTwo = $("<div>");
containerTwo.attr("id", "riddle-div-2");

//welcome message
var welcome = $("<p>");
welcome.attr("id", "welcome-message");

//riddle text
var p = $("<p>");
p.attr("id", "riddle-text");

var questions = $("<div>");
questions.attr("id", "questions-display");

//CONTAINER ONE
//text of welcome message
welcome.text("The potions riddle is the last obstacle that Harry and Hermione have to face before entering the chamber where the Sorcerer’s Stone is hidden. Click start to see if you can solve the riddle!")
containerOne.append(welcome);

//start button
var startBtn = $("<button>");
startBtn.attr("id", "start-button");
startBtn.text("Start");
containerOne.append(startBtn);

//CONTAINER TWO
//image
var potionsPic = $("<img>");
potionsPic.attr("id", "picture");   
potionsPic.attr('src', 'assets/images/potions.png');
containerTwo.append(potionsPic);
console.log("Hello");
console.log(potionsPic.attr("src"));
console.log(containerTwo);

//text of riddle
p.text("Danger lies before you, while safety lies behind, Two of us will help you, whichever you would find, One among us seven will let you move ahead, Another will transport the drinker back instead, Two among our number hold only nettle wine, Three of us are killers, waiting hidden in line. Choose, unless you wish to stay here forevermore, To help you in your choice, we give you these clues four: First, however slyly the poison tries to hide You will always find some on nettle wine's left side; Second, different are those who stand at either end, But if you would move onward, neither is your friend; Third, as you see clearly, all are different size, Neither dwarf nor giant holds death in their insides; Fourth, the second left and the second on the right Are twins once you taste them, though different at first sight.");
containerTwo.append(p);

//question one
var riddleQuestion = $("<p>");
riddleQuestion.text("Which one of these potions will take you forward?");
containerTwo.append(riddleQuestion);

//create buttons for answers
var answerArray = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < answerArray.length; i++) {
    var button = $("<button>").text(answerArray[i]);
    button.attr("index", i);
    button.addClass("answerButton");
    containerTwo.append(button);
};

var userSelect;

//Function that answers the question
function answerQuestion(theObject) {

    
    console.log(theObject.text());
    userSelect = theObject.text();
    console.log(userSelect);
    if (userSelect === "3") {
        //question answered correctly
        $("#main-content-area").empty();
        $("#main-content-area").append("That is correct!");
    }
    else {
        //question incorrect
        $("#main-content-area").empty();
        $("#main-content-area").append("Sorry but that is wrong!");
    }
    
};



//CHANGE TO ONCLICK WITH HTML CLICK
$("#hermione-game-nav").on("click", function (event) {
    event.preventDefault();
    $("#main-content-area").empty();
    $("#main-content-area").append(containerOne);

});

$(document).on("click", "#start-button", function () {
    $("#main-content-area").empty();
    $("#main-content-area").append(containerTwo);
    // answerQuestion();

});

$(document).on("click", ".answerButton", function () {
    answerQuestion($(this));
});
