const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a0e8ad559amsh8a9f120b2c4be0ap19d874jsn506081e1f34d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((Response) => Response.json())
  .then((Response) => {
    console.log(Response);

    cloud_pct.innerHtml = response.cloud_pct;
    feels_like.innerHtml = response.feels_like;
    humidity.innerHtml = response.humidity;
    max_temp.innerHtml = response.max_temp;
    min_temp.innerHtml = response.min_temp;
    sunrise.innerHtml = response.sunrise;
    sunset.innerHtml = response.sunset;
    temp.innerHtml = response.temp;
    wind_degrees.innerHtml = response.wind_degrees;
    wind_speed.innerHtml = response.wind_speed;
  })
  .then((err) => console.log(err));
