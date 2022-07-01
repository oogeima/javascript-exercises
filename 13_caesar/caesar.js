const lowerRange = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
const upperRange = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

const inRange = function([min, max], value) {
    return value >= min && value <= max;
};

const charShift = function(char, shift) {
    const charCode = char.charCodeAt(0);
    if (inRange(lowerRange, charCode)) {
        return String.fromCharCode((charCode + shift - lowerRange[0] + 26) % 26 + lowerRange[0]);
    } else if (inRange(upperRange, charCode)) {
        return String.fromCharCode((charCode + shift - upperRange[0] + 26) % 26 + upperRange[0]);
    } else {
        return char;
    }
};

const caesar = function(string, shift) {
    return Array.from(string).map(char => charShift(char, shift)).join('');
};

// Do not edit below this line
module.exports = caesar;
