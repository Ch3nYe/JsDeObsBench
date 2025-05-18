var a0_0x1a5f6a = a0_0x1df4;
function a0_0x4115() {
    var _0x535c75 = [
        'push',
        'split',
        '2345049sAMCwY',
        'readFileSync',
        'length',
        '9251fUgvaB',
        '150luKIBo',
        '2565207jSyPwo',
        '252752EuqaIS',
        '37430dYkgfi',
        '24dXXBcq',
        'trim',
        'utf8',
        '2169032PECxtt',
        '138590YglXLD',
        'log',
        '4fHsKhY',
        '3425910btVpYL'
    ];
    a0_0x4115 = function () {
        return _0x535c75;
    };
    return a0_0x4115();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x585e24 = a0_0x1df4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x585e24(0x148)) / 0x1 * (parseInt(_0x585e24(0x152)) / 0x2) + -parseInt(_0x585e24(0x149)) / 0x3 + -parseInt(_0x585e24(0x145)) / 0x4 + -parseInt(_0x585e24(0x146)) / 0x5 * (parseInt(_0x585e24(0x150)) / 0x6) + -parseInt(_0x585e24(0x14c)) / 0x7 + -parseInt(_0x585e24(0x142)) / 0x8 * (-parseInt(_0x585e24(0x151)) / 0x9) + parseInt(_0x585e24(0x153)) / 0xa * (parseInt(_0x585e24(0x14f)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4115, 0xbfb5b));
function a0_0x1df4(liVgok, key) {
    var stringArray = a0_0x4115();
    a0_0x1df4 = function (index, key) {
        index = index - 0x142;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1df4(liVgok, key);
}
function bomb(y, x) {
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= 0xc || xx < 0x0 || xx >= 0xc)
            continue;
        if (yx[yy][xx] == 'a') {
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')[a0_0x1a5f6a(0x14d)]('/dev/stdin', a0_0x1a5f6a(0x144));
var Arr = input[a0_0x1a5f6a(0x143)]()['split']('\x0a');
var n = 0x0;
var cnt = 0x0;
var yx = [];
for (var I = 0x0; I < Arr[a0_0x1a5f6a(0x14e)]; I++) {
    n++;
    var v = Arr[I]['replace'](/1/g, 'a');
    var arr = v[a0_0x1a5f6a(0x14b)]('');
    yx[a0_0x1a5f6a(0x14a)](arr);
    if (n != 0xc)
        continue;
    cnt = 0x0;
    for (var i = 0x0; i < 0xc; i++) {
        for (var j = 0x0; j < 0xc; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console[a0_0x1a5f6a(0x147)](cnt);
    n = 0x0;
    yx = [];
    I++;
}