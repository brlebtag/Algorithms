function canSum(targetSum, numbers) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    
    for (let number of numbers) {
        if(canSum(targetSum - number, numbers)) {
            return true;
        }
    }

    return false;
}

function canSumMemoized(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let number of numbers) {
        if (canSumMemoized(targetSum - number, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSumMemoized(7, [2, 3]));
console.log(canSumMemoized(7, [5, 3, 4, 7]));
console.log(canSumMemoized(7, [2, 4]));
console.log(canSumMemoized(8, [2, 3, 5]));
console.log(canSumMemoized(300, [7, 14]));
