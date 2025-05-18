'use strict';
const a0_0x4c33ec = a0_0x1385;
(function (stringArrayFunction, comparisonValue) {
    const _0x334a96 = a0_0x1385;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x334a96(0x1ca)) / 0x1 + -parseInt(_0x334a96(0x1d1)) / 0x2 + parseInt(_0x334a96(0x1d3)) / 0x3 + parseInt(_0x334a96(0x1d7)) / 0x4 + -parseInt(_0x334a96(0x1cc)) / 0x5 * (-parseInt(_0x334a96(0x1d4)) / 0x6) + parseInt(_0x334a96(0x1d5)) / 0x7 + -parseInt(_0x334a96(0x1d2)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x406d, 0x43e8d));
function a0_0x1385(fWAEek, key) {
    const stringArray = a0_0x406d();
    a0_0x1385 = function (index, key) {
        index = index - 0x1ca;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1385(fWAEek, key);
}
var input = require('fs')[a0_0x4c33ec(0x1cf)](a0_0x4c33ec(0x1ce), 'utf8');
var cin = input[a0_0x4c33ec(0x1d6)](/ |\n/), cid = 0x0;
var myOut = main();
if (myOut !== undefined)
    console[a0_0x4c33ec(0x1d0)](myOut);
function main() {
    const _0x31e51e = a0_0x4c33ec;
    let n = +cin['shift']();
    let B = {};
    let C = {};
    cin['forEach']((v, i) => {
        let x = +v;
        B[String(i + x)] = B[String(i + x)] + 0x1 || 0x1;
        C[String(i - x)] = C[String(i - x)] + 0x1 || 0x1;
    });
    let keys = Object[_0x31e51e(0x1cb)](B);
    let ans = 0x0;
    keys[_0x31e51e(0x1cd)](i => {
        ans += B[i] * C[i] || 0x0;
    });
    return ans;
}
function a0_0x406d() {
    const _0x1f45bb = [
        '3494712IwxEtP',
        '915099xxTvNm',
        '60YisYvt',
        '687666kaFuLV',
        'split',
        '1609056hASneE',
        '384827ApbxaE',
        'keys',
        '38665uyKWNm',
        'forEach',
        '/dev/stdin',
        'readFileSync',
        'log',
        '1105392TVFsfp'
    ];
    a0_0x406d = function () {
        return _0x1f45bb;
    };
    return a0_0x406d();
}