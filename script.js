
var city = [];

var APIKey = "965f5c48346a9c64b82b0d0fc5597889";

// // Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=965f5c48346a9c64b82b0d0fc5597889";


// We then created an Fetch call
var getLat = function(cityInput){
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=metric&appid=965f5c48346a9c64b82b0d0fc5597889";
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // var lat = data[0].lat;
    // var lon = data[0].lon;
    // console.log(lat.lon)
    var lat = data.coord.lat;
    var lon = data.coord.lon;
  $("#today").html(`<ul class="list-group list-group-flush">
  <li class="list-group-item">${cityInput}</li>
  <li class="list-group-item">temperature: ${data.main.temp}</li>
  <li class="list-group-item">${data.wind.speed}</li>
</ul>`)

    var daysWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=965f5c48346a9c64b82b0d0fc5597889"
    fetch(daysWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var fiveDays = "";
           
      for(index = 0; index < data.list.length; index+=8) {
      fiveDays += `<ul class="list-group list-group-flush">
  <li class="list-group-item">${data.list[index].main.temp}</li>
  <li class="list-group-item">${data.list[index].wind.speed}</li>
  <li class="list-group-item">${data.list[index].main.humidity}</li>
</ul>`
      }
      $("#forecast").html(fiveDays)
      console.log(data);
      
    });
  });
}

  $("#search-button").on("click", function(event) {
    event.preventDefault();
  var cityInput = $("#search-input").val().trim()
  console.log(cityInput)
  getLat(cityInput);
  });

  // var cityName = $("<div>").text(data.city.name)

//  $(".text-center").text();
//  $("#"search-input).on("click", function(){

//  });

  // console.log(lat,lon)



//
// });