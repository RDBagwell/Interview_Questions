function isPalindrome(str) {
   return str === str.split('').reverse().join('');
}

function isPalindrome2(str) {
    return str.split('').every((char, i) => char === str[str.length - i - 1]);
 }

console.log(isPalindrome2('bob'));