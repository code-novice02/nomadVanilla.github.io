import config from "./apikeys.js";
const API_KEY = config.GEO_API_KEY;


function onGeoOK(position) {
    // 이순신 동상 기준
    /*
    latitiude = 37.570969
    longtitude = 126.976947;
    */
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const sky = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.name}, ${data.main.temp}\u00B0C`;
        sky.innerText = `/ ${data.weather[0].main}`;
    });
}
function onGeoError() {
    alert("Can't get your location. We can't provide you a weather");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);