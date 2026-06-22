function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (!city) return;

    document.getElementById("city").innerText = city;

    // dummy data (API later)
    document.getElementById("temp").innerText = "28°C";

    document.getElementById("desc").innerText = "Sunny ☀️";

}