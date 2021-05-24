function canSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    const len = table.length;

    for (let i = 0; i <= len; i++) {
        if (table[i]) {
            for(let num of numbers) {
                if (i+num <= len) {
                    table[i + num] = true;
                }
            }
        }
    }

    return table[targetSum];
}

console.log(canSum(7, [2,3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2,4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
