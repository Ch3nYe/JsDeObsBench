"use strict";

const helper = function (a, b, c) {
    const max = Math.max(a, b, c)
    for (let i = max; i >= 1; i--) {
        if (a % i == 0 && b % i == 0 && c % i == 0) return i
    }
    return 1
}

const main = arg => {
    const input = arg.trim().split("\n");
    const K = parseInt(input[0]);
    let res = 0
    for (let a = 1; a <= K; a++) {
        for (let b = 1; b <= K; b++) {
            for (let c = 1; c <= K; c++) {
                res = res + helper(a, b, c)
            }
        }
    }
    console.log(res)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  