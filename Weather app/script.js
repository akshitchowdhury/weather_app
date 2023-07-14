const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0e8ad559amsh8a9f120b2c4be0ap19d874jsn506081e1f34d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url, options)
.then(Response => Response.json())
.then(Response => console.log(Response))
.then(err => console.log(err))