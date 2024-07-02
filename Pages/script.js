function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weatherInfo = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                        <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                    `;
                    document.getElementById('weatherInfo').innerHTML = weatherInfo;
                } else {
                    document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch(error => {
                document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data</p>`;
                console.error('Error fetching weather data:', error);
            });
    } else {
        alert('Please enter a city name');
    }
}
