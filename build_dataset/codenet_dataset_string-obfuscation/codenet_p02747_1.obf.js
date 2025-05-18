'use strict';
function a0_0x50db() {
    const _0x437d91 = [
        '4411725rATvCT',
        'Yes',
        '4rjvBHy',
        '1476296AmBWOD',
        '3537550nQRITF',
        '6467810aPfgpr',
        '11EtkzKY',
        '15981678UdcgOh',
        'length',
        '2AlswrK',
        'utf8',
        '8603mIWaVm',
        'readFileSync',
        '4506ZLjzMc',
        'split',
        'trim',
        '13334896TdLiGA'
    ];
    a0_0x50db = function () {
        return _0x437d91;
    };
    return a0_0x50db();
}
const a0_0x3ed575 = a0_0x357d;
(function (stringArrayFunction, comparisonValue) {
    const _0x4523bb = a0_0x357d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4523bb(0xb6)) / 0x1 + -parseInt(_0x4523bb(0xbc)) / 0x2 * (parseInt(_0x4523bb(0xb3)) / 0x3) + parseInt(_0x4523bb(0xb5)) / 0x4 * (parseInt(_0x4523bb(0xb7)) / 0x5) + -parseInt(_0x4523bb(0xaf)) / 0x6 * (parseInt(_0x4523bb(0xad)) / 0x7) + parseInt(_0x4523bb(0xb2)) / 0x8 + parseInt(_0x4523bb(0xba)) / 0x9 + -parseInt(_0x4523bb(0xb8)) / 0xa * (-parseInt(_0x4523bb(0xb9)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50db, 0xe2545));
const Main = input => {
    const _0xf92a28 = a0_0x357d;
    let xs = input[_0xf92a28(0xb1)]()[_0xf92a28(0xb0)]('');
    let len = xs[_0xf92a28(0xbb)];
    let ans = 0x0;
    for (let i = 0x0; i <= len; i++) {
        if (i % 0x2 == 0x0 && xs[i] == 'h' && [i + 0x1] != 'h') {
            ans += 0x1;
        } else if (i % 0x2 == 0x1 && xs[i] == 'i' && xs[i + 0x1] != 'i') {
            ans += 0x1;
        } else {
            ans += 0x0;
        }
    }
    if (ans >= 0x2) {
        console['log'](_0xf92a28(0xb4));
    } else {
        console['log']('No');
    }
};
function a0_0x357d(qLlqKT, key) {
    const stringArray = a0_0x50db();
    a0_0x357d = function (index, key) {
        index = index - 0xad;
        let value = stringArray[index];
        return value;
    };
    return a0_0x357d(qLlqKT, key);
}
Main(require('fs')[a0_0x3ed575(0xae)]('/dev/stdin', a0_0x3ed575(0xbd)));