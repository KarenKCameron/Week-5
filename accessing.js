// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const header = document.getElementById('weather-head');

header.innerText = "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"

const sunEl = document.getElementsByClassName("sun")

for (i = 0; i < sunEl.length; i++) {
    sunEl[i].style.color = 'orange';
  }

// Change the class of the second <li> from to "sun" to "cloudy"

const parentElement = document.getElementsByTagName('li')[2];

parentElement.className = 'cloudy';