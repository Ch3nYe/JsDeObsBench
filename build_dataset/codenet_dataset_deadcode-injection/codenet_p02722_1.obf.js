'use strict';
const a0_0x3dfe87 = a0_0x141a;
function a0_0x141a(dSoPci, key) {
    const stringArray = a0_0x2b37();
    a0_0x141a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x141a(dSoPci, key);
}
function arrayOfDivisors(n) {
    const _0x5844e0 = a0_0x141a;
    const divisor = new Array();
    divisor[0x0] = 0x1;
    for (let i = 0x2; i <= Math[_0x5844e0(0x0)](n); i++) {
        if (_0x5844e0(0x1) !== _0x5844e0(0x2)) {
            if (n % i === 0x0) {
                divisor['push'](i);
            }
        } else {
            divIncluded++;
        }
    }
    const p = divisor['length'];
    if (Math['sqrt'](n) !== divisor[p - 0x1]) {
        divisor[_0x5844e0(0x3)](n / divisor[p - 0x1]);
    }
    for (let i = p - 0x2; 0x0 <= i; i--) {
        divisor[_0x5844e0(0x3)](n / divisor[i]);
    }
    return divisor;
}
function a0_0x2b37() {
    const _0xef8b41 = [
        'sqrt',
        'OlqlK',
        'JWwHm',
        'push',
        'trim',
        'length',
        'shift',
        'indexOf',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2b37 = function () {
        return _0xef8b41;
    };
    return a0_0x2b37();
}
(function main(input) {
    const _0x2ac76f = a0_0x141a;
    const n = Number(input[_0x2ac76f(0x4)]());
    const subOnly = arrayOfDivisors(n - 0x1)[_0x2ac76f(0x5)] - 0x1;
    let divIncluded = 0x0;
    const divOfN = arrayOfDivisors(n);
    divOfN[_0x2ac76f(0x6)]();
    for (let d of divOfN) {
        let n1 = n;
        do {
            n1 /= d;
        } while (n1 % d === 0x0);
        if (n1 === 0x1) {
            divIncluded++;
        } else if (arrayOfDivisors(n1 - 0x1)[_0x2ac76f(0x7)](d) > -0x1) {
            divIncluded++;
        }
    }
    console[_0x2ac76f(0x8)](subOnly + divIncluded);
}(require('fs')[a0_0x3dfe87(0x9)]('/dev/stdin', a0_0x3dfe87(0xa))));