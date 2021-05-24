function fibRecursive(n) {
    if (n <= 2) return 1;
    return fibRecursive(n-1) + fibRecursive(n-2);
}


function fibWithMemoization(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibWithMemoization(n-1, memo) + fibWithMemoization(n-2, memo);
    return memo[n];
}

function fibSimpler(n) {
    if (n <= 2) return 1;
    
    let i = 2;
    let last = 1, penult = 1, cur;

    while(i < n) {
        cur = last + penult;
        penult = last;
        last = cur;
        i++;
    }
    
    return cur;
}


console.log(fibSimpler(6));
console.log(fibSimpler(7));
console.log(fibSimpler(8));
console.log(fibSimpler(50));
