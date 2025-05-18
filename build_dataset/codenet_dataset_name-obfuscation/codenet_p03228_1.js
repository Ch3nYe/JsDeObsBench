'use strict';

function Main(input) {
    const tmp = input.split(' ');
    let A = parseInt(tmp[0], 10);
    let B = parseInt(tmp[1], 10);
    const K = tmp[2];

    for (let i = 0; i < K; i++) {
        if (i % 2 == 0) {
            if (A % 2 == 1) {
                A--;
            }
            B += A / 2;
            A /= 2;
        } else {
            if (B % 2 == 1) {
                B--;
            }
            A += B / 2;
            B /= 2;
        }
    }
    console.log(A, B);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));