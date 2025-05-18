var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var pqan = arr['shift']()['split']('\x20')['map'](Number);
    if (pqan['join']('\x20') == '0\x200\x200\x200')
        break;
    var p = pqan[0x0];
    var q = pqan[0x1];
    var a = pqan[0x2];
    var n = pqan[0x3];
    var ans = 0x0;
    var loop = function (start, P, Q, A, cnt) {
        var nztomC = {
            'UqrOZ': function (x, y) {
                return x * y;
            },
            'blaqm': function (x, y) {
                return x < y;
            },
            'ufSpp': function (x, y) {
                return x <= y;
            },
            'jWdTI': function (callee, param1, param2, param3, param4, param5) {
                return callee(param1, param2, param3, param4, param5);
            },
            'mXqmA': function (x, y) {
                return x + y;
            },
            'pYCYp': function (x, y) {
                return x * y;
            },
            'qhSCw': function (x, y) {
                return x + y;
            }
        };
        if (cnt > 0x0) {
            if (cnt > n)
                return;
            if (p * Q == nztomC['UqrOZ'](P, q)) {
                ans++;
                return;
            } else if (nztomC['blaqm'](nztomC['UqrOZ'](p, Q), nztomC['UqrOZ'](P, q)))
                return;
        }
        for (var i = start; nztomC['ufSpp'](nztomC['UqrOZ'](A, i), a); i++) {
            nztomC['jWdTI'](loop, i, nztomC['mXqmA'](nztomC['pYCYp'](0x1, Q), nztomC['UqrOZ'](i, P)), nztomC['UqrOZ'](Q, i), nztomC['pYCYp'](A, i), nztomC['qhSCw'](cnt, 0x1));
        }
    };
    loop(0x1, 0x0, 0x1, 0x1, 0x0);
    console['log'](ans);
}