$("#flappy-potter-nav").on("click", function(event) {
    loadFlappyGame();
});

function loadFlappyGame(){
    console.log("hello chumps!");
    event.preventDefault();
    $("#main-content-area").empty();
    var flappyDiv = $("<div>");

    var divContainer = $("<div>");
    divContainer.attr("id", "container-flappy");
    var divBird = $("<div>");
    divBird.attr("id", "bird");
    var divPole1 = $("<div>");
    divPole1.attr("id", "pole_1");
    divPole1.addClass("pole");
    var divPole2 = $("<div>");
    divPole2.attr("id", "pole_2");
    divPole2.addClass("pole");
    divContainer.append(divBird);
    divContainer.append(divPole1);
    divContainer.append(divPole2);

    var divScore = $("<div>");
    divScore.attr("id", "score_div");
    divScore.append('<p><b>Score: </b><span id="score">0</span></p>');
    divScore.append('<p><b>Speed: </b><span id="speed">10</span></p>');

    flappyDiv.append(divContainer);
    flappyDiv.append(divScore);
    flappyDiv.append('<button id="restart_btn">Restart</button>');

    $("#main-content-area").append(flappyDiv);

    startFlappyGame();
};

function startFlappyGame(){
    console.log("Start game");
    //saving dom objects to variables
    var container = $('#container-flappy');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');
   

    //saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;

    //some other declarations
    var go_up = false;
    var score_updated = false;
    var game_over = false;

    //  Collision if / else
    var the_game = setInterval(function () {


        if (collision(bird, pole_1) || collision(bird, pole_2) || parseInt(bird.css('top')) <= 0 || parseInt(bird.css('top')) > container_height - bird_height) {


            stop_the_game();


        } else {


            var pole_current_position = parseInt(pole.css('right'));

    // Scoring

            if (pole_current_position > container_width - bird_left) {
                if (score_updated === false) {
                    score.text(parseInt(score.text()) + 1);
                    score_updated = true;
                }
            }


            if (pole_current_position > container_width) {
                var new_height = parseInt(Math.random() * 100);

    //change pole height
                pole_1.css('height', pole_initial_height + new_height);
                pole_2.css('height', pole_initial_height - new_height);


    //increase speed
                speed = speed + 1;
                speed_span.text(speed);
                score_updated = false;

                pole_current_position = pole_initial_position;
            }

    //move poles

            pole.css('right', pole_current_position + speed);

            if (go_up === false) {
                go_down();
            }
        }
    }, 40);
    
    // Space bar functions
    
    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 32 && go_up === false && game_over === false) {
            go_up = setInterval(up, 50);
        }
    });

    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 32) {
            clearInterval(go_up);
            go_up = false;
        }
    });



    //Bird up and down
    function go_down() {
        bird.css('top', parseInt(bird.css('top')) + 5);
    }

    function up() {
        bird.css('top', parseInt(bird.css('top')) - 22);
    }

    function stop_the_game() {
        clearInterval(the_game);
        game_over = true;
        restart_btn.slideDown();

    }

    // Restart

    restart_btn.click(function () {
        loadFlappyGame();
    });

    // Collision

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;

        return true;


    }
};
