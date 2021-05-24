function allConstruct(target, wordBack) {
    if (target === '') return [[]];

    const result = [];
    
    for (let word of wordBack) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const ways = allConstruct(suffix, wordBack);
            const targetWays = ways.map(w => [word, ...w]);
            result.push(...targetWays);
        }
    }

    return result;
}

function allConstructMemoized(target, wordBack, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBack) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const ways = allConstructMemoized(suffix, wordBack, memo);
            const targetWays = ways.map(w => [word, ...w]);
            result.push(...targetWays);
        }
    }
    
    memo[target] = result;
    return result;
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstructMemoized('aaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']));
