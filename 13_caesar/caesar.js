const caesar = function(str, shift) {
    // If the shift is greater than 26, we will get the same result if we mod the
    // shift by 26.
    shift %= 26;
    return str.split('').map((c) => {
        // codePointAt() gives the unicode number
        let code = c.codePointAt();

        // We want to shift A-Z (65-90) and a-z (97-122), and wrap around in each
        // interval, so the case of a letter is the same after the shift.
        // Other characters we just pass through.
        if (65 <= code && code <= 90) {
            return String.fromCodePoint((wrapNumber(code + shift, 65, 90)));
        }
        else if (97 <= code && code <= 122) {
            return String.fromCodePoint(wrapNumber(code + shift, 97, 122));
        }
        return c;
    }).join('');
};

// A function to wrap an integer inside a given interval.
const wrapNumber = function(n, low, high) {
    if (n < low) {
        return high - (low - n - 1);
    } else if (n > high) {
        return low + (n - high - 1);
    }
    return n
};

// Do not edit below this line
module.exports = caesar;
