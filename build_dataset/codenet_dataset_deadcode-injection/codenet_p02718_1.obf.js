'use strict';
function a0_0x13ab(GOMVLb, key) {
    const stringArray = a0_0xaee4();
    a0_0x13ab = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x13ab(GOMVLb, key);
}
const a0_0x1dd804 = a0_0x13ab;
function a0_0xaee4() {
    const _0x2b92cc = [
        'split',
        'zZxNs',
        'log',
        'Yes',
        'qwRcN',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xaee4 = function () {
        return _0x2b92cc;
    };
    return a0_0xaee4();
}
function main(input) {
    const _0x5779f7 = a0_0x13ab;
    const n = Number(input[_0x5779f7(0x0)]('\x0a')[0x0][_0x5779f7(0x0)]('\x20')[0x0]);
    const m = Number(input[_0x5779f7(0x0)]('\x0a')[0x0][_0x5779f7(0x0)]('\x20')[0x1]);
    let a = [];
    let sum = 0x0;
    for (let index = 0x0; index < n; index++) {
        a[index] = input[_0x5779f7(0x0)]('\x0a')[0x1][_0x5779f7(0x0)]('\x20')[index];
        sum += Number(a[index]);
    }
    let count = 0x0;
    for (let index = 0x0; index < n; index++) {
        if (a[index] * (0x4 * m) - sum > 0x0) {
            count++;
        }
    }
    if (count >= m) {
        if (_0x5779f7(0x1) !== 'XQHQy') {
            console[_0x5779f7(0x2)](_0x5779f7(0x3));
        } else {
            count++;
        }
    } else {
        if (_0x5779f7(0x4) !== 'qwRcN') {
            if (a[index] * (0x4 * m) - sum > 0x0) {
                count++;
            }
        } else {
            console[_0x5779f7(0x2)]('No');
        }
    }
}
main(require('fs')[a0_0x1dd804(0x5)](a0_0x1dd804(0x6), a0_0x1dd804(0x7)));