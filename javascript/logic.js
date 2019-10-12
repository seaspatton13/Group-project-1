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
<<<<<<< HEAD


*/////////////////////////////////////////


var weatherCondition = [

];

for var i = 0; i < currentWeather.lenght; i++ {

}
if (weatherCondition < 0 && ) {
 ................ ;
} else if (weatherCondition < 30) {
  ...............;
} else if {weatherCondition < 60
  ...............;
} else if {weatherCondition < 100
  .................;
} else {
  ................;
}

var APIKey = "032d25d4514ca8a1b170b39afbfd4f50";

    
    var queryURL = "https://openweathermap.org/find?q=Atlanta"+ APIKey;

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })

//-----------------------------------------------//
// Between Function //
between = function(a,b){
    var min = Math.min.apply(Math, [a,b]),
    max = Math.max.apply(Math, [a,b]);
    return this > min && this < max;
  };
  between = function(n,min,max) {
    return n > min && n < max;
  };












/*
1-create a web app that plays music according to the weather
2-API calls from music app and and weather app
   *Call weather API First (Time, temperature, rain, sun, snow...)
   *Call Music API then (cool Jazz, rock, funck, slow, R&B...)
3-create variable that hold the current weather
4-Loop through that variable to get the current weather 
5- if condition that determine the current weather 
6-Display music according to the weather
*/
=======
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
>>>>>>> edb3ef5cb8ffc4d3c19b16c754ed108fffcfa35c
