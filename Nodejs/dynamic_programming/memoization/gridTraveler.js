// https://www.youtube.com/watch?v=oBt53YbR9Kk

function gridTraveler(m, n) {
    if (m <= 0 || n <= 0) return 0;
    if (n === 1 && n === 1) return 1;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

function gridTravelerMemoized(m, n, memo = {}) {
    let key = `${m},${n}`;
    let invKey = `${n},${m}`;
 
    if (key in memo) return memo[key];
    if (invKey in memo) return memo[invKey];
    if (m <= 0 || n <= 0) return 0;
    if (n === 1 && n === 1) return 1;

    return memo[key] = memo[invKey] =
        gridTravelerMemoized(m-1, n, memo) +
        gridTravelerMemoized(m, n-1, memo);
}

console.log(gridTravelerMemoized(1,1));
console.log(gridTravelerMemoized(2,3));
console.log(gridTravelerMemoized(3, 2));
console.log(gridTravelerMemoized(3,3));
console.log(gridTravelerMemoized(18, 18));
