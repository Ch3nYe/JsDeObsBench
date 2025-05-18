'use strict';
const a0_0x66e869 = a0_0xe0e2;
function main(input) {
    const _0x53421a = a0_0xe0e2;
    const inputRows = input[_0x53421a(0x0)]('\x0a');
    const d = parseInt(inputRows[0x0]);
    let cStrArray = inputRows[0x1]['split']('\x20');
    const c = cStrArray[_0x53421a(0x1)](str => parseInt(str));
    let s = [];
    for (let i = 0x2; i < inputRows[_0x53421a(0x2)]; i++) {
        s[_0x53421a(0x3)]([]);
        const tmpRow = inputRows[i][_0x53421a(0x0)]('\x20');
        for (let j = 0x0; j < tmpRow[_0x53421a(0x2)]; j++) {
            s[i - 0x2]['push'](parseInt(tmpRow[j]));
        }
    }
    let t = [];
    for (let i = 0x0; i < s[_0x53421a(0x2)]; i++) {
        let tmpMax = s[i][0x0];
        let index = 0x0;
        for (let j = 0x1; j < s[i][_0x53421a(0x2)]; j++) {
            if (s[i][j] > tmpMax) {
                if (_0x53421a(0x4) !== 'yeHQl') {
                    let tmpMax = s[i][0x0];
                    let index = 0x0;
                    for (let j = 0x1; j < s[i][_0x53421a(0x2)]; j++) {
                        if (s[i][j] > tmpMax) {
                            index = j;
                            tmpMax = s[i][j];
                        }
                    }
                    t[_0x53421a(0x3)](index + 0x1);
                } else {
                    index = j;
                    tmpMax = s[i][j];
                }
            }
        }
        t[_0x53421a(0x3)](index + 0x1);
    }
    for (let i = 0x0; i < t[_0x53421a(0x2)]; i++) {
        console['log'](t[i]);
    }
}
main(require('fs')[a0_0x66e869(0x5)](a0_0x66e869(0x6), a0_0x66e869(0x7)));
main(input);
function a0_0xe0e2(nibQwL, key) {
    const stringArray = a0_0x55b3();
    a0_0xe0e2 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe0e2(nibQwL, key);
}
function a0_0x55b3() {
    const _0x13fa44 = [
        'split',
        'map',
        'length',
        'push',
        'yeHQl',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x55b3 = function () {
        return _0x13fa44;
    };
    return a0_0x55b3();
}