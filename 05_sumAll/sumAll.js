const sumAll = function(start, end) {
    if (parseInt(start) !== start || parseInt(end) !== end) {
        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    let total = 0;
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
