'use strict';
function a0_0x5cd5() {
    const _0x562c63 = [
        '3wLYYLc',
        '5401647wAYSZR',
        '186408KyHiiB',
        '183954fFypMK',
        '/dev/stdin',
        '21CwNxaG',
        '10451370qcpKjC',
        'utf8',
        '20djRJRK',
        '271994rExvaz',
        'Possible',
        '322505uQQZUQ',
        'log',
        '1758104DdaWRd',
        'split'
    ];
    a0_0x5cd5 = function () {
        return _0x562c63;
    };
    return a0_0x5cd5();
}
const a0_0x1ecd37 = a0_0x2fec;
(function (stringArrayFunction, comparisonValue) {
    const _0x4bd559 = a0_0x2fec;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4bd559(0x1cf)) / 0x1 + -parseInt(_0x4bd559(0x1c9)) / 0x2 * (-parseInt(_0x4bd559(0x1c6)) / 0x3) + parseInt(_0x4bd559(0x1ce)) / 0x4 * (parseInt(_0x4bd559(0x1c2)) / 0x5) + parseInt(_0x4bd559(0x1c8)) / 0x6 + -parseInt(_0x4bd559(0x1cb)) / 0x7 * (-parseInt(_0x4bd559(0x1c4)) / 0x8) + parseInt(_0x4bd559(0x1c7)) / 0x9 + -parseInt(_0x4bd559(0x1cc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5cd5, 0x5eb33));
function Main(input) {
    const _0x2f45e9 = a0_0x2fec;
    input = input[_0x2f45e9(0x1c5)]('\x0a');
    const arr = input[0x0][_0x2f45e9(0x1c5)]('\x20');
    if (arr[0x0] % 0x3 === 0x0 || arr[0x1] % 0x3 === 0x0 || (arr[0x0] + arr[0x1]) % 0x3 === 0x0) {
        console[_0x2f45e9(0x1c3)](_0x2f45e9(0x1c1));
    } else {
        console['log']('Impossible');
    }
}
function a0_0x2fec(RtZBah, key) {
    const stringArray = a0_0x5cd5();
    a0_0x2fec = function (index, key) {
        index = index - 0x1c1;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2fec(RtZBah, key);
}
Main(require('fs')['readFileSync'](a0_0x1ecd37(0x1ca), a0_0x1ecd37(0x1cd)));