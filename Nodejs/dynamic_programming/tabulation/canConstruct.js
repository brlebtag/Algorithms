function canConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(false)
    table[0] = true;
    
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (i + word.length <= target.length &&
                    target.slice(i, i + word.length) === word) {
                    table[i+word.length] = true;
                }
            }
        }
    }
    
    return table[target.length];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
]));

