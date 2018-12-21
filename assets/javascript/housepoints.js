
//Create global variable to tell what the current page should be

//set the current page if the table is clicked for chat room
$("#house-points-nav").on("click", function(event) {
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
    $("#main-content-area").append(chartDiv);
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
                    '#FF2400',
                    '#FFFF00',
                    '#0000FF',
                    '#00FF00',
                ],
                borderColor: [
                    '#FFD700',
                    '#FFFFF',
                    '#CD7F32',
                    '#C0C0C0',
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
                        fontSize: 18
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 18
                    }
                }]
            },
            legend: { display: false },
        }
    });
}