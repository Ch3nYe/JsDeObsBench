'use strict';
const a0_0x55b4cf = a0_0x50c7;
(function (stringArrayFunction, comparisonValue) {
    const _0x507355 = a0_0x50c7;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x507355(0x1ee)) / 0x1 + -parseInt(_0x507355(0x1eb)) / 0x2 * (parseInt(_0x507355(0x1ef)) / 0x3) + -parseInt(_0x507355(0x1f5)) / 0x4 + parseInt(_0x507355(0x1f0)) / 0x5 + parseInt(_0x507355(0x1f2)) / 0x6 + -parseInt(_0x507355(0x1f8)) / 0x7 + parseInt(_0x507355(0x1f7)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5496, 0xa0b7e));
function a0_0x50c7(rxkYvL, key) {
    const stringArray = a0_0x5496();
    a0_0x50c7 = function (index, key) {
        index = index - 0x1eb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50c7(rxkYvL, key);
}
function main(input) {
    const _0x3af587 = a0_0x50c7;
    const args = input[_0x3af587(0x1f3)]('\x0a');
    const num = args[_0x3af587(0x1f6)](el => parseInt(el));
    const ans = [
        0x1,
        0x2,
        0x3
    ];
    let out = ans[_0x3af587(0x1ed)](el => el !== num[0x0]);
    out = out['find'](el => el !== num[0x1]);
    console[_0x3af587(0x1f4)](out);
}
function a0_0x5496() {
    const _0x2b07c5 = [
        '18419776mWNILo',
        '316540rmtaeg',
        'readFileSync',
        '54654IdMMMp',
        'utf8',
        'filter',
        '1260203eNsUDj',
        '117BDJVkv',
        '6066340UWfJMQ',
        '/dev/stdin',
        '987018PzkVaI',
        'split',
        'log',
        '2603060teRJBK',
        'map'
    ];
    a0_0x5496 = function () {
        return _0x2b07c5;
    };
    return a0_0x5496();
}
main(require('fs')[a0_0x55b4cf(0x1f9)](a0_0x55b4cf(0x1f1), a0_0x55b4cf(0x1ec)));