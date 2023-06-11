function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros to the hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    var hourRotation = (hours * 30) + (minutes * 0.5);
    var minuteRotation = (minutes * 6) + (seconds * 0.1);
    var secondRotation = seconds * 6;

    document.querySelector('.hour-hand').style.transform = 'rotate(' + hourRotation + 'deg)';
    document.querySelector('.minute-hand').style.transform = 'rotate(' + minuteRotation + 'deg)';
    document.querySelector('.second-hand').style.transform = 'rotate(' + secondRotation + 'deg)';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
