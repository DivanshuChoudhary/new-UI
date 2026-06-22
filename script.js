function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (!city) return;

    document.getElementById("city").innerText = city;

    // fake weather condition (later API se aayega)
    let condition = "Sunny";

    document.getElementById("temp").innerText = "30°C";
    document.getElementById("desc").innerText = condition;

    let icon = document.getElementById("weatherIcon");

    // 🌦 ICON LOGIC
    if (condition === "Sunny") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
    else if (condition === "Rain") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    }
    else if (condition === "Clouds") {
        icon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }
    else {
        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    }

}
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

let btn = document.getElementById("themeToggle");

btn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.innerText = "☀ Light Mode";
    }
    else{
        btn.innerText = "🌙 Dark Mode";
    }

}

