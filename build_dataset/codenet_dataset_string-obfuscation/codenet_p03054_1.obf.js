'use strict';
var a0_0x3d8640 = a0_0x33fe;
(function (stringArrayFunction, comparisonValue) {
    var _0x163ff7 = a0_0x33fe;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x163ff7(0x1a2)) / 0x1 + -parseInt(_0x163ff7(0x19e)) / 0x2 * (parseInt(_0x163ff7(0x1a6)) / 0x3) + parseInt(_0x163ff7(0x1a1)) / 0x4 * (parseInt(_0x163ff7(0x1ab)) / 0x5) + parseInt(_0x163ff7(0x1a0)) / 0x6 + -parseInt(_0x163ff7(0x1a5)) / 0x7 * (-parseInt(_0x163ff7(0x1a9)) / 0x8) + parseInt(_0x163ff7(0x19f)) / 0x9 * (parseInt(_0x163ff7(0x19b)) / 0xa) + -parseInt(_0x163ff7(0x19d)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2860, 0xc2d02));
function a0_0x33fe(cXGCKK, key) {
    var stringArray = a0_0x2860();
    a0_0x33fe = function (index, key) {
        index = index - 0x19a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x33fe(cXGCKK, key);
}
function Main(input) {
    var _0x21cc41 = a0_0x33fe;
    input = input[_0x21cc41(0x1a3)](/\s+/);
    var H = input[_0x21cc41(0x1a7)]() - 0x0;
    var W = input[_0x21cc41(0x1a7)]() - 0x0;
    var N = input[_0x21cc41(0x1a7)]() - 0x0;
    var sr = input['shift']() - 0x0;
    var sc = input[_0x21cc41(0x1a7)]() - 0x0;
    var S = input['shift']();
    var T = input[_0x21cc41(0x1a7)]();
    var dp = [[
            sc,
            sc,
            sr,
            sr
        ]];
    for (let i = 0x0; i < N; i++) {
        dp[i + 0x1] = [];
        dp[i + 0x1][0x0] = dp[i][0x0] - (S[i] === 'L' ? 0x1 : 0x0);
        dp[i + 0x1][0x1] = dp[i][0x1] + (S[i] === 'R' ? 0x1 : 0x0);
        dp[i + 0x1][0x2] = dp[i][0x2] - (S[i] === 'U' ? 0x1 : 0x0);
        dp[i + 0x1][0x3] = dp[i][0x3] + (S[i] === 'D' ? 0x1 : 0x0);
        if (dp[i + 0x1][0x0] === 0x0 || dp[i + 0x1][0x1] === W + 0x1 || dp[i + 0x1][0x2] === 0x0 || dp[i + 0x1][0x3] === H + 0x1) {
            console[_0x21cc41(0x19c)]('NO');
            return;
        }
        dp[i + 0x1][0x0] = Math[_0x21cc41(0x1a8)](dp[i + 0x1][0x0] + (T[i] === 'R' ? 0x1 : 0x0), W);
        dp[i + 0x1][0x1] = Math[_0x21cc41(0x19a)](dp[i + 0x1][0x1] - (T[i] === 'L' ? 0x1 : 0x0), 0x1);
        dp[i + 0x1][0x2] = Math[_0x21cc41(0x1a8)](dp[i + 0x1][0x2] + (T[i] === 'D' ? 0x1 : 0x0), H);
        dp[i + 0x1][0x3] = Math['max'](dp[i + 0x1][0x3] - (T[i] === 'U' ? 0x1 : 0x0), 0x1);
    }
    console[_0x21cc41(0x19c)](_0x21cc41(0x1a4));
}
function a0_0x2860() {
    var _0x16c9c5 = [
        '40GAODdL',
        'readFileSync',
        '5dpDICg',
        'max',
        '3580hlVXHn',
        'log',
        '24903318CUkuWQ',
        '16MSTIeN',
        '25227ACwjjG',
        '9465522CCnoSy',
        '3326116VHWgnC',
        '419589kmcSXR',
        'split',
        'YES',
        '1213233rKwUWy',
        '299139OtibDr',
        'shift',
        'min'
    ];
    a0_0x2860 = function () {
        return _0x16c9c5;
    };
    return a0_0x2860();
}
Main(require('fs')[a0_0x3d8640(0x1aa)]('/dev/stdin', 'utf8'));