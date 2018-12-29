
//Create global variable to tell what the current page should be

//set the current page if the table is clicked for chat room
$("#house-points-nav").on("click", function(event) {
   $('#emblem').width(96);
    event.preventDefault();
    housePoints();
});

function housePoints(){
    var chartDiv = $("<div>");
    chartDiv.attr("id", "chart-div");
    var housePoints = $("<canvas>");
    housePoints.attr("id", "myChart");
    chartDiv.append(housePoints);
    $("#main-content-area").empty();
    $("#main-content-area").hide();
    $("#main-content-area").append(chartDiv);
    $("#main-content-area").fadeIn(fadeDuration);
    //run when database is updated
    database.ref().on("value", function(snapshot) {
        globalSnapshot = snapshot.val();
        console.log(globalSnapshot);
        makeHouseChart();
    });
}

function makeHouseChart(){
    Chart.defaults.global.defaultFontFamily = "HogwartsWizard";
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
            datasets: [{
                label: '# of points',
                data: [parseInt(globalSnapshot.houses.gryffindor.housePoints), parseInt(globalSnapshot.houses.hufflepuff.housePoints), parseInt(globalSnapshot.houses.ravenclaw.housePoints), parseInt(globalSnapshot.houses.slytherin.housePoints)],
                backgroundColor: [
                    '#ae0001',
                    '#f0c75e',
                    '#222f5b',
                    '#2a623d',
                ],
                borderColor: [
                    '#d3a625',
                    '#372e29',
                    '#946b2d',
                    '#aaaaaa',
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        fontSize: 18,
                        fontColor: "black",
                        fontStyle: "bold"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 18,
                        fontColor: "black",
                        fontStyle: "bold"
                    }
                }]
            },
            legend: { display: false },
        }
    });
}