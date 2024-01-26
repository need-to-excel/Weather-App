var APIKey = "965f5c48346a9c64b82b0d0fc5597889";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=965f5c48346a9c64b82b0d0fc5597889";


// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  var lat = data[0].lat;
  var lon = data[0].lon;

  console.log(lat.lon)
    // console.log(data);
    // var temp = (data.main.temp - 273.15).toFixed(2);
    // console.log(temp);

    // $(".temp").text("Temp: " + temp);
    // $(".wind").text("Degree: " + data.wind.deg),
    // $(".humidity").text("Humidity: " + data.main.humidity);
    // $(".city").text("City: " + data.name);