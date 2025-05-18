'use strict';
const a0_0x5c6ae7 = a0_0x16a1;
function a0_0x16a1(qHVyVc, key) {
    const stringArray = a0_0x5773();
    a0_0x16a1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x16a1(qHVyVc, key);
}
function Main(input) {
    const _0x1d1c01 = a0_0x16a1;
    input = input[_0x1d1c01(0x0)]()[_0x1d1c01(0x1)]('\x20')['map'](Number);
    let badKusuri = input[0x0];
    let goodKusuri = input[0x1];
    let goodPoison = input[0x2];
    for (; goodKusuri > 0x0 && goodPoison > 0x0;) {
        if (_0x1d1c01(0x2) === _0x1d1c01(0x3)) {
            goodKusuri = 0x0;
        } else {
            goodKusuri--;
            goodPoison--;
        }
    }
    if (goodPoison == 0x0) {
        if ('GTNZC' !== _0x1d1c01(0x4)) {
            goodKusuri = 0x0;
        } else {
            badKusuri--;
            goodPoison--;
        }
    } else {
        for (; badKusuri > 0x0 && goodPoison > 0x0;) {
            if (_0x1d1c01(0x5) === 'PewPV') {
                badKusuri--;
                goodPoison--;
            } else {
                goodKusuri--;
                goodPoison--;
            }
        }
    }
    if (goodPoison > 0x0) {
        if ('favym' !== 'QvCTP') {
            goodPoison--;
        } else {
            for (; badKusuri > 0x0 && goodPoison > 0x0;) {
                badKusuri--;
                goodPoison--;
            }
        }
    }
    console[_0x1d1c01(0x6)](input[0x1] + input[0x2] - (goodKusuri + goodPoison));
}
Main(require('fs')[a0_0x5c6ae7(0x7)](a0_0x5c6ae7(0x8), a0_0x5c6ae7(0x9)));
function a0_0x5773() {
    const _0x1f008e = [
        'trim',
        'split',
        'JrPcK',
        'MXgNB',
        'FxVSv',
        'PewPV',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5773 = function () {
        return _0x1f008e;
    };
    return a0_0x5773();
}