'use strict'
function Main(input) {
    input = input.split("\n");
    const arr = input[0].split(' ')
    if (arr[0] % 3 === 0 || arr[1] % 3 === 0 || (arr[0] + arr[1]) % 3 === 0) {
        console.log('Possible')
    } else {
        console.log('Impossible')
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));