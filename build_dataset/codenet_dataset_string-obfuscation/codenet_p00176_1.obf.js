var a0_0x2687ac = a0_0x2fc6;
function a0_0x2fc6(NujtYL, key) {
    var stringArray = a0_0x469d();
    a0_0x2fc6 = function (index, key) {
        index = index - 0xd5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fc6(NujtYL, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x187cc2 = a0_0x2fc6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x187cc2(0xe2)) / 0x1 * (parseInt(_0x187cc2(0xd7)) / 0x2) + -parseInt(_0x187cc2(0xdd)) / 0x3 * (parseInt(_0x187cc2(0xe9)) / 0x4) + -parseInt(_0x187cc2(0xe5)) / 0x5 + parseInt(_0x187cc2(0xda)) / 0x6 * (parseInt(_0x187cc2(0xea)) / 0x7) + -parseInt(_0x187cc2(0xd6)) / 0x8 + -parseInt(_0x187cc2(0xe6)) / 0x9 + parseInt(_0x187cc2(0xe3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x469d, 0xdfdad));
function a0_0x469d() {
    var _0x544363 = [
        'readFileSync',
        '88167nQycfQ',
        '27865860ituiBl',
        'trim',
        '8408790oLdjSN',
        '7136964tMlgdE',
        'utf8',
        'white',
        '76mtBMEZ',
        '56ulJRQX',
        'substr',
        'red',
        '208928ArqORL',
        '28OLPiKx',
        'fuchsia',
        'length',
        '861078eQQHAF',
        'lime',
        'blue',
        '276513hJLQnL',
        'pow',
        'split',
        'log'
    ];
    a0_0x469d = function () {
        return _0x544363;
    };
    return a0_0x469d();
}
(function (input) {
    var _0x1264e4 = a0_0x2fc6;
    var lines = input[_0x1264e4(0xdf)]('\x0a');
    var colors = [
        [
            'black',
            0x0,
            0x0,
            0x0
        ],
        [
            _0x1264e4(0xdc),
            0x0,
            0x0,
            0xff
        ],
        [
            _0x1264e4(0xdb),
            0x0,
            0xff,
            0x0
        ],
        [
            'aqua',
            0x0,
            0xff,
            0x0
        ],
        [
            _0x1264e4(0xd5),
            0xff,
            0x0,
            0x0
        ],
        [
            _0x1264e4(0xd8),
            0xff,
            0x0,
            0xff
        ],
        [
            'yellow',
            0xff,
            0xff,
            0x0
        ],
        [
            _0x1264e4(0xe8),
            0xff,
            0xff,
            0xff
        ]
    ];
    for (var i = 0x0; i < lines[_0x1264e4(0xd9)]; ++i) {
        if (lines[i][0x0] === '#') {
            var best_color;
            var min_d = 0x3 * 0x100 * 0x100 + 0x1;
            var r = parseInt(lines[i]['substr'](0x1, 0x2), 0x10);
            var g = parseInt(lines[i][_0x1264e4(0xeb)](0x3, 0x2), 0x10);
            var b = parseInt(lines[i][_0x1264e4(0xeb)](0x5, 0x2), 0x10);
            for (var j = 0x0; j < colors['length']; ++j) {
                var d = Math[_0x1264e4(0xde)](r - colors[j][0x1], 0x2) + Math['pow'](g - colors[j][0x2], 0x2) + Math[_0x1264e4(0xde)](b - colors[j][0x3], 0x2);
                if (d < min_d) {
                    min_d = d;
                    best_color = colors[j][0x0];
                }
            }
            console[_0x1264e4(0xe0)](best_color);
        }
    }
}(require('fs')[a0_0x2687ac(0xe1)]('/dev/stdin', a0_0x2687ac(0xe7))[a0_0x2687ac(0xe4)]()));