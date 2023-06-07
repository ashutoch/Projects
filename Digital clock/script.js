let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

function updateTime() {
    const currentTime = new Date();
    let hr = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    if (hr < 12) {
        ampm.innerHTML = 'AM'
    }
    else {
        ampm.innerHTML = 'PM'
    }

    if (hr > 12) {
        hr = hr - 12
    }
    if (hr == '0') {
        hr = '12'
    }
    if (hr < 10) {
        hr = '0' + hr
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec
}

setInterval(updateTime, 1000);