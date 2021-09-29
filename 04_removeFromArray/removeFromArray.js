const removeFromArray = function(arr, ...args) {
    let result = [];
    
    arr.forEach(elm => {
        if ( ! args.includes(elm))
            result.push(elm);
    });
    return result;
};


// Do not edit below this line
module.exports = removeFromArray;
