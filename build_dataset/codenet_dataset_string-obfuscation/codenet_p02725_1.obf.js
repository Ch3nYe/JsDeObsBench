'use strict';
function a0_0x71e0(RRnKiJ, key) {
    const stringArray = a0_0x3980();
    a0_0x71e0 = function (index, key) {
        index = index - 0x1aa;
        let value = stringArray[index];
        return value;
    };
    return a0_0x71e0(RRnKiJ, key);
}
const a0_0x61dd67 = a0_0x71e0;
(function (stringArrayFunction, comparisonValue) {
    const _0x5ec0a5 = a0_0x71e0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5ec0a5(0x1ac)) / 0x1 + -parseInt(_0x5ec0a5(0x1b7)) / 0x2 + -parseInt(_0x5ec0a5(0x1ab)) / 0x3 + -parseInt(_0x5ec0a5(0x1b3)) / 0x4 * (parseInt(_0x5ec0a5(0x1aa)) / 0x5) + -parseInt(_0x5ec0a5(0x1b5)) / 0x6 + -parseInt(_0x5ec0a5(0x1b6)) / 0x7 * (-parseInt(_0x5ec0a5(0x1b4)) / 0x8) + parseInt(_0x5ec0a5(0x1b2)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3980, 0x6f74c));
function main(input) {
    const _0x5c349f = a0_0x71e0;
    const args = input[_0x5c349f(0x1b0)]('\x0a')[0x0];
    const a = input['split']('\x0a')[0x1];
    let as = a[_0x5c349f(0x1b0)]('\x20');
    const K = Number(args[_0x5c349f(0x1b0)]('\x20')[0x0]);
    const N = Number(args[_0x5c349f(0x1b0)]('\x20')[0x1]);
    let ans = 0x0;
    const kh = Math[_0x5c349f(0x1ad)](K / 0x2);
    for (let i = 0x0; i < N; i++) {
        ans += Math[_0x5c349f(0x1af)](0x0 - as[i]) > Math['abs'](kh - as[i]) ? Math[_0x5c349f(0x1af)](kh - as[i]) : Math['abs'](0x0 - as[i]);
    }
    console['log'](ans);
}
main(require('fs')['readFileSync'](a0_0x61dd67(0x1b1), a0_0x61dd67(0x1ae)));
function a0_0x3980() {
    const _0x247cf8 = [
        '25032897bqLWVD',
        '4iESDOJ',
        '330512yeEIGz',
        '2934108xbcGDX',
        '28ugwZEN',
        '1346062NOBlad',
        '2305815RSBflk',
        '2289072zvHwTF',
        '103929NQmvVa',
        'floor',
        'utf8',
        'abs',
        'split',
        '/dev/stdin'
    ];
    a0_0x3980 = function () {
        return _0x247cf8;
    };
    return a0_0x3980();
}