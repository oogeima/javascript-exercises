function pigWord(string) {
    const vowelStartPattern = /^[a|e|i|o|u]/;
    const phonemes = /^qu/;
    if (string.match(vowelStartPattern)) {
        return `${string}ay`;
    } else {
        const prefix = [];
        while (!string.match(vowelStartPattern) && string.length > 0) {
            const phoneme = string.match(phonemes);
            if (phoneme) {
                prefix.push(phoneme[0]);
                string = string.replace(phonemes, '');
            } else {
                prefix.push(string[0]);
                string = string.slice(1);
            }
        }
        return `${string}${prefix.join('')}ay`;
    }
}

function pigLatin(string) {
    return string.split(' ').map(pigWord).join(' ');
};

// Do not edit below this line
module.exports = pigLatin;
