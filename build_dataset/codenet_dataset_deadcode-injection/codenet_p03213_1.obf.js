'use strict';
const a0_0x384626 = a0_0x366d;
function a0_0x366d(cCpCjM, key) {
    const stringArray = a0_0x19e7();
    a0_0x366d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x366d(cCpCjM, key);
}
function a0_0x19e7() {
    const _0x442f07 = [
        'split',
        'fill',
        'reduce',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x19e7 = function () {
        return _0x442f07;
    };
    return a0_0x19e7();
}
function Main(input) {
    const _0x388f37 = a0_0x366d;
    const N = input[_0x388f37(0x0)]('\x0a')[0x0] - 0x0;
    let e = new Array(N + 0x1)[_0x388f37(0x1)](0x0);
    for (let i = 0x2; i <= N; i++) {
        let cur = i;
        for (let j = 0x2; j <= i; j++) {
            while (cur % j == 0x0) {
                e[j] += 0x1;
                cur /= j;
            }
        }
    }
    const num = m => e[_0x388f37(0x2)]((ac, x) => ac + (x >= m - 0x1 ? 0x1 : 0x0), 0x0);
    let l75 = num(0x4b);
    let l25 = num(0x19);
    let l15 = num(0xf);
    let l5 = num(0x5);
    let l3 = num(0x3);
    let r5x5x3 = l5 * (l5 - 0x1) * (l3 - 0x2) / 0x2;
    let r15x5 = l15 * (l5 - 0x1);
    let r25x3 = l25 * (l3 - 0x1);
    let r75 = l75;
    console['log'](r75 + r25x3 + r15x5 + r5x5x3);
}
Main(require('fs')['readFileSync'](a0_0x384626(0x3), a0_0x384626(0x4)));