const temperature = '13 °C'
const condition = "Clear"
const wind = "6 km/h"

document.getElementById("temperature").textContent = temperature;
document.getElementById("condition").textContent = condition;
document.getElementById("wind").textContent = wind;

function calculateWindChill(temperature, wind) {
  const tempValue = parseFloat(temperature);
  const windValue = parseFloat(wind);

  const windChillValue = 13.12 + (0.6215 * tempValue) - (11.37 * Math.pow(windValue, 0.16)) + (0.3965 * tempValue * Math.pow(windValue, 0.16));

  return windChillValue.toFixed(1);
}

const windChill = calculateWindChill(temperature, wind);

document.getElementById("windChill").textContent = windChill;