
function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (!city) return;

    // UI update (dummy data)
    document.querySelector("h2").innerText = city;

    document.querySelectorAll("h1")[1].innerText = "30°C";

    document.querySelector(".weather-card p").innerText = "Sunny ☀️";
}

function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    // update UI
    document.getElementById("city").innerText = city;

    // dummy weather data
    let temp = Math.floor(Math.random() * 15) + 20; // 20-35°C
    let humidity = Math.floor(Math.random() * 40) + 40;
    let wind = Math.floor(Math.random() * 20) + 5;

    document.getElementById("temp").innerText = temp + "°C";
    document.getElementById("desc").innerText = "Sunny ☀️";

    // optional extra (agar HTML me add kiya ho)
    if (document.getElementById("humidity")) {
        document.getElementById("humidity").innerText = humidity;
    }

    if (document.getElementById("wind")) {
        document.getElementById("wind").innerText = wind;
    }
}