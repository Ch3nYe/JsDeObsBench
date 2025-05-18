'use strict';
function a0_0x4f59() {
    var _0x20ec83 = [
        '23722480wevsFJ',
        '141SXuumP',
        '8KaXCAe',
        'toFixed',
        '3270270PkguOa',
        '748584uemLKm',
        '206yqpHRa',
        'length',
        'utf8',
        'pow',
        '1099071XeMkcJ',
        'join',
        '/dev/stdin',
        'split',
        'map',
        'reduce',
        'toString',
        '50900FqoBxv',
        '407043YkIDLY',
        '2269RfTFnp'
    ];
    a0_0x4f59 = function () {
        return _0x20ec83;
    };
    return a0_0x4f59();
}
function a0_0x1b70(WemyHm, key) {
    var stringArray = a0_0x4f59();
    a0_0x1b70 = function (index, key) {
        index = index - 0x113;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b70(WemyHm, key);
}
var a0_0x1d9e45 = a0_0x1b70;
(function (stringArrayFunction, comparisonValue) {
    var _0x28286e = a0_0x1b70;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x28286e(0x11b)) / 0x1 * (parseInt(_0x28286e(0x122)) / 0x2) + -parseInt(_0x28286e(0x11d)) / 0x3 * (parseInt(_0x28286e(0x119)) / 0x4) + -parseInt(_0x28286e(0x120)) / 0x5 + -parseInt(_0x28286e(0x121)) / 0x6 + parseInt(_0x28286e(0x11a)) / 0x7 + parseInt(_0x28286e(0x11e)) / 0x8 * (-parseInt(_0x28286e(0x126)) / 0x9) + parseInt(_0x28286e(0x11c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f59, 0xaa54e));
(function (stdin) {
    var _0x59cc2f = a0_0x1b70;
    var lines = stdin[_0x59cc2f(0x118)]();
    var re = /\w+\n[\w\s]*?\n/g;
    var result = function (data) {
        var _0x5bd115 = _0x59cc2f;
        return data[_0x5bd115(0x116)](stdev)[_0x5bd115(0x113)]('\x0a');
        function stdev(scores) {
            var _0x22def0 = _0x5bd115;
            var count = scores[_0x22def0(0x123)];
            var mean = scores[_0x22def0(0x117)](sum) / count;
            return Math['sqrt'](scores[_0x22def0(0x116)](function (v) {
                var _0x474b23 = _0x22def0;
                return Math[_0x474b23(0x125)](v - mean, 0x2);
            })[_0x22def0(0x117)](sum) / count)[_0x22def0(0x11f)](0x8);
        }
        function sum(a, b) {
            return a + b;
        }
    }(lines['match'](re)['map'](function (v) {
        var _0xf9442 = _0x59cc2f;
        return v[_0xf9442(0x115)]('\x0a')[0x1][_0xf9442(0x115)]('\x20')['slice'](0x0, v[_0xf9442(0x115)]('\x0a')[0x0])[_0xf9442(0x116)](Number);
    }));
    console['log'](result);
}(require('fs')['readFileSync'](a0_0x1d9e45(0x114), a0_0x1d9e45(0x124))));