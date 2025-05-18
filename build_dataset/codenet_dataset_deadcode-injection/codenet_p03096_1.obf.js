'use strict';
var a0_0x5ef698 = a0_0x4407;
function a0_0x2342() {
    var _0x5bb725 = [
        'trim',
        'map',
        'shift',
        'not\x20yet',
        'pow',
        'pop',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2342 = function () {
        return _0x5bb725;
    };
    return a0_0x2342();
}
function Main(input) {
    var _0x2f191a = a0_0x4407;
    input = input[_0x2f191a(0x0)]()['split'](/\s+/)[_0x2f191a(0x1)](x => x - 0x0);
    var N = input[_0x2f191a(0x2)]();
    var last = [];
    for (let i = 0x0; i < 0x1e8480; i++)
        last[i] = _0x2f191a(0x3);
    last[input[0x0]] = 0x0;
    var dp = [0x1];
    var M = Math[_0x2f191a(0x4)](0xa, 0x9) + 0x7;
    for (let i = 0x1; i < N; i++) {
        let c = input[i];
        if (last[c] === _0x2f191a(0x3) || last[c] === i - 0x1) {
            last[c] = i;
            dp[i] = dp[i - 0x1];
            continue;
        }
        dp[i] = (dp[i - 0x1] + dp[last[c]]) % M;
        last[c] = i;
    }
    console['log'](dp[_0x2f191a(0x5)]());
}
function a0_0x4407(XvwUjH, key) {
    var stringArray = a0_0x2342();
    a0_0x4407 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4407(XvwUjH, key);
}
Main(require('fs')['readFileSync'](a0_0x5ef698(0x6), a0_0x5ef698(0x7)));