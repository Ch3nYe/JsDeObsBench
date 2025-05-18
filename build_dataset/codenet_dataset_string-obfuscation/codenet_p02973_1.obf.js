function a0_0x369d(fgDQwd, key) {
    var stringArray = a0_0x35f8();
    a0_0x369d = function (index, key) {
        index = index - 0x116;
        var value = stringArray[index];
        return value;
    };
    return a0_0x369d(fgDQwd, key);
}
function a0_0x35f8() {
    var _0x12f5fa = [
        '3564664etmtQF',
        'readFileSync',
        '5870940RJhFvk',
        'push',
        'length',
        '/dev/stdin',
        'pop',
        '262122HkQvEX',
        'split',
        '12wDFgIk',
        '102FoENyM',
        'unshift',
        '126pIyJXc',
        'log',
        '418195ktqObm',
        'utf8',
        '68751ZPZOHg',
        '6544953kFzAuy',
        '9645lrCEpz'
    ];
    a0_0x35f8 = function () {
        return _0x12f5fa;
    };
    return a0_0x35f8();
}
var a0_0x1dedca = a0_0x369d;
(function (stringArrayFunction, comparisonValue) {
    var _0x5a43f2 = a0_0x369d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5a43f2(0x11b)) / 0x1 + -parseInt(_0x5a43f2(0x117)) / 0x2 * (-parseInt(_0x5a43f2(0x11d)) / 0x3) + parseInt(_0x5a43f2(0x116)) / 0x4 * (parseInt(_0x5a43f2(0x11f)) / 0x5) + parseInt(_0x5a43f2(0x119)) / 0x6 * (parseInt(_0x5a43f2(0x127)) / 0x7) + parseInt(_0x5a43f2(0x120)) / 0x8 + -parseInt(_0x5a43f2(0x11e)) / 0x9 + -parseInt(_0x5a43f2(0x122)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x35f8, 0xa48cd));
function Main(input) {
    var _0x36523d = a0_0x369d;
    input = input[_0x36523d(0x128)]('\x0a');
    if (input[input[_0x36523d(0x124)] - 0x1] === '') {
        input[_0x36523d(0x126)]();
    }
    const N = input[0x0] - 0x0;
    var colors = [];
    var temp;
    var min, max, mid;
    for (var i = 0x1; i < input[_0x36523d(0x124)]; i++) {
        temp = input[i] - 0x0;
        if (colors['length'] === 0x0) {
            colors[_0x36523d(0x123)](temp);
            continue;
        }
        if (temp <= colors[0x0]) {
            colors[_0x36523d(0x118)](temp);
            continue;
        }
        if (temp > colors[colors['length'] - 0x1]) {
            colors[colors[_0x36523d(0x124)] - 0x1] = temp;
            continue;
        }
        min = 0x0;
        max = colors[_0x36523d(0x124)] - 0x1;
        while (max - min > 0x1) {
            mid = Math['floor']((max + min) / 0x2);
            if (colors[mid] <= temp) {
                max = mid;
            } else {
                min = mid;
            }
        }
        colors[min] = temp;
    }
    console[_0x36523d(0x11a)](colors[_0x36523d(0x124)]);
}
Main(require('fs')[a0_0x1dedca(0x121)](a0_0x1dedca(0x125), a0_0x1dedca(0x11c)));