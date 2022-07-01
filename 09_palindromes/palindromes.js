const palindromes = function (string) {
    const normalized = string.toLowerCase().replaceAll(/[^a-z]/g, '');
    return normalized === Array.from(normalized).reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
