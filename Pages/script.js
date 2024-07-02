function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '2de9e8ebd605944d35dc6c9793354dce'; 
// Replace with your actual API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Optional: Log the JSON response to see all the details

            // Construct the HTML to display all weather information
            let weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
                <p><strong>Min Temperature:</strong> ${data.main.temp_min} °C</p>
                <p><strong>Max Temperature:</strong> ${data.main.temp_max} °C</p>
                <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
                <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                <p><strong>Visibility:</strong> ${data.visibility / 1000} km</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                <p><strong>Wind Direction:</strong> ${data.wind.deg}°</p>
                <p><strong>Cloudiness:</strong> ${data.clouds.all} %</p>
                <p><strong>Sunrise:</strong> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p><strong>Sunset:</strong> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                <p><strong>Weather Description:</strong> ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            `;
            
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data</p>`;
        });
}
