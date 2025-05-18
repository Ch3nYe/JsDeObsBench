var a0_0x4bfeed = a0_0x4387;
(function (stringArrayFunction, comparisonValue) {
    var _0x15c318 = a0_0x4387;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x15c318(0x1ef)) / 0x1 + -parseInt(_0x15c318(0x1f1)) / 0x2 + parseInt(_0x15c318(0x1f3)) / 0x3 * (-parseInt(_0x15c318(0x1ec)) / 0x4) + -parseInt(_0x15c318(0x1f6)) / 0x5 * (-parseInt(_0x15c318(0x1f4)) / 0x6) + -parseInt(_0x15c318(0x1e9)) / 0x7 + parseInt(_0x15c318(0x1f0)) / 0x8 * (-parseInt(_0x15c318(0x1eb)) / 0x9) + parseInt(_0x15c318(0x1f7)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1597, 0x28c3a));
function Main(s) {
    var _0xe80d80 = a0_0x4387;
    s = s[_0xe80d80(0x1f2)]('\x20')[_0xe80d80(0x1ed)](a => +a);
    var n = s[0x0];
    var a = calc(s[0x1]);
    var b = calc(s[0x2]);
    var ans = [];
    var k = 0x0;
    for (var i = 0x0; i < 0x2 * n; i++)
        for (var j = 0x0; j < 0x2 * n; j++) {
            if (f(a, i, j) && f(b, i, j))
                ans[k++] = i + '\x20' + j;
            if (k === n * n) {
                console['log'](ans['join']('\x0a'));
                return;
            }
        }
}
function a0_0x4387(QVXZYw, key) {
    var stringArray = a0_0x1597();
    a0_0x4387 = function (index, key) {
        index = index - 0x1e9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4387(QVXZYw, key);
}
function a0_0x1597() {
    var _0x3a147d = [
        '5yxnpes',
        '3169980HztnPK',
        '58107FKjnVp',
        'readFileSync',
        '483453AYuFpZ',
        '2348GaFULy',
        'map',
        '/dev/stdin',
        '84316SosWxW',
        '8oeyUml',
        '122504OgmRge',
        'split',
        '363QcaTsV',
        '771510nRRlFT',
        'floor'
    ];
    a0_0x1597 = function () {
        return _0x3a147d;
    };
    return a0_0x1597();
}
function calc(n) {
    var s = 0x1;
    while ((n & 0x3) === 0x0) {
        s++;
        n >>>= 0x2;
    }
    return [
        s,
        n & 0x1
    ];
}
function f(s, y, x) {
    var _0x5c8bb3 = a0_0x4387;
    y = Math[_0x5c8bb3(0x1f5)](y / s[0x0]);
    if (!s[0x1])
        return !(y & 0x1);
    x = Math[_0x5c8bb3(0x1f5)](x / s[0x0]);
    return !(x + y & 0x1);
}
Main(require('fs')[a0_0x4bfeed(0x1ea)](a0_0x4bfeed(0x1ee), 'utf8'));