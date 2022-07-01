const isCharUpper = function(c) {
    return c === c.toUpperCase();
}

const handleCamels = function(token) {
    if (isCharUpper(token[0])) {
        return token.toLowerCase();
    } else {
        return Array.from(token).map(c => (isCharUpper(c) ? '_' : '') + c.toLowerCase()).join('');
    }
}

const snakeCase = function(input) {
    return (
        input
        .split(/[^a-zA-Z]/)
        .filter(token => token.length !== 0)
        .map(handleCamels)
        .join('_')
    );
};

// Do not edit below this line
module.exports = snakeCase;
