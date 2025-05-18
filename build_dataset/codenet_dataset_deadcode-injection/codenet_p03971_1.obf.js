'use strict';
function a0_0x1ff1(PlBAXd, key) {
    const stringArray = a0_0x1ee2();
    a0_0x1ff1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ff1(PlBAXd, key);
}
function a0_0x1ee2() {
    const _0x401fcf = [
        'trim',
        'split',
        'push',
        'Yes',
        'GoCEe',
        'join',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x1ee2 = function () {
        return _0x401fcf;
    };
    return a0_0x1ee2();
}
const a0_0x48daa4 = a0_0x1ff1;
const Main = input => {
    const _0x16cad7 = a0_0x1ff1;
    const tmp = input[_0x16cad7(0x0)]()[_0x16cad7(0x1)]('\x0a');
    const N = parseInt(tmp[0x0][_0x16cad7(0x1)]('\x20')[0x0]);
    const A = parseInt(tmp[0x0]['split']('\x20')[0x1]);
    const B = parseInt(tmp[0x0][_0x16cad7(0x1)]('\x20')[0x2]);
    const S = tmp[0x1];
    let result = [];
    let count = 0x0;
    let overseas = 0x0;
    for (let i = 0x0; i < N; i++) {
        const participant = S[_0x16cad7(0x1)]('')[i];
        if (participant === 'a') {
            if (count < A + B) {
                result[_0x16cad7(0x2)](_0x16cad7(0x3));
                count += 0x1;
            } else {
                result[_0x16cad7(0x2)]('No');
            }
        } else if (participant === 'b') {
            if (count < A + B && overseas < B) {
                if ('TQRAT' !== _0x16cad7(0x4)) {
                    result[_0x16cad7(0x2)](_0x16cad7(0x3));
                    count += 0x1;
                    overseas += 0x1;
                } else {
                    result[_0x16cad7(0x2)]('No');
                }
            } else {
                result['push']('No');
            }
        } else {
            if ('DLxGW' === 'DLxGW') {
                result['push']('No');
            } else {
                result[_0x16cad7(0x2)](_0x16cad7(0x3));
                count += 0x1;
            }
        }
    }
    result = result[_0x16cad7(0x5)]('\x0a');
    console[_0x16cad7(0x6)](result);
    return result;
};
Main(require('fs')[a0_0x48daa4(0x7)]('/dev/stdin', a0_0x48daa4(0x8)));