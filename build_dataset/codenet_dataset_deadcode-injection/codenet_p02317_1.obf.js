var a0_0x62ee5d = a0_0x2a02;
function a0_0x52f3() {
    var _0x2b2b0d = [
        'slice',
        'map',
        'UZkgF',
        'log',
        'length',
        'EnPyq',
        'gqIQt',
        'input',
        'RrUvF',
        'split',
        'qEzCH',
        'OztFF',
        'undefined',
        'value',
        '/dev/stdin',
        'toString'
    ];
    a0_0x52f3 = function () {
        return _0x2b2b0d;
    };
    return a0_0x52f3();
}
function main() {
    var _0x4cd750 = a0_0x2a02;
    var input = getInput();
    var ls = input['split']('\x0a');
    var n = parseInt(ls[0x0]);
    var nums = ls[_0x4cd750(0x0)](0x1, n + 0x1)[_0x4cd750(0x1)](function (s) {
        var _0x1483d9 = a0_0x2a02;
        if (_0x1483d9(0x2) !== _0x1483d9(0x2)) {
            var x = xs[i];
            table[search(table, x) + 0x1] = x;
        } else {
            return parseInt(s);
        }
    });
    console[_0x4cd750(0x3)](lis(nums));
}
function a0_0x2a02(BmSpCr, key) {
    var stringArray = a0_0x52f3();
    a0_0x2a02 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a02(BmSpCr, key);
}
function lis(xs) {
    var _0x5344e7 = a0_0x2a02;
    var table = [xs[0x0]];
    for (var i = 0x1; i < xs[_0x5344e7(0x4)]; i++) {
        if (_0x5344e7(0x5) !== _0x5344e7(0x6)) {
            var x = xs[i];
            table[search(table, x) + 0x1] = x;
        } else {
            return document['getElementById'](_0x5344e7(0x7))['value'];
        }
    }
    return table[_0x5344e7(0x4)];
}
function search(table, x) {
    var _0x38d696 = a0_0x2a02;
    var l = 0x0, h = table['length'];
    if (table['length'] == 0x0 || x <= table[0x0]) {
        if ('uZSVo' === _0x38d696(0x8)) {
            var input = getInput();
            var ls = input[_0x38d696(0x9)]('\x0a');
            var n = parseInt(ls[0x0]);
            var nums = ls[_0x38d696(0x0)](0x1, n + 0x1)[_0x38d696(0x1)](function (s) {
                return parseInt(s);
            });
            console['log'](lis(nums));
        } else {
            return -0x1;
        }
    }
    while (l + 0x1 < h) {
        var pivot = (l + h + 0x1) / 0x2;
        if (table[pivot] < x) {
            if (_0x38d696(0xa) === _0x38d696(0xb)) {
                l = pivot;
            } else {
                l = pivot;
            }
        } else {
            h = pivot;
        }
    }
    return l;
}
nodeJS = typeof require != a0_0x62ee5d(0xc);
function getInput() {
    var _0x19c6e4 = a0_0x2a02;
    if (!nodeJS) {
        return document['getElementById'](_0x19c6e4(0x7))[_0x19c6e4(0xd)];
    }
    return require('fs')['readFileSync'](_0x19c6e4(0xe))[_0x19c6e4(0xf)]();
}
if (nodeJS) {
    main();
}