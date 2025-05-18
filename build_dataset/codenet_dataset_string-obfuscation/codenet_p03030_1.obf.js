function a0_0x3ba1() {
    const _0x3bb3a0 = [
        '1204971plFEBb',
        '447480aiEHNZ',
        '5691826SSzTRp',
        '4iyWbiW',
        'map',
        '45565HPhSnG',
        'sort',
        'join',
        'split',
        'push',
        'log',
        '232488ldGoSt',
        'readFileSync',
        '5342670bfUOgy',
        '509376kzdlqf'
    ];
    a0_0x3ba1 = function () {
        return _0x3bb3a0;
    };
    return a0_0x3ba1();
}
const a0_0xbe8cb2 = a0_0x4f20;
(function (stringArrayFunction, comparisonValue) {
    const _0x597219 = a0_0x4f20;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x597219(0xda)) / 0x1 + parseInt(_0x597219(0xd8)) / 0x2 * (parseInt(_0x597219(0xe4)) / 0x3) + -parseInt(_0x597219(0xe0)) / 0x4 + -parseInt(_0x597219(0xe5)) / 0x5 + -parseInt(_0x597219(0xe2)) / 0x6 + parseInt(_0x597219(0xd7)) / 0x7 + -parseInt(_0x597219(0xe3)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ba1, 0x88c86));
function Main(input) {
    'use strict';
    const _0x4f7640 = a0_0x4f20;
    const temp = input[_0x4f7640(0xdd)]('\x0a');
    const n = parseInt(temp['shift'](), 0xa);
    for (let i = 0x0; i < n; i++) {
        temp[i] = temp[i]['split']('\x20');
        temp[i][_0x4f7640(0xde)](i + 0x1);
        temp[i][0x1] = parseInt(temp[i][0x1], 0xa);
    }
    temp[_0x4f7640(0xdb)]((a, b) => b[0x1] - a[0x1]);
    temp[_0x4f7640(0xdb)]((a, b) => {
        if (a[0x0] < b[0x0])
            return -0x1;
        else if (a[0x0] > b[0x0])
            return 0x1;
        else
            0x0;
    });
    const ans = temp[_0x4f7640(0xd9)](e => e[0x2]);
    console[_0x4f7640(0xdf)](ans[_0x4f7640(0xdc)]('\x0a'));
    return ![];
}
function a0_0x4f20(UaPckx, key) {
    const stringArray = a0_0x3ba1();
    a0_0x4f20 = function (index, key) {
        index = index - 0xd7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f20(UaPckx, key);
}
Main(require('fs')[a0_0xbe8cb2(0xe1)]('/dev/stdin', 'utf8'));