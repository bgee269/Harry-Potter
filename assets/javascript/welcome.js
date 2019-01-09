//welcome message on main page

//clears main content area
$("#main-content-area").empty();


//creating main Div where everything will append to
var mainDiv = $("<div>");
mainDiv.css("background-color", "#ffe2b5")
mainDiv.css("border-style", "solid")
mainDiv.css("margin", "30px")


var header =  $("<img>");
header.attr("id", "picture"); 
header.attr('src', 'https://findicons.com/files/icons/423/harry_potter/128/home.png')
header.css('margin-left', 'auto');
header.css('margin-right', 'auto');
header.css('display', 'block');
header.css('padding-top' , '10px');

mainDiv.append(header);



// mainDiv.css("background-image", "url(assets/images/acceptance-letter.jpg)");
// mainDiv.css("background-repeat", "no-repeat");
// mainDiv.css("background-size", "auto");


//creating background image (image of acceptance letter)
// var background = $("<img>");
// background.attr("id", "picture");   
// background.attr('src', 'assets/images/acceptance-letter.jpg');


// mainDiv.append(background);

var textDiv = $("<div>");
//text that will overlay on top of image
textDiv.append("<b><center><h3>Headmaster: Albus Dumbledore</h3></center></b>");
textDiv.append("<center><h4>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)</h4></center>");
textDiv.append("</br>");
textDiv.append("</br>");
textDiv.append("<p>Welcome Student,</p>");
textDiv.append("<p>We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find a list of all of your classes on the screen. Here at the Hogsmeade Hangout, you will be able to engage in games, obtain movie information, and participate in the Harry Potter community. Please remember to be kind and use appropriate language in the chat room. Get started by clicking on the Sorting Ceremony to be sorted in your houses!</p>")
textDiv.append("</br>");
textDiv.append("</br>");
textDiv.append("</br>");
textDiv.append("<p>Sincerely,</p>");


//signature
var signature = $("<img>");
signature.attr("id", "picture");   
signature.attr('src', 'assets/images/mcgonagall.png');
signature.css('height' , '60px');

textDiv.append(signature);

textDiv.append("<p>Minerva McGonagall</p>");
textDiv.append("<p>Deputy Headmistress</p>");

textDiv.css("padding" , '30px');
// textDiv.css("padding-right" , '70px');
// textDiv.css("margin-right" , '80px');
// textDiv.css("padding-top" , '200px');


mainDiv.append(textDiv);

$("#main-content-area").append(mainDiv);