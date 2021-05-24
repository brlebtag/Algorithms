function canConstruct(target, wordBank) {
    if (target === '') return true;

    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            
            if (canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;
}

function canConstructMemoized(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            if (canConstructMemoized(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    
    memo[target] = false;
    return false;
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
]));
