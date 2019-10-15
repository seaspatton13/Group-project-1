$(document).ready(function (response) {
  var City= document.getElementById("first_name2").value;
  var APIKey = "239baeb3d7504a29b783230cf19800cb";
  var queryURL = "https://api.weatherbit.io/v2.0/current?city=" + City + "&key=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  $('submit').click(function(){


  });
.then(function(response) {
  console.log(queryURL);
  console.log(response);
})
  //  EXAMPLE URL CAll https://api.weatherbit.io/v2.0/current?city=Atlanta&key=239baeb3d7504a29b783230cf19800cb
  var response = {};
//     .then (function(response){
//  Get Location 
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
      var curent = data.weather.code;
      var temp = Math.round(data.main.temp_max);
      var desc = data.weather.description;
      var icon = data.weather.icon;

      $('#current').html(code);
      $('#temp').html(temp)
      $('#desc').html(desc);
      $('#icon').attr('src', icon);
  }
});


///////////////////////////////////////


var weatherCondition = [

];

for var i = 0; i < currentWeather.length; i++ {

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
 *Spotify Access Token = BQBFwjVuDwyaUD9RkwWeisRxaH0UDY9Fzsyf_p6IIpldNIdFcqOfv-4ZjCQ61Kt8RJV74VuB4Vt3cVb6AzhdrqZVcaWOOJeBF9D3h3TMfhf_71atF2AmXB0xrcO7AygmSscUjNWYd-v5Q8zTixyMA5FQ8gXQjyVpp4hxDAToS26Nm0dRqcTJvXPD4w
 *SDK playlist will appear at the same time.
3-create variable that hold the current weather
4-Loop through that variable to get the current weather 
5- if condition that determine the current weather 
6-Display music according to the weather
*/
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