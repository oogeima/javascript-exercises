const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((acc, number) => acc + number, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((acc, number) => acc * number, 1);
};

const power = Math.pow;

const factorial = function(n) {
    return multiply(
        Array(n).fill(1).map((item, index) => index + 1)
    );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
