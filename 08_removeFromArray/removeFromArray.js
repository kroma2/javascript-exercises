const removeFromArray = function(array, ...remVal) {
    array = array.filter(x => !remVal.includes(x));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
