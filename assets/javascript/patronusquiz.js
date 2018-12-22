var patronusArray = [["Phoenix", "Horse", "Dog"],["Swan", "Cat", "Doe"],["Otter", "Rabbit", "Fox"],["Stag", "Goat", "Wolf"]];

var questionObject = {
    question1: {
        question: "What best describes you?",
        answer1: "Brave",
        answer2: "Kind",
        answer3: "Intelligent",
        answer4: "Decisive"
        },
    question2: {
        question: "What is your favorite time of day?",
        answer1: "Morning",
        answer2: "Evening",
        answer3: "Afternoon",
        answer4: "Night"
    },
    question3: {
        question: "What was your favorite class in muggle school?",
        answer1: "Physical Education",
        answer2: "Art",
        answer3: "Math",
        answer4: "History"
    },
    question4: {
        question: "With which element are you most closely aligned?",
        answer1: "Fire",
        answer2: "Earth",
        answer3: "Air",
        answer4: "Water"
    },
    question5: {
        question: "What is your favorite season?",
        answer1: "Spring",
        answer2: "Summer",
        answer3: "Fall",
        answer4: "Winter"
    },
    question6: {
        question: "What negative trait do you least possess?",
        answer1: "Showiness",
        answer2: "Stubbornness",
        answer3: "Clinginess",
    },
    question7: {
        question: "What best categorizes you?",
        answer1: "Unique",
        answer2: "Independent",
        answer3: "Loyal",
    },
    question8: {
        question: "What would you most like touch?",
        answer1: "Shaggy",
        answer2: "Silky",
        answer3: "Soft",
    },
    question9: {
        question: "You've come to a fork in the road with three paths. Which do you take?",
        answer1: "Straight",
        answer2: "Left",
        answer3: "Right",
    }
};

var patronusSet1=0;
var patronusSet2=0;
var patronusSet3=0;
var patronusSet4=0;

var patronusSubSet1=0;
var patronusSubSet2=0;
var patronusSubSet3=0;

var currentQuestionNumber = 1;

$("#patronus-quiz-nav").on("click", function(event) {
    event.preventDefault();
    currentQuestionNumber = 1;
    patronusSet1=0;
    patronusSet2=0;
    patronusSet3=0;
    patronusSet4=0;

    patronusSubSet1=0;
    patronusSubSet2=0;
    patronusSubSet3=0;
    patronusQuiz();
});

function patronusQuiz(){
    $("#main-content-area").empty();
    var myDiv = $("<div>");
    myDiv.attr("id", "question-div");
    myDiv.append("<h1 id='question'></h1>");
    myDiv.append("<h3 id='answer1'></h3>");
    myDiv.append("<h3 id='answer2'></h3>");
    myDiv.append("<h3 id='answer3'></h3>");
    myDiv.append("<h3 id='answer4'></h3>");
    $("#main-content-area").append(myDiv);
    $("#answer1").unbind("click");
    $("#answer1").on("click", function(event) {
        if(currentQuestionNumber<=5){
            patronusSet1 = patronusSet1 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        else{
            patronusSubSet1 = patronusSubSet1 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        currentQuestionNumber++;
        newQuestion();
    });
    $("#answer2").unbind("click");
    $("#answer2").on("click", function(event) {
        if(currentQuestionNumber<=5){
            patronusSet2 = patronusSet2 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        else{
            patronusSubSet2 = patronusSubSet2 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        currentQuestionNumber++;
        newQuestion();
    });
    $("#answer3").unbind("click");
    $("#answer3").on("click", function(event) {
        if(currentQuestionNumber<=5){
            patronusSet3 = patronusSet3 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        else{
            patronusSubSet3 = patronusSubSet3 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        currentQuestionNumber++;
        newQuestion();
    });
    $("#answer4").unbind("click");
    $("#answer4").on("click", function(event) {
        if(currentQuestionNumber<=5){
            patronusSet4 = patronusSet4 + (Math.random() * (1.120 - 1.0200) + 1.0200);
        }
        currentQuestionNumber++;
        newQuestion();
    });
    newQuestion();
}

function newQuestion(){
    console.log("Question number: "+currentQuestionNumber);

    // console.log("set 1 "+patronusSet1);
    // console.log("set 2 "+patronusSet2);
    // console.log("set 3 "+patronusSet3);
    // console.log("set 4 "+patronusSet4);
    // console.log("subset 1 "+patronusSubSet1);
    // console.log("subset 2 "+patronusSubSet2);
    // console.log("subset 3 "+patronusSubSet3);

    if(currentQuestionNumber<=5){
        $("#question").text(questionObject['question'+currentQuestionNumber].question);
        $("#answer1").text(questionObject['question'+currentQuestionNumber].answer1);
        $("#answer2").text(questionObject['question'+currentQuestionNumber].answer2);
        $("#answer3").text(questionObject['question'+currentQuestionNumber].answer3);
        $("#answer4").text(questionObject['question'+currentQuestionNumber].answer4);
    }
    else if (currentQuestionNumber<=9){
        $("#question").text(questionObject['question'+currentQuestionNumber].question);
        $("#answer1").text(questionObject['question'+currentQuestionNumber].answer1);
        $("#answer2").text(questionObject['question'+currentQuestionNumber].answer2);
        $("#answer3").text(questionObject['question'+currentQuestionNumber].answer3);
        $("#answer4").text("");

    }
    else{
        patronusAnswer();
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
    }
}

function patronusAnswer(){
    var playerPatronus = "potato";
    console.log("set 1 "+patronusSet1);
    console.log("set 2 "+patronusSet2);
    console.log("set 3 "+patronusSet3);
    console.log("set 4 "+patronusSet4);
    console.log("subset 1 "+patronusSubSet1);
    console.log("subset 2 "+patronusSubSet2);
    console.log("subset 3 "+patronusSubSet3);
    if(patronusSet1>patronusSet2&&patronusSet1>patronusSet3&&patronusSet1>patronusSet4)
    {
        console.log("set 1 is biggest");
        if(patronusSubSet1>patronusSubSet2&&patronusSubSet1>patronusSubSet3)
        {
            console.log("subset 1 is biggest");
            playerPatronus = patronusArray[0][0];
        }
        if(patronusSubSet2>patronusSubSet1&&patronusSubSet2>patronusSubSet3)
        {
            console.log("subset 2 is biggest");
            playerPatronus = patronusArray[0][1];
        }
        if(patronusSubSet3>patronusSubSet1&&patronusSubSet3>patronusSubSet2)
        {
            console.log("subset 3 is biggest");
            playerPatronus = patronusArray[0][2];
        }
    }
    else if(patronusSet2>patronusSet1&&patronusSet2>patronusSet3&&patronusSet2>patronusSet4)
    {
        console.log("set 2 is biggest");
        if(patronusSubSet1>patronusSubSet2&&patronusSubSet1>patronusSubSet3)
        {
            console.log("subset 1 is biggest");
            playerPatronus = patronusArray[1][0];
        }
        if(patronusSubSet2>patronusSubSet1&&patronusSubSet2>patronusSubSet3)
        {
            console.log("subset 2 is biggest");
            playerPatronus = patronusArray[1][1];
        }
        if(patronusSubSet3>patronusSubSet1&&patronusSubSet3>patronusSubSet2)
        {
            console.log("subset 3 is biggest");
            playerPatronus = patronusArray[1][2];
        }
    }
    else if(patronusSet3>patronusSet1&&patronusSet3>patronusSet2&&patronusSet3>patronusSet4)
    {
        console.log("set 3 is biggest");
        if(patronusSubSet1>patronusSubSet2&&patronusSubSet1>patronusSubSet3)
        {
            console.log("subset 1 is biggest");
            playerPatronus = patronusArray[2][0];
        }
        if(patronusSubSet2>patronusSubSet1&&patronusSubSet2>patronusSubSet3)
        {
            console.log("subset 2 is biggest");
            playerPatronus = patronusArray[2][1];
        }
        if(patronusSubSet3>patronusSubSet1&&patronusSubSet3>patronusSubSet2)
        {
            console.log("subset 3 is biggest");
            playerPatronus = patronusArray[2][2];
        }
    }
    else if(patronusSet4>patronusSet1&&patronusSet4>patronusSet2&&patronusSet4>patronusSet3)
    {
        console.log("set 4 is biggest");
        if(patronusSubSet1>patronusSubSet2&&patronusSubSet1>patronusSubSet3)
        {
            console.log("subset 1 is biggest");
            playerPatronus = patronusArray[3][0];
        }
        if(patronusSubSet2>patronusSubSet1&&patronusSubSet2>patronusSubSet3)
        {
            console.log("subset 2 is biggest");
            playerPatronus = patronusArray[3][1];
        }
        if(patronusSubSet3>patronusSubSet1&&patronusSubSet3>patronusSubSet2)
        {
            console.log("subset 3 is biggest");
            playerPatronus = patronusArray[3][2];
        }
    }
    else{

    }
    console.log(playerPatronus);
    $("#question").text("Congrats! Your Patronus is a "+playerPatronus);
    $("#question").append('<img id="patronus-image" src="assets/images/patronuses/'+playerPatronus+'.png" />');
}