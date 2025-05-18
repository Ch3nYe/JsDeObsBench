function a0_0x1a9e(rfXApk, key) {
    var stringArray = a0_0x8e6e();
    a0_0x1a9e = function (index, key) {
        index = index - 0xcf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a9e(rfXApk, key);
}
var a0_0x30bb4b = a0_0x1a9e;
function a0_0x8e6e() {
    var _0x4ecaf8 = [
        'split',
        'trim',
        '3882393RNjOqg',
        'map',
        '61836UVnPdk',
        '21616727ohARfA',
        'log',
        'readFileSync',
        '545ojqlzD',
        '128CDXvTS',
        'utf8',
        '/dev/stdin',
        'sort',
        '11410430yaQVYv',
        '2750328whiGXc',
        '18022ZMrltu',
        'splice',
        '4DvrDUw',
        '2851896vWqyjq',
        '8kinrAj'
    ];
    a0_0x8e6e = function () {
        return _0x4ecaf8;
    };
    return a0_0x8e6e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2f373d = a0_0x1a9e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2f373d(0xd8)) / 0x1 * (-parseInt(_0x2f373d(0xd2)) / 0x2) + -parseInt(_0x2f373d(0xdb)) / 0x3 * (-parseInt(_0x2f373d(0xda)) / 0x4) + parseInt(_0x2f373d(0xd1)) / 0x5 * (parseInt(_0x2f373d(0xe1)) / 0x6) + parseInt(_0x2f373d(0xd7)) / 0x7 + parseInt(_0x2f373d(0xdc)) / 0x8 * (parseInt(_0x2f373d(0xdf)) / 0x9) + parseInt(_0x2f373d(0xd6)) / 0xa + -parseInt(_0x2f373d(0xe2)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8e6e, 0xe0ca9));
function Main(s) {
    var _0x5e7450 = a0_0x1a9e;
    s = s[_0x5e7450(0xdd)]('\x0a');
    var n = parseInt(s[0x0]);
    var a = Array(n);
    var c = Array(n);
    for (var i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1][_0x5e7450(0xdd)]('\x20')[_0x5e7450(0xe0)](a => parseInt(a));
    }
    for (var i = 0x0; i < n; i++) {
        c[i] = s[i + n + 0x1][_0x5e7450(0xdd)]('\x20')[_0x5e7450(0xe0)](a => parseInt(a));
    }
    a = a[_0x5e7450(0xd5)]((a, b) => a[0x1] - b[0x1]);
    a = a[_0x5e7450(0xd5)]((a, b) => a[0x0] - b[0x0]);
    c = c[_0x5e7450(0xd5)]((a, b) => a[0x0] - b[0x0]);
    c = c[_0x5e7450(0xd5)]((a, b) => b[0x1] - a[0x1]);
    var ans = 0x0;
    for (i = n - 0x1; i >= 0x0; i--) {
        for (var j = c['length'] - 0x1; j >= 0x0; j--) {
            if (a[i][0x0] < c[j][0x0] && a[i][0x1] < c[j][0x1]) {
                ans++;
                c[_0x5e7450(0xd9)](j, 0x1);
                break;
            }
        }
    }
    console[_0x5e7450(0xcf)](ans);
}
Main(require('fs')[a0_0x30bb4b(0xd0)](a0_0x30bb4b(0xd4), a0_0x30bb4b(0xd3))[a0_0x30bb4b(0xde)]());