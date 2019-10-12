$(document).ready(function (response) {
    var APIKey = "032d25d4514ca8a1b170b39afbfd4f50";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=curent city=.............=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    var response = {};
    // .then (function(response){
 // Get Location 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = ``;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var curent = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#current').html(current);
        $('#temp').html(temp)
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});
 // Transfer content to HTML
 $(".city").html("<h1>" + response.name + " Weather Details</h1>");
 $(".wind").text("Wind Speed: " + response.wind.speed);
 $(".humidity").text("Humidity: " + response.main.humidity);
 $(".temp").text("Temperature (F) " + response.main.temp);
// if (weatherCondition < 0 && ) {
//  ................ ;
// } else if (weatherCondition < 30) {
//   ...............;
// } else if {weatherCondition < 60
//   ...............;
// } else if {weatherCondition < 100
//   .................;
// } else {
//   ................;
// }
// 1-create a web app that plays music according to the weather
// 2-API calls from music app and and weather app
//    *Call weather API First (Time, temperature, rain, sun, snow...)
//    *Call Music API then (cool Jazz, rock, funck, slow, R&B...)
// 3-create variable that hold the current weather
// 4-Loop through that variable to get the current weather 
// 5- if condition that determine the current weather 
// Display music according to the weather