// API Url
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&APPID=';
const uri = 'http://jsonplaceholder.typicode.com/users';

// Headers
let h = new Headers();
// We only want to Accept a JSON type file
// We can use: Content-Type, Content-Length, Accept, Accept-Language, X-Requested-With, User-Agent
h.append('Accept', 'application/json');

// new Request() with options (object) as second parameter 
// options: method, headers, body, mode
// options - methods: GET, POST, PUT, DELETE, OPTIONS
let req = new Request(uri, {
	method: 'GET',
	headers: h,
	mode: 'cors'
});

fetch(req)
	.then( (response)=>{
		// If status OK response code is 200, return json
		if (response.ok) {
			return response.json();
		} else {
			// Throwing an error in .then will automaticly be thrown down to catch method
			throw new Error('Bad Response');
		}
	})
	.then( (jsonData)=>{
		console.log(jsonData);
	})
	.catch( (err)=>{
		console.log('ERROR:', err.message);
	});