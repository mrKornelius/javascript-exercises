const palindromes = function (str) {
    str = str.toLowerCase();
    
    // remove punctation and spaces
    ['.', ',', ' ', '!'].forEach(c => {
        str = str.replaceAll(c, '');
    });

    return (str.split('').reverse().join('') == str)
};

// Do not edit below this line
module.exports = palindromes;
