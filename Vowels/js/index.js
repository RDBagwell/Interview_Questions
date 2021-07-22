function vowels(str) {
    const vowelsCount = str.match(/[aeiou]/gi);
    if(!vowelsCount) return 0;
    return vowelsCount.length
}

function vowels2(str) {
    let count = 0;
    const vowelSting = ['a','e','i','o','u'];
    for (const char of str.toLowerCase()) {
        if(vowelSting.includes(char)){
            count++;
        }
    }
    return count
}