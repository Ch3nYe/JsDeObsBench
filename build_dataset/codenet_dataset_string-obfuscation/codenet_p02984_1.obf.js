'use strict';
function a0_0x3870() {
    const _0x433d60 = [
        '6xLQhfz',
        '37042iumPoR',
        '88891reDCan',
        '70UiWynn',
        'log',
        'map',
        'push',
        '1426475yJmUAV',
        '167316FPQSkd',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        '618579YHzkbb',
        '6LtRoXa',
        '8mnOpFc',
        'trim',
        'join',
        'split',
        '143656GcAjDt',
        '2130611JBoXRH'
    ];
    a0_0x3870 = function () {
        return _0x433d60;
    };
    return a0_0x3870();
}
const a0_0x4ea36a = a0_0x4e7f;
(function (stringArrayFunction, comparisonValue) {
    const _0x67a603 = a0_0x4e7f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x67a603(0x18b)) / 0x1 * (parseInt(_0x67a603(0x183)) / 0x2) + -parseInt(_0x67a603(0x17e)) / 0x3 + parseInt(_0x67a603(0x188)) / 0x4 + parseInt(_0x67a603(0x17d)) / 0x5 * (parseInt(_0x67a603(0x18a)) / 0x6) + -parseInt(_0x67a603(0x189)) / 0x7 + parseInt(_0x67a603(0x184)) / 0x8 * (parseInt(_0x67a603(0x182)) / 0x9) + -parseInt(_0x67a603(0x18d)) / 0xa * (-parseInt(_0x67a603(0x18c)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3870, 0x30370));
function a0_0x4e7f(evRnde, key) {
    const stringArray = a0_0x3870();
    a0_0x4e7f = function (index, key) {
        index = index - 0x17d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4e7f(evRnde, key);
}
const main = arg => {
    const _0x32a176 = a0_0x4e7f;
    arg = arg[_0x32a176(0x185)]()['split']('\x0a');
    const N = parseInt(arg[0x0]);
    const A = arg[0x1][_0x32a176(0x187)]('\x20')[_0x32a176(0x18f)](n => parseInt(0x2 * n));
    let offset = 0x0;
    for (let i = 0x0; i < N; i++) {
        offset = A[i] - offset;
    }
    let x = offset / 0x2;
    let cur = x;
    let answer = [];
    for (let i = 0x0; i < N; i++) {
        answer[_0x32a176(0x190)](cur);
        cur = A[i] - cur;
    }
    console[_0x32a176(0x18e)](answer[_0x32a176(0x186)]('\x20'));
};
main(require('fs')[a0_0x4ea36a(0x17f)](a0_0x4ea36a(0x180), a0_0x4ea36a(0x181)));