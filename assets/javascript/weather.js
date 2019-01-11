// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

getWeather();
function getWeather(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID="+"c6cad450ea81f44b2d9d494580d84806";
    $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            console.log(response.name);
            console.log(response.main.temp);
            console.log(response.wind.speed);
            $("#today-weather").text("Hogwarts - Current temp: "+response.main.temp+ "˚F Wind speeds: "+response.wind.speed+"MPH");
    });
}