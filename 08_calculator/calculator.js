const add = function(a ,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => {return a*b;});
};

const power = function(n, e) {
  return n ** e;	
};

const factorial = function(n) {
	let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i
  }
  return fac;
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
