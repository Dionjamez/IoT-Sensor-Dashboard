// Elements
const humidityEl = document.getElementById("humidity");
const temperatureEl = document.getElementById("temperature");
const ledToggle = document.getElementById("ledToggle");

// Fake sensor update every 3 seconds
setInterval(() => {
  let humidity = Math.floor(Math.random() * 30) + 40; // 40-70 %
  let temperature = Math.floor(Math.random() * 10) + 20; // 20-30 °C
  humidityEl.textContent = humidity + " %";
  temperatureEl.textContent = temperature + " °C";
}, 3000);

// LED control event
ledToggle.addEventListener("change", () => {
  if (ledToggle.checked) {
    alert("LED Turned ON");
  } else {
    alert("LED Turned OFF");
  }
});
