const { assert } = require('console');
const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

let testCases = [];
let expectedResults = [];

testCases.push([
    [0, 1, 2, 3],
    [
        [0, 1, 3],
        [1, 2, 3],
        [2, 3, 3],
        [3, 0, 3]
    ]
]);
expectedResults.push([ 
    [0, 3, 6, 9], 
    [9, 0, 3, 6],
    [6, 9, 0, 3],
    [3, 6, 9, 0]
]);

testCases.push([[],[]]);
expectedResults.push([]);

testCases.push([
    [0, 1, 2],
    [
        [0, 1, 5],
        [0, 2, 6]
    ]
]);
expectedResults.push([
    [0, 5, 6],
    [Infinity, 0, Infinity],
    [Infinity, Infinity, 0]
]);

testCases.push([
    [0, 1, 2, 3, 4],
    [
        [0, 1, 2],
        [1, 2, 7],
        [2, 3, 9],
        [3, 4, 5],
        [4, 0, 4]
    ]
]);
expectedResults.push([
    [0, 2, 9, 18, 23],
    [25, 0, 7, 16, 21],
    [18, 20, 0, 9, 14],
    [9, 11, 18, 0, 5],
    [4, 6, 13, 22, 0]
]);

testCases.push([
    [0, 1, 2, 3, 4],
    [
        [0, 2, 6],
        [2, 4, 6],
        [4, 1, 10],
        [1, 3, 3],
        [3, 0, 1]
    ]
]);
expectedResults.push([
    [0, 22, 6, 25, 12],
    [4, 0, 10, 3, 16],
    [20, 16, 0, 19, 6],
    [1, 23, 7, 0, 13],
    [14, 10, 20, 13, 0]
]);

for (let i = 0; i < testCases.length; i++) {
    assert(JSON.stringify(allPairsShortestPaths(testCases[i])) === JSON.stringify(expectedResults[i]));
}

