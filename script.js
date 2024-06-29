function getWeather() {
    const apiKey = 'your_api_key'; // Replace with your API key
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the API data for debugging

            const weatherInfo = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.querySelector('.weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.querySelector('.weather-info').innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
        });
}
