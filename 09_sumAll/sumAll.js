const sumAll = function(arg1, arg2) {
    if(!Number.isInteger(arg1) || !Number.isInteger(arg2)) return "ERROR";
    if(arg1 < 0 || arg2 < 0) return "ERROR"

    if (arg1 > arg2) [arg1, arg2] = [arg2, arg1]
    let sum = arg1;

    for (let i = arg1; i < arg2; i++) {
        arg1 += 1
        sum += arg1
    }
    return sum    
};

// Do not edit below this line
module.exports = sumAll;
