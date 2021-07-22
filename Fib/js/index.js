// Recusive Fib Brute Force. O[2^n]
function slowFib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n -2);
}

// Memoization O[n]
function fibMemoization(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    const res = fibMemoization(n-1, memo) + fibMemoization(n-2, memo);
    memo[n] = res;
    return res;
}

// Tab O[n]
function fibTab(n) {
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i -1] + fibNums[i -2];
    }
    return fibNums[n];
}


function memoization(fn) {
    const cache = {};
    return function (...args) {
        if(cache[args]){
            return cache[args];
        }
        
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

const fib = memoization(slowFib);

console.log(fib(100));
