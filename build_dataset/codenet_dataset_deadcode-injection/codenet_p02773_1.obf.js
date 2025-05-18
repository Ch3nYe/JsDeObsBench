'use strict';
function a0_0x2c0a(XSVBUu, key) {
    const stringArray = a0_0x19bc();
    a0_0x2c0a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2c0a(XSVBUu, key);
}
const a0_0x13a64c = a0_0x2c0a;
const main = arg => {
    const _0x123341 = a0_0x2c0a;
    const rows = arg[_0x123341(0x0)]()[_0x123341(0x1)]('\x0a');
    const N = rows[_0x123341(0x2)]();
    let wordsObj = {};
    rows[_0x123341(0x3)](row => {
        const _0x1b07dc = a0_0x2c0a;
        if (_0x1b07dc(0x4) !== _0x1b07dc(0x5)) {
            if (wordsObj[row]) {
                wordsObj[row]++;
            } else {
                wordsObj[row] = 0x1;
            }
        } else {
            ansArr[_0x1b07dc(0x6)](Object['keys'](wordsObj)[i]);
        }
    });
    let ansArr = [];
    let max = 0x0;
    let output = w => {
        console['log'](w);
    };
    for (let i = 0x0; i < Object[_0x123341(0x7)](wordsObj)[_0x123341(0x8)]; i++) {
        if (wordsObj[Object[_0x123341(0x7)](wordsObj)[i]] < max) {
            continue;
        } else if (wordsObj[Object[_0x123341(0x7)](wordsObj)[i]] > max) {
            ansArr = [];
            ansArr[_0x123341(0x6)](Object[_0x123341(0x7)](wordsObj)[i]);
            max = wordsObj[Object[_0x123341(0x7)](wordsObj)[i]];
        } else if (wordsObj[Object[_0x123341(0x7)](wordsObj)[i]] * 0x1 == max) {
            if (_0x123341(0x9) !== 'qnQGI') {
                ansArr[_0x123341(0x6)](Object['keys'](wordsObj)[i]);
            } else {
                console[_0x123341(0xa)](w);
            }
        }
    }
    ansArr['sort']();
    ansArr[_0x123341(0x3)](output);
};
main(require('fs')[a0_0x13a64c(0xb)](a0_0x13a64c(0xc), a0_0x13a64c(0xd)));
function a0_0x19bc() {
    const _0x2371be = [
        'trim',
        'split',
        'shift',
        'forEach',
        'kLSXB',
        'bOxGj',
        'push',
        'keys',
        'length',
        'jQouM',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x19bc = function () {
        return _0x2371be;
    };
    return a0_0x19bc();
}