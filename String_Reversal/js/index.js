function reverseString(string) {
    return string.split('').reverse().join('');
}

function reverseString2(string) {
    let reversed = '';
    for (const char of string) {
        reversed = char + reversed;
    }
    return reversed
}

function reverseString3(string) {
    string.split('').reduce((reversed, char)=> char + reversed, '');
}