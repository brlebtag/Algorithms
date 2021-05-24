function allConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];
    
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (i+word.length <= target.length && target.slice(i, i + word.length) === word) {
                const combinations = table[i].map(subArr => [...subArr, word]);
                table[i+word.length].push(...combinations);
            }
        }
    }
    
    return table[target.length];
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//    'e',
//    'ee',
//    'eee',
//    'eeee',
//    'eeeee',
//    'eeeeee',
// ]));

