'use strict';
const a0_0x51e046 = a0_0x5088;
(function (stringArrayFunction, comparisonValue) {
    const _0x757afc = a0_0x5088;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x757afc(0x1ef)) / 0x1 + -parseInt(_0x757afc(0x1f9)) / 0x2 * (-parseInt(_0x757afc(0x1f6)) / 0x3) + -parseInt(_0x757afc(0x1f4)) / 0x4 + parseInt(_0x757afc(0x1f7)) / 0x5 + -parseInt(_0x757afc(0x1f5)) / 0x6 * (parseInt(_0x757afc(0x1f3)) / 0x7) + parseInt(_0x757afc(0x1fa)) / 0x8 * (parseInt(_0x757afc(0x1fc)) / 0x9) + -parseInt(_0x757afc(0x1fe)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2375, 0x87625));
function a0_0x2375() {
    const _0x85e9f1 = [
        'pow',
        '508764ofKoOS',
        'shift',
        'readFileSync',
        'length',
        '6713qJGOem',
        '3807860HtfDcW',
        '1176PlSVOI',
        '1255971vPpECs',
        '2503145BAprPz',
        'utf8',
        '4UoRZXR',
        '8XeQzpA',
        'log',
        '1096974GEUgwB',
        'max',
        '2741310eRQChe'
    ];
    a0_0x2375 = function () {
        return _0x85e9f1;
    };
    return a0_0x2375();
}
function main(s) {
    const _0x415e81 = a0_0x5088;
    const x = Number(s);
    const nums = [...Array(0x1f)]['map']((x, i) => i + 0x1);
    nums[_0x415e81(0x1f0)]();
    const max_ary = [0x1];
    for (let i = 0x0; i < nums[_0x415e81(0x1f2)]; i++) {
        let j = 0x2;
        let n = nums[i];
        let max = Math['pow'](n, j);
        if (max > x)
            continue;
        while (max <= x) {
            j += 0x1;
            max = Math[_0x415e81(0x1ee)](n, j);
        }
        max = Math[_0x415e81(0x1ee)](n, j - 0x1);
        max_ary['push'](max);
    }
    const ans = Math[_0x415e81(0x1fd)](...max_ary);
    console[_0x415e81(0x1fb)](ans);
}
function a0_0x5088(fbczQD, key) {
    const stringArray = a0_0x2375();
    a0_0x5088 = function (index, key) {
        index = index - 0x1ee;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5088(fbczQD, key);
}
main(require('fs')[a0_0x51e046(0x1f1)]('/dev/stdin', a0_0x51e046(0x1f8)));