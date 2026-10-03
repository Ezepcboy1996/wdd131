// Footer: current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values (match your HTML weather section)
const temperature = 28; // °C
const windSpeed = 12;   // km/h

// Wind Chill Calculation (Celsius formula)
// One-line return as required
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Apply conditions before calling the function
let chillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  chillValue = calculateWindChill(temperature, windSpeed) + "°C";
}

// Display result in the page
document.getElementById("chill").textContent = chillValue;
