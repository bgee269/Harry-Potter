$("#character-quiz-nav").on("click", function(event) {
    event.preventDefault();
    startCharacterQuiz();
});

var characterArray= [];
var possibleSpecies = ["dog","fairy","pixie","dementor","basilisk","troll","dragon","boggart","unicorn","bat","minotaur","dwarf","frog"];
var possiblePatronuses = ["hippo","bear","fox","rabbit","woolly mammoth","mouse","panda","beatle","bat","dragon","eagle","peacock"];
var currentCharacterQuestionNumber = 1; 
var currentCharacterQuizScore = 0;
var currentCharacterQuizAnswer = "";

function startCharacterQuiz(){
    var queryURL = "https://www.potterapi.com/v1/characters/?key=$2a$10$DDBq6xjn5.ygspvLDlhbzexwx3Y2SSm4giR3S3S8ntNgucfIJkhd6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        characterArray = response;
        //console.log(characterArray);
    });
    currentCharacterQuestionNumber = 1;
    currentCharacterQuizScore = 0;

    var characterDiv = $("<div>");
    characterDiv.attr("id", "character-div");
    $("#main-content-area").empty();
    $("#main-content-area").hide();
    characterDiv.append("<p>Welcome to the character quiz!</p>");
    characterDiv.append("</br>");
    characterDiv.append("</br>");
    characterDiv.append("<p class='myText'>Keep your friends close, and your enemies closer. How well do you know the people of Hogwarts and the wizarding world? Take this quiz to test your knowledge and win points for your house!</p>");
    characterDiv.append("</br>");
    characterDiv.append("</br>");
    $("#start-character-button").unbind("click");
    $("#start-character-button").on("click", function(event) {
        //console.log("hello");
        characterQuiz();
    });
    characterDiv.append($('<button/>', {
        text: 'Start', //set text 1 to 10
        id: 'start-character-button',
        class: 'buttonClass',
        click: function () { characterQuiz(); }
    }));
    $("#main-content-area").append(characterDiv);
    $("#start-character-button").css("visibility", "hidden");
    $("#main-content-area").fadeIn(fadeDuration);
    $(".myText").textillate({ in: { effect: 'fadeIn', shuffle: 'true', delay: 10, callback: function () {showCharacterButton()} }});;
}

function showCharacterButton(){
    $("#start-character-button").css("visibility", "visible");
}

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

function characterQuiz(){

    var temparray = [];
    for(var i = 0; i<characterArray.length; i++)
    {
        if("patronus" in characterArray[i]){
            temparray.push(characterArray[i].patronus);
        }
    }
    temparray.sort();
    console.log(temparray);


    console.log("start character quiz");
    $("#main-content-area").empty();
    var myDiv = $("<div>");
    myDiv.attr("id", "character-div");
    myDiv.addClass("row");
    myDiv.append("<h1 id='question'></h1>");
    myDiv.append("<h3 id='answer1'></h3>");
    myDiv.append("<h3 id='answer2'></h3>");
    myDiv.append("<h3 id='answer3'></h3>");
    myDiv.append("<h3 id='answer4'></h3>");
    $("#main-content-area").append(myDiv);
    $("#answer1").unbind("click");
    $("#answer1").on("click", function(event) {
        if($("#answer1").text()==currentCharacterQuizAnswer){
            currentCharacterQuizScore++;
        }
        currentCharacterQuestionNumber++;
        newCharacterQuestion();
    });
    $("#answer2").unbind("click");
    $("#answer2").on("click", function(event) {
        if($("#answer2").text()==currentCharacterQuizAnswer){
            currentCharacterQuizScore++;
        }
        currentCharacterQuestionNumber++;
        newCharacterQuestion();
    });
    $("#answer3").unbind("click");
    $("#answer3").on("click", function(event) {
        if($("#answer3").text()==currentCharacterQuizAnswer){
            currentCharacterQuizScore++;
        }
        currentCharacterQuestionNumber++;
        newCharacterQuestion();
    });
    $("#answer4").unbind("click");
    $("#answer4").on("click", function(event) {
        if($("#answer4").text()==currentCharacterQuizAnswer){
            currentCharacterQuizScore++;
        }
        currentCharacterQuestionNumber++;
        newCharacterQuestion();
    });
    newCharacterQuestion();
}
function newCharacterQuestion(){
    var randomNumber = Math.floor(Math.random() * ((characterArray.length-1) - 0 + 1)) + 1;
    console.log(randomNumber);
    var currentCharacter = characterArray[randomNumber];
    console.log(currentCharacter);
    if(currentCharacterQuestionNumber<=10){
        if("species" in currentCharacter){
            if(currentCharacter.species!="human"){
                $("#question").text("What species is "+currentCharacter.name+"?");
                $("#answer1").text(randomNoRepeats(possibleSpecies));
                $("#answer2").text(randomNoRepeats(possibleSpecies));
                $("#answer3").text(currentCharacter.species);
                $("#answer4").text(randomNoRepeats(possibleSpecies));
                currentCharacterQuizAnswer = currentCharacter.species;
            }
            else if("patronus" in currentCharacter){
                $("#question").text("What is "+currentCharacter.name+"'s patronus?");
                $("#answer1").text(randomNoRepeats(possiblePatronuses));
                $("#answer2").text(currentCharacter.patronus);
                $("#answer3").text(randomNoRepeats(possiblePatronuses));
                $("#answer4").text(randomNoRepeats(possiblePatronuses));
            }
            else if(currentCharacter.deathEater==true||currentCharacter.dumbledoresArmy==true||currentCharacter.ministryOfMagic==true||currentCharacter.orderOfThePhoenix==true){
                $("#question").text(currentCharacter.name+" is a member of what group?");
                $("#answer1").text("Death Eater");
                $("#answer2").text("Dumbledore's Army");
                $("#answer3").text("Ministry of Magic");
                $("#answer4").text("Order of the Phoenix");
            }
            else if("house" in currentCharacter){
                $("#question").text(currentCharacter.name + " is a member of which Hogwarts house?");
                $("#answer1").text("Gryffindor");
                $("#answer2").text("Hufflepuff");
                $("#answer3").text("Ravenclaw");
                $("#answer4").text("Slytherin");
                currentCharacterQuizAnswer = currentCharacter.house;
            }
            else{
                $("#question").text("What is the blood status of " + currentCharacter.name+"?");
                $("#answer1").text("pure-blood");
                $("#answer2").text("half-blood");
                $("#answer3").text("muggle-born");
                $("#answer4").text("unknown");
                currentCharacterQuizAnswer = currentCharacter.bloodStatus;
            }
        }
        else{
            
        }
    }
    else{
        characterAnswer();
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

function characterAnswer(){

    var playerHouse = localStorage.getItem("playerHouse");

    if(playerHouse=="Gryffindor")
    {
        $("#question").text("You earned "+currentCharacterQuizScore*10+" points for Gryffindor house!");
        writeHousePoints(globalSnapshot.houses.gryffindor.houseName, parseInt(globalSnapshot.houses.gryffindor.housePoints)+(currentCharacterQuizScore*10));
    }
    else if(playerHouse=="Hufflepuff")
    {
        $("#question").text("You earned "+currentCharacterQuizScore*10+" points for Hufflepuff house!");
        writeHousePoints(globalSnapshot.houses.hufflepuff.houseName, parseInt(globalSnapshot.houses.hufflepuff.housePoints)+(currentCharacterQuizScore*10));
    }
    else if(playerHouse=="Ravenclaw")
    {
        $("#question").text("You earned "+currentCharacterQuizScore*10+" points for Ravenclaw house!");
        writeHousePoints(globalSnapshot.houses.ravenclaw.houseName, parseInt(globalSnapshot.houses.ravenclaw.housePoints)+(currentCharacterQuizScore*10));
    }
    else if(playerHouse=="Slytherin")
    {
        $("#question").text("You earned "+currentCharacterQuizScore*10+" points for Slytherin house!");
        writeHousePoints(globalSnapshot.houses.slytherin.houseName, parseInt(globalSnapshot.houses.slytherin.housePoints)+(currentCharacterQuizScore*10));
    }
    else
    {
        $("#question").text("You got "+currentCharacterQuizScore+" questions correct! Take the Sorting Hat quiz to get placed in a house to earn points for them!");
    }
}