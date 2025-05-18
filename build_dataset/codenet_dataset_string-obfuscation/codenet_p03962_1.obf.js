'use strict';
const a0_0x128068 = a0_0x4f79;
(function (stringArrayFunction, comparisonValue) {
    const _0x5bb649 = a0_0x4f79;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5bb649(0x178)) / 0x1 * (parseInt(_0x5bb649(0x16b)) / 0x2) + -parseInt(_0x5bb649(0x168)) / 0x3 + -parseInt(_0x5bb649(0x170)) / 0x4 * (-parseInt(_0x5bb649(0x16c)) / 0x5) + -parseInt(_0x5bb649(0x172)) / 0x6 + parseInt(_0x5bb649(0x174)) / 0x7 * (parseInt(_0x5bb649(0x16d)) / 0x8) + parseInt(_0x5bb649(0x169)) / 0x9 * (parseInt(_0x5bb649(0x16e)) / 0xa) + parseInt(_0x5bb649(0x177)) / 0xb * (parseInt(_0x5bb649(0x171)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d4f, 0xa3ac8));
function a0_0x3d4f() {
    const _0x577d58 = [
        '2fQZGkf',
        '5xEjamX',
        '8RXqZsj',
        '231930XvBmwE',
        'log',
        '42556NRVFEK',
        '18606348DtmiDC',
        '5386710aedeto',
        '/dev/stdin',
        '3641351hAANDZ',
        'utf8',
        'trim',
        '11QpPtiO',
        '1203746loVdNP',
        '1894269XDOMUL',
        '513MkAByL',
        'readFileSync'
    ];
    a0_0x3d4f = function () {
        return _0x577d58;
    };
    return a0_0x3d4f();
}
const lines = require('fs')[a0_0x128068(0x16a)](a0_0x128068(0x173), a0_0x128068(0x175))[a0_0x128068(0x176)]()['split']('');
function a0_0x4f79(GkpyWW, key) {
    const stringArray = a0_0x3d4f();
    a0_0x4f79 = function (index, key) {
        index = index - 0x168;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f79(GkpyWW, key);
}
if (lines[0x0] === lines[0x1] && lines[0x1] === lines[0x2]) {
    console[a0_0x128068(0x16f)](0x1);
}
if (lines[0x0] === lines[0x1] && lines[0x1] !== lines[0x2]) {
    console[a0_0x128068(0x16f)](0x2);
}
if (lines[0x0] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console['log'](0x2);
}
if (lines[0x1] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console[a0_0x128068(0x16f)](0x2);
}
if (lines[0x0] !== lines[0x1] && lines[0x1] !== lines[0x2] && lines[0x2] !== lines[0x0]) {
    console[a0_0x128068(0x16f)](0x3);
}