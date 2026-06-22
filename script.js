function getWeather() {

    let city = document.getElementById("cityInput").value;

    if(city === "") return;

    document.getElementById("cityName").innerText = city;

    // dummy data (API baad me lagayenge)
    document.getElementById("temp").innerText = "28°C";

    document.getElementById("desc").innerText = "Sunny ☀️";

}