'use strict';

function Main(input) {
    const S = input.split('\n')[0];
    if (S.length <= 2) {
        console.log(S);
    } else {
        console.log(S.split("").reverse().join(""));
    }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));