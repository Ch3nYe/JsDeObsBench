var a0_0x5cb8db = a0_0x5a0d;
function Puzzle() {
    var _0x547f90 = a0_0x5a0d;
    var obj = {};
    var arrA = _0x547f90(0x0)[_0x547f90(0x1)](',');
    var arrB = _0x547f90(0x2)[_0x547f90(0x1)](',');
    var i, j, k, l, m;
    for (i = 0x0; i < 0x10; i++)
        for (j = 0x0; j < 0x10; j++)
            for (k = 0x0; k < 0x10; k++)
                for (l = 0x0; l < 0x10; l++)
                    for (m = 0x0; m < 0x9; m++) {
                        var str = arrA[i] + arrA[j] + arrA[k] + arrA[l] + arrB[m];
                        str = str[_0x547f90(0x1)]('')[_0x547f90(0x3)](Number)['sort'](function (a, b) {
                            return a - b;
                        })[_0x547f90(0x4)]('');
                        obj[str] = !![];
                    }
    return obj;
}
function a0_0x551c() {
    var _0x243450 = [
        '123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999',
        'split',
        '11,22,33,44,55,66,77,88,99',
        'map',
        'join',
        '/dev/stdin',
        'trim',
        'length',
        'shift',
        'push',
        'sort',
        'test',
        'hasOwnProperty',
        'log'
    ];
    a0_0x551c = function () {
        return _0x243450;
    };
    return a0_0x551c();
}
var P = Puzzle();
function a0_0x5a0d(trmCIz, key) {
    var stringArray = a0_0x551c();
    a0_0x5a0d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a0d(trmCIz, key);
}
var input = require('fs')['readFileSync'](a0_0x5cb8db(0x5), 'utf8');
var Arr = input[a0_0x5cb8db(0x6)]()[a0_0x5cb8db(0x1)]('\x0a');
while (!![]) {
    if (Arr[a0_0x5cb8db(0x7)] == 0x0)
        break;
    var str = Arr[a0_0x5cb8db(0x8)]();
    var ans = [];
    for (var i = 0x1; i <= 0x9; i++) {
        var arr = str[a0_0x5cb8db(0x1)]('')[a0_0x5cb8db(0x3)](Number);
        arr[a0_0x5cb8db(0x9)](i);
        arr[a0_0x5cb8db(0xa)](function (a, b) {
            return a - b;
        });
        var v = arr[a0_0x5cb8db(0x4)]('');
        if (/(.)\1\1\1\1/[a0_0x5cb8db(0xb)](v))
            continue;
        if (P[a0_0x5cb8db(0xc)](v))
            ans['push'](i);
    }
    console[a0_0x5cb8db(0xd)](ans[a0_0x5cb8db(0x7)] == 0x0 ? '0' : ans[a0_0x5cb8db(0x4)]('\x20'));
}