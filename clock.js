const clockTime = document.querySelector('#clockText span');

function clock() {
    // current time
    const krTime = new Date();
    // hour, minute, second
    const clockHours = krTime.getHours();
    const clockMinutes = krTime.getMinutes();
    const clockSeconds = krTime.getSeconds();

    clockTime.innerText = `${clockHours.toString().padStart(2, '0')}:${clockMinutes.toString().padStart(2, '0')}:${clockSeconds.toString().padStart(2, '0')}`;
}

clock();
setInterval(clock, 1000);