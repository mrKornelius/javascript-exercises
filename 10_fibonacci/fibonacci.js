const fibonacci = function(n) {
    if (n < 1) return 'OOPS';
    let prev_2 = 1;
    let prev_1 = 1;
    let fib = 1;
    for (let i = 2; i < n; i++) {
        fib = prev_1 + prev_2;
        prev_2 = prev_1;
        prev_1 = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
