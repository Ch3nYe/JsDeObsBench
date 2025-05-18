function Puzzle() {
    var zBVFnM = {
        'aNuim': function (x, y) {
            return x - y;
        },
        'WKHbl': '123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999',
        'MqlZH': '11,22,33,44,55,66,77,88,99',
        'jJxxb': function (x, y) {
            return x < y;
        },
        'beLZV': function (x, y) {
            return x < y;
        },
        'wlivZ': function (x, y) {
            return x + y;
        }
    };
    var obj = {};
    var arrA = zBVFnM['WKHbl']['split'](',');
    var arrB = zBVFnM['MqlZH']['split'](',');
    var i, j, k, l, m;
    for (i = 0x0; i < 0x10; i++)
        for (j = 0x0; zBVFnM['jJxxb'](j, 0x10); j++)
            for (k = 0x0; zBVFnM['beLZV'](k, 0x10); k++)
                for (l = 0x0; l < 0x10; l++)
                    for (m = 0x0; zBVFnM['beLZV'](m, 0x9); m++) {
                        var str = zBVFnM['wlivZ'](zBVFnM['wlivZ'](zBVFnM['wlivZ'](arrA[i], arrA[j]), arrA[k]) + arrA[l], arrB[m]);
                        str = str['split']('')['map'](Number)['sort'](function (a, b) {
                            return zBVFnM['aNuim'](a, b);
                        })['join']('');
                        obj[str] = !![];
                    }
    return obj;
}
var P = Puzzle();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var str = Arr['shift']();
    var ans = [];
    for (var i = 0x1; i <= 0x9; i++) {
        var arr = str['split']('')['map'](Number);
        arr['push'](i);
        arr['sort'](function (a, b) {
            return a - b;
        });
        var v = arr['join']('');
        if (/(.)\1\1\1\1/['test'](v))
            continue;
        if (P['hasOwnProperty'](v))
            ans['push'](i);
    }
    console['log'](ans['length'] == 0x0 ? '0' : ans['join']('\x20'));
}