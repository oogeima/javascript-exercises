const fibonacci = function(n) {
    n = parseInt(n);
    if (n <= 0) {
        return 'OOPS';
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let current = prev = 1;
    let i = 2;
    while (i < n) {
        i++;
        [current, prev] = [current + prev, current];
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
