function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const index = i + num;
                if (index <= targetSum) {
                    const candidate = [...table[i], num];

                    if (!table[index] || table[index].length > candidate.length) {
                        table[index] = candidate;
                    }
                }
            }
        }
    }

    return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
