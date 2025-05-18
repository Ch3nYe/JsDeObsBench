'use strict'

function Main(input) {
    const tape = input.split('\n')[0].split('');
    const result = []

    for (const v of tape) {
        if (v === 'B') {
            result.pop();
        } else {
            result.push(v);
        }
    }

    console.log(result.join(''));
}

// input
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));