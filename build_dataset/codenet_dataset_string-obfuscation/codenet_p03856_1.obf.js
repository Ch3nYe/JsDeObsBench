'use strict';
var a0_0x54cbd8 = a0_0x53a9;
function a0_0x3e14() {
    var _0x53d07e = [
        'fill',
        'slice',
        '120570OcoqFM',
        '1040238YMwOdN',
        '2277874vIiEvA',
        '7FdAtkA',
        '3wgumcm',
        'alloc',
        '1953RgzXDI',
        '8295736GszoED',
        'erase',
        '4221148qPqUTg',
        'YES',
        'eraser',
        'dreamer',
        'trim',
        'log',
        '1024454uzBPno',
        '9057905bPekOa',
        'length',
        'dream'
    ];
    a0_0x3e14 = function () {
        return _0x53d07e;
    };
    return a0_0x3e14();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x393dc1 = a0_0x53a9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x393dc1(0x1dd)) / 0x1 + -parseInt(_0x393dc1(0x1e5)) / 0x2 * (parseInt(_0x393dc1(0x1e7)) / 0x3) + parseInt(_0x393dc1(0x1ec)) / 0x4 + -parseInt(_0x393dc1(0x1de)) / 0x5 + parseInt(_0x393dc1(0x1e4)) / 0x6 + parseInt(_0x393dc1(0x1e6)) / 0x7 * (parseInt(_0x393dc1(0x1ea)) / 0x8) + -parseInt(_0x393dc1(0x1e9)) / 0x9 * (-parseInt(_0x393dc1(0x1e3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3e14, 0xdd710));
var fs = require('fs');
function a0_0x53a9(omnLfB, key) {
    var stringArray = a0_0x3e14();
    a0_0x53a9 = function (index, key) {
        index = index - 0x1db;
        var value = stringArray[index];
        return value;
    };
    return a0_0x53a9(omnLfB, key);
}
var input = Buffer[a0_0x54cbd8(0x1e8)](0x10000);
var length = fs['readSync'](0x0, input, 0x0, 0x10000);
var text = input['toString']()[a0_0x54cbd8(0x1e2)](0x0, length)[a0_0x54cbd8(0x1db)]();
var dp = Array(text[a0_0x54cbd8(0x1df)] + 0x1)[a0_0x54cbd8(0x1e1)](![]);
dp[0x0] = !![];
for (var index = 0x5; index <= text[a0_0x54cbd8(0x1df)]; index++) {
    if (dp[index - 0x5] === !![] && text[a0_0x54cbd8(0x1e2)](index - 0x5, index) === a0_0x54cbd8(0x1e0)) {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x7] === !![] && text[a0_0x54cbd8(0x1e2)](index - 0x7, index) === a0_0x54cbd8(0x1ef)) {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x5] === !![] && text[a0_0x54cbd8(0x1e2)](index - 0x5, index) === a0_0x54cbd8(0x1eb)) {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x6] === !![] && text[a0_0x54cbd8(0x1e2)](index - 0x6, index) === a0_0x54cbd8(0x1ee)) {
        dp[index] = !![];
        continue;
    }
}
console[a0_0x54cbd8(0x1dc)](dp[text[a0_0x54cbd8(0x1df)]] ? a0_0x54cbd8(0x1ed) : 'NO');