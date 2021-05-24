function automaticMachine(cashback, notes, memo = {}) {
    if (cashback in memo) return memo[cashback];
    if (cashback === 0) return [];
    if (cashback < 0) return null;

    let min = Number.MAX_VALUE;
    let minResult = null;

    for (let note of notes) {
        const remainder = cashback - note;
        let ret = automaticMachine(remainder, notes, memo);
        
        if (ret !== null) {
            ret = [...ret, note];
            if (ret.length < min) {
                min = ret.length;
                minResult = ret;
            }
        }
    }
    
    memo[cashback] = minResult;
    return minResult;
}


console.log(automaticMachine(1 - 0.37, [0.25, 0.1, 0.05, 0.01]).sort((a,b) => b-a));
