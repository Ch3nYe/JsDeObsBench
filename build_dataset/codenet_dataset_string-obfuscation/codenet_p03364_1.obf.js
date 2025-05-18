var a0_0x4ceca1 = a0_0x260d;
(function (stringArrayFunction, comparisonValue) {
    var _0x361ef8 = a0_0x260d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x361ef8(0x1a0)) / 0x1 * (-parseInt(_0x361ef8(0x1a6)) / 0x2) + parseInt(_0x361ef8(0x1a1)) / 0x3 * (parseInt(_0x361ef8(0x1b0)) / 0x4) + -parseInt(_0x361ef8(0x1aa)) / 0x5 + -parseInt(_0x361ef8(0x1a4)) / 0x6 + -parseInt(_0x361ef8(0x1ab)) / 0x7 + parseInt(_0x361ef8(0x1a2)) / 0x8 * (-parseInt(_0x361ef8(0x1a3)) / 0x9) + parseInt(_0x361ef8(0x1ae)) / 0xa * (parseInt(_0x361ef8(0x1ad)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x22e5, 0xf201c));
var lines = require('fs')[a0_0x4ceca1(0x1a5)](a0_0x4ceca1(0x1a7), a0_0x4ceca1(0x1ac))[a0_0x4ceca1(0x1a9)]('\x0a');
var n = lines[0x0] | 0x0;
function a0_0x260d(aFYrnV, key) {
    var stringArray = a0_0x22e5();
    a0_0x260d = function (index, key) {
        index = index - 0x1a0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x260d(aFYrnV, key);
}
var s = lines[a0_0x4ceca1(0x1af)](0x1);
function good(a, b) {
    for (var i = 0x0; i < n; ++i) {
        for (var j = 0x0; j < n; ++j) {
            if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n])
                return 0x0;
        }
    }
    return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
    for (var b = 0x0; b < n; ++b) {
        ans += good(a, b);
    }
}
function a0_0x22e5() {
    var _0x361c44 = [
        '/dev/stdin',
        'log',
        'split',
        '1772705yDNRzf',
        '10076283ZOagkG',
        'utf8',
        '169367XaMaNi',
        '4490ObczGC',
        'slice',
        '444GSYkDR',
        '19777hdtIUG',
        '26511gjLCBI',
        '8GaAoNe',
        '15686127cWagGj',
        '8685708wnytrC',
        'readFileSync',
        '194xiApMa'
    ];
    a0_0x22e5 = function () {
        return _0x361c44;
    };
    return a0_0x22e5();
}
console[a0_0x4ceca1(0x1a8)](ans);