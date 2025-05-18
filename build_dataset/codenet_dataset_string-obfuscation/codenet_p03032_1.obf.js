'use strict';
const a0_0x23ea27 = a0_0x3a88;
(function (stringArrayFunction, comparisonValue) {
    const _0x9da844 = a0_0x3a88;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x9da844(0x1d4)) / 0x1 * (parseInt(_0x9da844(0x1d5)) / 0x2) + -parseInt(_0x9da844(0x1d0)) / 0x3 * (parseInt(_0x9da844(0x1d1)) / 0x4) + parseInt(_0x9da844(0x1e2)) / 0x5 + parseInt(_0x9da844(0x1d7)) / 0x6 + -parseInt(_0x9da844(0x1d2)) / 0x7 + parseInt(_0x9da844(0x1e5)) / 0x8 * (-parseInt(_0x9da844(0x1df)) / 0x9) + parseInt(_0x9da844(0x1d8)) / 0xa * (parseInt(_0x9da844(0x1dc)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c3c, 0x701b2));
function a0_0x2c3c() {
    const _0x5a8ea1 = [
        'log',
        '2360754cklPdP',
        'slice',
        'trim',
        '18VAXHsu',
        'utf8',
        'shift',
        '199270BTFKYO',
        'max',
        'sort',
        '1430952siEZom',
        '517989xgxpuh',
        '4VOKabV',
        '2525775lCbSyV',
        'readFileSync',
        '1UIjJZv',
        '1364074bjiwID',
        'map',
        '1195758KaqqaD',
        '20OFBXZg',
        'split',
        '/dev/stdin'
    ];
    a0_0x2c3c = function () {
        return _0x5a8ea1;
    };
    return a0_0x2c3c();
}
function main(input) {
    const _0x557be3 = a0_0x3a88;
    input = input[_0x557be3(0x1de)]()['split']('\x0a');
    const NK = input[_0x557be3(0x1e1)]()['split']('\x20')[_0x557be3(0x1d6)](val => Number(val));
    const count = Math['min'](...NK);
    input = input[0x0][_0x557be3(0x1d9)]('\x20')[_0x557be3(0x1d6)](val => Number(val));
    const ans = [];
    for (let l = 0x0; l <= count; l++) {
        for (let r = 0x0; r <= count - l; r++) {
            let temp = [
                ...input[_0x557be3(0x1dd)](0x0, l),
                ...input[_0x557be3(0x1dd)](NK[0x0] - r)
            ][_0x557be3(0x1e4)]((a, b) => a - b);
            let remain = NK[0x1] - l - r;
            for (let i = 0x0; i < remain; i++) {
                if (temp[i] >= 0x0)
                    break;
                temp[i] = 0x0;
            }
            ans['push'](temp['reduce']((p, c) => p + c, 0x0));
        }
    }
    console[_0x557be3(0x1db)](Math[_0x557be3(0x1e3)](...ans));
}
function a0_0x3a88(yNdCBX, key) {
    const stringArray = a0_0x2c3c();
    a0_0x3a88 = function (index, key) {
        index = index - 0x1d0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a88(yNdCBX, key);
}
main(require('fs')[a0_0x23ea27(0x1d3)](a0_0x23ea27(0x1da), a0_0x23ea27(0x1e0)));