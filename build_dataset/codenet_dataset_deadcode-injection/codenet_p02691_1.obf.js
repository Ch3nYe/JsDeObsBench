'use strict';
function a0_0x4a7c() {
    const _0x5c30a9 = [
        'readFileSync',
        'split',
        'shift',
        'forEach',
        'keys'
    ];
    a0_0x4a7c = function () {
        return _0x5c30a9;
    };
    return a0_0x4a7c();
}
const a0_0x70ed23 = a0_0x3944;
var input = require('fs')[a0_0x70ed23(0x0)]('/dev/stdin', 'utf8');
function a0_0x3944(UzaPbN, key) {
    const stringArray = a0_0x4a7c();
    a0_0x3944 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3944(UzaPbN, key);
}
var cin = input[a0_0x70ed23(0x1)](/ |\n/), cid = 0x0;
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    const _0x107d41 = a0_0x3944;
    let n = +cin[_0x107d41(0x2)]();
    let B = {};
    let C = {};
    cin[_0x107d41(0x3)]((v, i) => {
        let x = +v;
        B[String(i + x)] = B[String(i + x)] + 0x1 || 0x1;
        C[String(i - x)] = C[String(i - x)] + 0x1 || 0x1;
    });
    let keys = Object[_0x107d41(0x4)](B);
    let ans = 0x0;
    keys[_0x107d41(0x3)](i => {
        ans += B[i] * C[i] || 0x0;
    });
    return ans;
}