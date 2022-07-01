const ftoc = function(fahrenheit) {
    const floatC = 5 * (fahrenheit - 32) / 9;
    return Number(floatC.toFixed(1));
};

const ctof = function(celsius) {
    const floatF = 9 / 5 * celsius + 32;
    return Number(floatF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
