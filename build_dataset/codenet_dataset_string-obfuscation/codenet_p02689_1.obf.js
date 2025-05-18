'use strict';
const a0_0x73eea3 = a0_0x2980;
(function (stringArrayFunction, comparisonValue) {
    const _0x166ac9 = a0_0x2980;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x166ac9(0xfe)) / 0x1 + parseInt(_0x166ac9(0x106)) / 0x2 + -parseInt(_0x166ac9(0x107)) / 0x3 * (-parseInt(_0x166ac9(0xf9)) / 0x4) + parseInt(_0x166ac9(0xff)) / 0x5 * (parseInt(_0x166ac9(0x104)) / 0x6) + parseInt(_0x166ac9(0x103)) / 0x7 * (parseInt(_0x166ac9(0x105)) / 0x8) + parseInt(_0x166ac9(0x102)) / 0x9 * (parseInt(_0x166ac9(0x10c)) / 0xa) + parseInt(_0x166ac9(0x101)) / 0xb * (-parseInt(_0x166ac9(0x10a)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x309b, 0x248e3));
function a0_0x309b() {
    const _0x4a17a5 = [
        '204PixaFA',
        'push',
        'length',
        '/dev/stdin',
        'map',
        '121715yBALTb',
        '15SCJeBi',
        'forEach',
        '6578429dtibRG',
        '171KcvGja',
        '1654121fFWSPx',
        '348276rLytmX',
        '8lVNYwZ',
        '6960zQTAeE',
        '2955QZhQRL',
        'shift',
        'split',
        '12alrmwh',
        'utf8',
        '85210ZTjvnz',
        'log'
    ];
    a0_0x309b = function () {
        return _0x4a17a5;
    };
    return a0_0x309b();
}
const inputs = require('fs')['readFileSync'](a0_0x73eea3(0xfc), a0_0x73eea3(0x10b))[a0_0x73eea3(0x109)]('\x0a');
inputs[a0_0x73eea3(0x108)]();
const heights = inputs[a0_0x73eea3(0x108)]()[a0_0x73eea3(0x109)]('\x20')[a0_0x73eea3(0xfd)](v => parseInt(v, 0xa));
const towers = new Array(heights[a0_0x73eea3(0xfb)])['fill']()[a0_0x73eea3(0xfd)](_ => new Array());
inputs[a0_0x73eea3(0x100)](v => {
    const _0x23d345 = a0_0x73eea3;
    const splited = v[_0x23d345(0x109)]('\x20')['map'](w => parseInt(w, 0xa) - 0x1);
    towers[splited[0x0]][_0x23d345(0xfa)](splited[0x1]);
    towers[splited[0x1]][_0x23d345(0xfa)](splited[0x0]);
});
let result = 0x0;
function a0_0x2980(lAXnqe, key) {
    const stringArray = a0_0x309b();
    a0_0x2980 = function (index, key) {
        index = index - 0xf9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2980(lAXnqe, key);
}
towers[a0_0x73eea3(0x100)]((t, i) => {
    const _0x2aaaad = a0_0x73eea3;
    let good = !![];
    if (t[_0x2aaaad(0xfb)]) {
        t['forEach'](t2 => {
            if (heights[i] <= heights[t2]) {
                good = ![];
            }
        });
    }
    if (good) {
        ++result;
    }
});
console[a0_0x73eea3(0x10d)](result);