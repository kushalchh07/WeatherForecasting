<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast</title>
    <link rel="stylesheet" href="style1.css">
    <style>
        .hourly-forecast {
            margin-top: 20px;
        }
        .forecast-item {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Weather Forecast</h1>
        <div class="search-box">
            <input type="text" id="cityInput" placeholder="Enter city name">
            <button onclick="getWeather()">Get Weather</button>
        </div>
        <div id="weatherInfo" class="weather-info">
            <!-- Weather information will be displayed here -->
        </div>
        <div id="hourlyForecast" class="hourly-forecast">
            <!-- Hourly forecast information will be displayed here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
