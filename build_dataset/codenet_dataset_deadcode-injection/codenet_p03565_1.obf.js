'use strict';
const a0_0x337383 = a0_0x577d;
function main(input) {
    const _0x219d77 = a0_0x577d;
    input = input[_0x219d77(0x0)](/\n/);
    let S = input[0x0][_0x219d77(0x0)]('');
    const T = input[0x1][_0x219d77(0x0)]('');
    const us = _0x219d77(0x1);
    for (let i = S[_0x219d77(0x2)] - T[_0x219d77(0x2)]; i >= 0x0; i--) {
        let x = 0x0;
        for (let j = 0x0; j < T[_0x219d77(0x2)]; j++) {
            if (S[i + j] == T[j] || S[i + j] == '?') {
            } else {
                x++;
                continue;
            }
        }
        if (x > 0x0)
            continue;
        for (let k = 0x0; k < T['length']; k++) {
            S[i + k] = T[k];
        }
        for (let i = 0x0; i < S[_0x219d77(0x2)]; i++) {
            S[i] = S[i] == '?' ? 'a' : S[i];
        }
        console[_0x219d77(0x3)](S = S[_0x219d77(0x4)](''));
        return;
    }
    console[_0x219d77(0x3)](us);
}
function a0_0x38e1() {
    const _0x124f3f = [
        'split',
        'UNRESTORABLE',
        'length',
        'log',
        'join',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x38e1 = function () {
        return _0x124f3f;
    };
    return a0_0x38e1();
}
function a0_0x577d(DnDxNL, key) {
    const stringArray = a0_0x38e1();
    a0_0x577d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x577d(DnDxNL, key);
}
main(require('fs')[a0_0x337383(0x5)](a0_0x337383(0x6), 'utf8'));