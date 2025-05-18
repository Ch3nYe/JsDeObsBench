var a0_0x4ff44f = a0_0x5b87;
(function (stringArrayFunction, comparisonValue) {
    var _0x382559 = a0_0x5b87;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x382559(0x1e3)) / 0x1 * (-parseInt(_0x382559(0x1d8)) / 0x2) + parseInt(_0x382559(0x1e4)) / 0x3 + parseInt(_0x382559(0x1dd)) / 0x4 + parseInt(_0x382559(0x1de)) / 0x5 + parseInt(_0x382559(0x1d4)) / 0x6 * (-parseInt(_0x382559(0x1e0)) / 0x7) + parseInt(_0x382559(0x1d9)) / 0x8 * (parseInt(_0x382559(0x1dc)) / 0x9) + -parseInt(_0x382559(0x1da)) / 0xa * (parseInt(_0x382559(0x1db)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f4b, 0xb7305));
function a0_0x3f4b() {
    var _0x48109d = [
        'max',
        '49sqAWDq',
        '4042347wvGApE',
        'split',
        'utf8',
        '79962zwNAIg',
        'readFileSync',
        'log',
        '/dev/stdin',
        '53262JQicmU',
        '109656dEwrvN',
        '170fNFtWj',
        '755513HMlkBN',
        '729bzhVlz',
        '1308328ELPzth',
        '2323635IJKXdg',
        'trim',
        '14iACzDA',
        'shift'
    ];
    a0_0x3f4b = function () {
        return _0x48109d;
    };
    return a0_0x3f4b();
}
function count(y, x) {
    var _0x1403fd = a0_0x5b87;
    var dy = [
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    var max = 0x1;
    for (var i = 0x0; i < 0x4; i++) {
        var cnt = 0x1;
        for (var j = 0x1; j <= n; j++) {
            var yy = y + dy[i] * j;
            var xx = x + dx[i] * j;
            if (yy < 0x0 || xx < 0x0 || yy >= n || xx >= n)
                break;
            if (yx[yy][xx] != 0x1)
                break;
            cnt++;
        }
        max = Math[_0x1403fd(0x1e2)](max, cnt);
        cnt = 0x1;
    }
    return max;
}
var input = require('fs')[a0_0x4ff44f(0x1d5)](a0_0x4ff44f(0x1d7), a0_0x4ff44f(0x1e6));
var Arr = input[a0_0x4ff44f(0x1df)]()[a0_0x4ff44f(0x1e5)]('\x0a');
function a0_0x5b87(SIrLqe, key) {
    var stringArray = a0_0x3f4b();
    a0_0x5b87 = function (index, key) {
        index = index - 0x1d4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b87(SIrLqe, key);
}
while (!![]) {
    var n = Arr[a0_0x4ff44f(0x1e1)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = Arr['shift']()[a0_0x4ff44f(0x1e5)]('')['map'](Number);
    }
    var max = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (yx[i][j] == 0x1)
                max = Math['max'](max, count(i, j));
        }
    }
    console[a0_0x4ff44f(0x1d6)](max);
}