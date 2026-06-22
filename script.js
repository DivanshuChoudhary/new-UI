
function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (!city) return;

    // UI update (dummy data)
    document.querySelector("h2").innerText = city;

    document.querySelectorAll("h1")[1].innerText = "30°C";

    document.querySelector(".weather-card p").innerText = "Sunny ☀️";
}