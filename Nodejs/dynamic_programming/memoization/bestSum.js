function bestSum(targetSum, numbers) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let minLen = Number.MAX_VALUE;
    let minResult = null;
    
    for (let num of numbers) {
        const remainder = targetSum - num;
        let result = bestSum(remainder, numbers);
        if (result !== null) {
            result = [...result, num];
            if (result.length < minLen) {
                minLen = result.length;
                minResult = result;
            }
        }
    }

    return minResult;
}

function bestSumMemoized(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let minLen = Number.MAX_VALUE;
    let minResult = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        let result = bestSumMemoized(remainder, numbers, memo);
        if (result !== null) {
            result = [...result, num];
            if (result.length < minLen) {
                minLen = result.length;
                minResult = result;
            }
        }
    }
    
    memo[targetSum] = minResult;
    return memo[targetSum];
}

console.log(bestSumMemoized(7, [2, 3]));
console.log(bestSumMemoized(7, [5, 3, 4, 7]));
console.log(bestSumMemoized(7, [2, 4]));
console.log(bestSumMemoized(8, [2, 3, 5]));
console.log(bestSumMemoized(8, [1,4,5]));
console.log(bestSumMemoized(300, [7, 14]));
