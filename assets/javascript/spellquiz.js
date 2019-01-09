$("#spell-quiz-nav").on("click", function(event) {
    event.preventDefault();
    startSpellQuiz();
});

var spellArray= [];
var currentSpellQuestionNumber = 1; 
var currentSpellQuizScore = 0;
var currentSpellQuizAnswer = "";

function startSpellQuiz(){
    var queryURL = "https://www.potterapi.com/v1/spells/?key=$2a$10$DDBq6xjn5.ygspvLDlhbzexwx3Y2SSm4giR3S3S8ntNgucfIJkhd6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        spellArray = response;
    });
    currentSpellQuestionNumber = 1;
    currentSpellQuizScore = 0;

    var spellDiv = $("<div>");
    spellDiv.attr("id", "spell-div");
    $("#main-content-area").empty();
    $("#main-content-area").hide();
    spellDiv.append("<p>Welcome to the spell quiz!</p>");
    spellDiv.append("</br>");
    spellDiv.append("</br>");
    spellDiv.append("<p class='myText'>As a budding young pupil, you're going to need to brush up on your charms and spells. Practice by taking this quiz and earning house points for your house!</p>");
    spellDiv.append("</br>");
    spellDiv.append("</br>");
    $("#start-spell-button").unbind("click");
    $("#start-spell-button").on("click", function(event) {
        //console.log("hello");
        spellQuiz();
    });
    spellDiv.append($('<button/>', {
        text: 'Start', //set text 1 to 10
        id: 'start-spell-button',
        class: 'buttonClass',
        click: function () { spellQuiz(); }
    }));
    $("#main-content-area").append(spellDiv);
    $("#start-spell-button").css("visibility", "hidden");
    $("#main-content-area").fadeIn(fadeDuration);
    $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {showSpellButton()} }});;
}

function showSpellButton(){
    $("#start-spell-button").css("visibility", "visible");
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function spellQuiz(){

    console.log("start spell quiz");
    $("#main-content-area").empty();
    var myDiv = $("<div>");
    myDiv.attr("id", "spell-div");
    myDiv.addClass("row");
    myDiv.append("<h1 id='question'></h1>");
    myDiv.append("<h3 id='answer1'></h3>");
    myDiv.append("<h3 id='answer2'></h3>");
    myDiv.append("<h3 id='answer3'></h3>");
    myDiv.append("<h3 id='answer4'></h3>");
    $("#main-content-area").append(myDiv);
    $("#answer1").unbind("click");
    $("#answer1").on("click", function(event) {
        if($("#answer1").text()==currentSpellQuizAnswer){
            currentSpellQuizScore++;
        }
        currentSpellQuestionNumber++;
        newSpellQuestion();
    });
    $("#answer2").unbind("click");
    $("#answer2").on("click", function(event) {
        if($("#answer2").text()==currentSpellQuizAnswer){
            currentSpellQuizScore++;
        }
        currentSpellQuestionNumber++;
        newSpellQuestion();
    });
    $("#answer3").unbind("click");
    $("#answer3").on("click", function(event) {
        if($("#answer3").text()==currentSpellQuizAnswer){
            currentSpellQuizScore++;
        }
        currentSpellQuestionNumber++;
        newSpellQuestion();
    });
    $("#answer4").unbind("click");
    $("#answer4").on("click", function(event) {
        if($("#answer4").text()==currentSpellQuizAnswer){
            currentSpellQuizScore++;
        }
        currentSpellQuestionNumber++;
        newSpellQuestion();
    });
    newSpellQuestion();
}
function newSpellQuestion(){
    var answerArray = [];
    var randomNumber = Math.floor(Math.random() * ((spellArray.length-1) - 0 + 1)) + 1;
    console.log(randomNumber);
    var currentSpell = spellArray[randomNumber];
    answerArray.push(currentSpell);
    randomNumber = Math.floor(Math.random() * ((spellArray.length-1) - 0 + 1)) + 1;
    answerArray.push(spellArray[randomNumber]);
    randomNumber = Math.floor(Math.random() * ((spellArray.length-1) - 0 + 1)) + 1;
    answerArray.push(spellArray[randomNumber]);
    randomNumber = Math.floor(Math.random() * ((spellArray.length-1) - 0 + 1)) + 1;
    answerArray.push(spellArray[randomNumber]);
    currentSpellQuizAnswer=currentSpell.effect;
    answerArray = shuffleArray(answerArray);
    console.log(answerArray);
    console.log(currentSpellQuizAnswer);
    console.log("current score " + currentSpellQuizScore); 
    if(currentSpellQuestionNumber<=10){
        $("#question").text("What best describes this spell: "+currentSpell.spell+"?");
        $("#answer1").text(answerArray[0].effect);
        $("#answer2").text(answerArray[1].effect);
        $("#answer3").text(answerArray[2].effect);
        $("#answer4").text(answerArray[3].effect);
    }
    else{
        spellAnswer();
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }
}
function writeHousePoints(name, points) {
    firebase.database().ref('houses/' + name).set({
        houseName: name,
        housePoints: points
    });
}

function spellAnswer(){

    var playerHouse = localStorage.getItem("playerHouse");

    if(playerHouse=="Gryffindor")
    {
        $("#question").text("You earned "+currentSpellQuizScore*10+" points for Gryffindor house!");
        writeHousePoints(globalSnapshot.houses.gryffindor.houseName, parseInt(globalSnapshot.houses.gryffindor.housePoints)+(currentSpellQuizScore*10));
    }
    else if(playerHouse=="Hufflepuff")
    {
        $("#question").text("You earned "+currentSpellQuizScore*10+" points for Hufflepuff house!");
        writeHousePoints(globalSnapshot.houses.hufflepuff.houseName, parseInt(globalSnapshot.houses.hufflepuff.housePoints)+(currentSpellQuizScore*10));
    }
    else if(playerHouse=="Ravenclaw")
    {
        $("#question").text("You earned "+currentSpellQuizScore*10+" points for Ravenclaw house!");
        writeHousePoints(globalSnapshot.houses.ravenclaw.houseName, parseInt(globalSnapshot.houses.ravenclaw.housePoints)+(currentSpellQuizScore*10));
    }
    else if(playerHouse=="Slytherin")
    {
        $("#question").text("You earned "+currentSpellQuizScore*10+" points for Slytherin house!");
        writeHousePoints(globalSnapshot.houses.slytherin.houseName, parseInt(globalSnapshot.houses.slytherin.housePoints)+(currentSpellQuizScore*10));
    }
    else
    {
        $("#question").text("You got "+currentSpellQuizScore+" questions correct! Take the Sorting Hat quiz to get placed in a house to earn points for them!");
    }
}