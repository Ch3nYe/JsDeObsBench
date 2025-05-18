var a0_0x3af26a = a0_0xa542;
(function (stringArrayFunction, comparisonValue) {
    var _0x482df5 = a0_0xa542;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x482df5(0xc1)) / 0x1 + parseInt(_0x482df5(0xbb)) / 0x2 * (-parseInt(_0x482df5(0xb9)) / 0x3) + -parseInt(_0x482df5(0xbc)) / 0x4 * (parseInt(_0x482df5(0xb2)) / 0x5) + parseInt(_0x482df5(0xb7)) / 0x6 * (-parseInt(_0x482df5(0xc0)) / 0x7) + parseInt(_0x482df5(0xb5)) / 0x8 + parseInt(_0x482df5(0xb3)) / 0x9 * (parseInt(_0x482df5(0xbd)) / 0xa) + -parseInt(_0x482df5(0xc3)) / 0xb * (-parseInt(_0x482df5(0xc2)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3408, 0xd1797));
function bomb(y, x, cnt, f) {
    var _0x38adb9 = a0_0xa542;
    yx[y][x] = (_0x38adb9(0xb0) + cnt)[_0x38adb9(0xb8)](-0x3);
    if (y == n - 0x1 && x == n - 0x1)
        return;
    else if (y == n - 0x1 && f == -0x1)
        bomb(y, x + 0x1, cnt + 0x1, 0x1);
    else if (y == n - 0x1 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (x == n - 0x1 && f == 0x1)
        bomb(y + 0x1, x, cnt + 0x1, -0x1);
    else if (x == n - 0x1 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == 0x1)
        bomb(y, x + 0x1, cnt + 0x1, -0x1);
    else if (y == 0x0 && f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
    else if (x == 0x0 && f == -0x1)
        bomb(y + 0x1, x, cnt + 0x1, 0x1);
    else if (x == 0x0 && f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == 0x1)
        bomb(y - 0x1, x + 0x1, cnt + 0x1, 0x1);
    else if (f == -0x1)
        bomb(y + 0x1, x - 0x1, cnt + 0x1, -0x1);
}
var input = require('fs')['readFileSync'](a0_0x3af26a(0xbf), a0_0x3af26a(0xbe));
var Arr = input[a0_0x3af26a(0xae)]()[a0_0x3af26a(0xb1)]('\x0a');
var I = 0x1;
function a0_0x3408() {
    var _0x12bd44 = [
        '284193VgyYxX',
        'shift',
        '9914096slOLGC',
        'replace',
        '1876290zsrxsy',
        'slice',
        '3ijFkUn',
        'log',
        '3372216gVxlUp',
        '2195008grsxRs',
        '10wsKuNd',
        'utf8',
        '/dev/stdin',
        '21rgzpgd',
        '1429471NwTrNu',
        '12hsmvHW',
        '20673994IOBKXn',
        'join',
        'trim',
        'Case\x20',
        '\x20\x20\x20',
        'split',
        '10SrTEUu'
    ];
    a0_0x3408 = function () {
        return _0x12bd44;
    };
    return a0_0x3408();
}
function a0_0xa542(Sgfyyj, key) {
    var stringArray = a0_0x3408();
    a0_0xa542 = function (index, key) {
        index = index - 0xad;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa542(Sgfyyj, key);
}
while (!![]) {
    var n = Arr[a0_0x3af26a(0xb4)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = [];
        for (var j = 0x0; j < n; j++) {
            yx[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0, 0x1, 0x1);
    console[a0_0x3af26a(0xba)](a0_0x3af26a(0xaf) + I + ':');
    I++;
    console[a0_0x3af26a(0xba)](yx[a0_0x3af26a(0xad)]('\x0a')[a0_0x3af26a(0xb6)](/\,/g, ''));
}