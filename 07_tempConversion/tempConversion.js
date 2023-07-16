const convertToCelsius = function(num) {

    let newNum = ((num - 32) * 5) / 9 
    return ans = Math.round(newNum * 10) / 10;
  };
  
  console.log(convertToCelsius(100))

const convertToFahrenheit = function(num) {
  let newNum = (num * (9/5) + 32)
    return ans = Math.round(newNum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
