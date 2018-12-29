//Establish connection to firebase
var config = {
    apiKey: "AIzaSyBGzNaZIOBDEMfSUnTNxWTyavig3LsWXE8",
    authDomain: "test-hp-chat.firebaseapp.com",
    databaseURL: "https://test-hp-chat.firebaseio.com",
    projectId: "test-hp-chat",
    storageBucket: "test-hp-chat.appspot.com",
    messagingSenderId: "364666926683"
};
firebase.initializeApp(config);
var database = firebase.database();
var globalSnapshot;

//Create global variable to tell what the current page should be

//set the current page if the table is clicked for chat room
$("#chat-room-nav").on("click", function(event) {
    event.preventDefault();
    chatRoom();
});

//if chat room was clicked
function chatRoom(){
   
    //run when database is updated
    database.ref().on("value", function(snapshot) {
        globalSnapshot = snapshot.val();
        //run if chat exists
        if(snapshot.hasChild("chat")==true)
        {
            //create submit button, id, and chat room
            var myDiv = $("<div>");
            myDiv.attr("id", "chatroom-div");
            var chatInput = $("<form>");
            chatInput.append("<input type='text' name='chatComment' id='chatComment' value=''><br><input id='submit' class='buttonClass' type='submit' value='Submit'>");
            myDiv.append(chatInput);
            var chatDiv = $("<div>");
            chatDiv.attr("id", "chat-room");
            chatDiv.append(snapshot.val().chat.chatRoom);
            myDiv.append(chatDiv);

            //empty the div before adding to it
            $("#main-content-area").empty();
            $("#main-content-area").hide();
            $("#main-content-area").append(myDiv);
            $("#main-content-area").fadeIn(fadeDuration);

            //unbind then rebind submit click event to write to firebase
            $("#submit").unbind("click");
            $("#submit").on("click", function(event) {
                event.preventDefault();
                //only chat if user has a name
                if(sessionStorage.getItem("username")!=null){
                    var dt = new Date();
                    var theTime = "("+pad(dt.getHours()) + ":" + pad(dt.getMinutes()) + ":" + pad(dt.getSeconds())+")";
                    $("#chat-room").prepend("<p>"+sessionStorage.getItem("username") +" "+ theTime +": " + $("#chatComment").val().trim()+"</p>");
                    // console.log($("#chat-room").html());
                    // console.log("submit");
                    firebase.database().ref('chat/').set({
                        chatRoom: $("#chat-room").html()
                    });
                    $("#chatComment").val("");
                }
            });
        }
        //if user does not have a name, pop up window to get one
        if(sessionStorage.getItem("username")==null)
        {
            // var player = prompt("Please enter your name", "");
            $("#popUpWindow").modal().show();
            
        }
    });

    //pad date to alawys have 2 digits for formatting
    function pad(n) {
        return n<10 ? '0'+n : n;
    }

    //open modal to get user name
    $("#modal-login").on("click", function(event) {
        event.preventDefault();
        // $("#popUpWindow").modal().hide();
        $('#popUpWindow').modal('toggle');
        var player = $('#user-name').val();
        sessionStorage.clear();
        sessionStorage.setItem("username", player);
    });
    
}