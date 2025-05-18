'use strict';
const a0_0x3bc6aa = a0_0x124e;
function a0_0x124e(nXCJgV, key) {
    const stringArray = a0_0x36f0();
    a0_0x124e = function (index, key) {
        index = index - 0xa5;
        let value = stringArray[index];
        return value;
    };
    return a0_0x124e(nXCJgV, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x183250 = a0_0x124e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x183250(0xab)) / 0x1 + parseInt(_0x183250(0xa5)) / 0x2 + -parseInt(_0x183250(0xb1)) / 0x3 + -parseInt(_0x183250(0xb3)) / 0x4 * (-parseInt(_0x183250(0xae)) / 0x5) + -parseInt(_0x183250(0xb2)) / 0x6 + parseInt(_0x183250(0xad)) / 0x7 * (-parseInt(_0x183250(0xa9)) / 0x8) + parseInt(_0x183250(0xaf)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x36f0, 0x7fe34));
const main = input => {
    const _0x2fff32 = a0_0x124e;
    input = input[_0x2fff32(0xac)]('\x20')[_0x2fff32(0xa8)](v => parseInt(v));
    const W = input[0x0];
    const a = input[0x1];
    const b = input[0x2];
    const aw = a + W;
    const bw = b + W;
    let arr = [];
    if (a <= b) {
        arr = [
            a,
            aw,
            b,
            bw
        ];
    } else {
        arr = [
            b,
            bw,
            a,
            aw
        ];
    }
    if (arr[0x1] < arr[0x2]) {
        console['log'](arr[0x2] - arr[0x1]);
    } else {
        console[_0x2fff32(0xa6)](0x0);
    }
};
main(require('fs')[a0_0x3bc6aa(0xa7)](a0_0x3bc6aa(0xb0), a0_0x3bc6aa(0xaa)));
function a0_0x36f0() {
    const _0x370aeb = [
        '563395RQZNMk',
        '9364383WWljsy',
        '/dev/stdin',
        '501288SOTorD',
        '3474732STMMuC',
        '16FAgFxT',
        '1801250JcxMNr',
        'log',
        'readFileSync',
        'map',
        '2084872EjtrNa',
        'utf-8',
        '861173pKkcqS',
        'split',
        '7IZQJML'
    ];
    a0_0x36f0 = function () {
        return _0x370aeb;
    };
    return a0_0x36f0();
}