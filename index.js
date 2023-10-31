const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: '1431554fb0a235c4115ab93402ca131b'
}

const input = document.querySelector('#input');

input.addEventListener('keydown', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
    anim();
}

function displayResult(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperatute = document.querySelector('#temperature');
    temperatute.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = 'Feels like: ' + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].description}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = 'Min: ' + `${Math.round(result.main.temp_min)}<span>°</span>` + ' Max: ' + `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + ' ' + `${todayDate}` + ' ' + `${month}` + ' ' + `${year}`;
}

function anim() {
    gsap.from('#whenWhere', { opacity: 0, duration: 1.5, });
    gsap.from('#now', {opacity: 0, duration: 1.5})
}

gsap.from('h1', { y: -50, opacity: 0, duration: 1.5, delay: 1 })
gsap.from('input', {opacity: 0, duration: 1.5, delay: 1})