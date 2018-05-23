// Api Key
var apiKey = "";

// City Query
var qCity = "copenhagen";

// The URL
var apiData = 'http://api.openweathermap.org/data/2.5/weather?q='+qCity+'&units=metric&'+apiKey;


var request = new XMLHttpRequest();
request.open('GET', apiData);

request.onload = function() {
	// Convert Request to JSON
	var weatherData = JSON.parse(request.responseText);
	
	// The data we need in an Data-Object
	var data = {
		city: 			weatherData.name,
		country: 		weatherData.sys.country,
		curTemp:		weatherData.main.temp,
		minTemp: 		weatherData.main.temp_min,
		maxTemp: 		weatherData.main.temp_max,
		mainWeather: 	weatherData.weather[0].main,
		//sunrise: 		weatherData.sys.sunrise, 
		//sunset: 		weatherData.sys.sunset,
	}

	// Function to print out to HTML
	function dataToHTML(variable, value){
		document.getElementById(variable).innerHTML = value;
	}

	// Loop Through the data and print values to HTML using varToHTML function
	for(var key in data){
		dataToHTML(key, data[key]);
	};

	// UNIX UTC to String Converter (sunrise, sunset)
	function unixTimestamp(t)
	{
		var dt = new Date(t*1000);
		var hr = dt.getHours();
		var m = "0" + dt.getMinutes();
		var s = "0" + dt.getSeconds();
		return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
	}

	// Sunrise sunset data
	var sunrise		= weatherData.sys.sunrise;
	var sunset		= weatherData.sys.sunset;

	document.getElementById("sunrise").innerHTML 	= unixTimestamp(sunrise);
	document.getElementById("sunset").innerHTML 		= unixTimestamp(sunset);


} // request.onload

request.send();
