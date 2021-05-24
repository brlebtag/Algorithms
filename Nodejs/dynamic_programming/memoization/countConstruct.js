function countConstruct(target, wordBank) {
    if (target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const result = countConstruct(suffix, wordBank);
            totalCount += result
        }
    }

    return totalCount;
}

function countConstructMemoized(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const result = countConstructMemoized(suffix, wordBank, memo);
            totalCount += result
        }
    }
    
    memo[target] = totalCount;
    return totalCount;
}


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
]));
