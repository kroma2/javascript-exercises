const convertToCelsius = function(celcTemp) {
   celcTemp = (celcTemp - 32) * 5/9
   return parseFloat(celcTemp.toFixed(1))
};

const convertToFahrenheit = function(fahrTemp) {
  fahrTemp = fahrTemp * 9/5 + 32
  return parseFloat(fahrTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
