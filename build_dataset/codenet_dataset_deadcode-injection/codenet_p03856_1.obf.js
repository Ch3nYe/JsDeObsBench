'use strict';
function a0_0x32d5() {
    var _0x1bc517 = [
        'alloc',
        'readSync',
        'toString',
        'trim',
        'length',
        'fill',
        'slice',
        'dream',
        'erase',
        'eraser',
        'log',
        'YES'
    ];
    a0_0x32d5 = function () {
        return _0x1bc517;
    };
    return a0_0x32d5();
}
var a0_0x1a26aa = a0_0x3439;
var fs = require('fs');
var input = Buffer[a0_0x1a26aa(0x0)](0x10000);
var length = fs[a0_0x1a26aa(0x1)](0x0, input, 0x0, 0x10000);
function a0_0x3439(gRNJdJ, key) {
    var stringArray = a0_0x32d5();
    a0_0x3439 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3439(gRNJdJ, key);
}
var text = input[a0_0x1a26aa(0x2)]()['slice'](0x0, length)[a0_0x1a26aa(0x3)]();
var dp = Array(text[a0_0x1a26aa(0x4)] + 0x1)[a0_0x1a26aa(0x5)](![]);
dp[0x0] = !![];
for (var index = 0x5; index <= text[a0_0x1a26aa(0x4)]; index++) {
    if (dp[index - 0x5] === !![] && text[a0_0x1a26aa(0x6)](index - 0x5, index) === a0_0x1a26aa(0x7)) {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x7] === !![] && text['slice'](index - 0x7, index) === 'dreamer') {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x5] === !![] && text[a0_0x1a26aa(0x6)](index - 0x5, index) === a0_0x1a26aa(0x8)) {
        dp[index] = !![];
        continue;
    }
    if (dp[index - 0x6] === !![] && text[a0_0x1a26aa(0x6)](index - 0x6, index) === a0_0x1a26aa(0x9)) {
        dp[index] = !![];
        continue;
    }
}
console[a0_0x1a26aa(0xa)](dp[text['length']] ? a0_0x1a26aa(0xb) : 'NO');