const repeatString = function(string, times) {
    if (times < 0) {
        return 'ERROR';
    }
    return Array(times).fill(string).join('');
};

// Do not edit below this line
module.exports = repeatString;
