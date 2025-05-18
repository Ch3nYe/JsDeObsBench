var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var data = [];
var N;
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    if (arr['length'] == 0x1) {
        if (i == 0x0) {
            N = arr[0x0];
            continue;
        }
        var DATA = [];
        for (var j = 0x0; j < N + 0x1; j++) {
            DATA['push'](0x0);
        }
        for (var k = 0x0; k < N; k++) {
            var v = data[k];
            for (var l = 0x0; l < N + 0x1; l++) {
                DATA[l] += v[l];
            }
            v = v['map'](function (_0x5f52f3) {
                return ('\x20\x20\x20\x20\x20' + _0x5f52f3)['slice'](-0x5);
            });
            console['log'](v['join'](''));
        }
        DATA = DATA['map'](function (_0x1e15ab) {
            return ('\x20\x20\x20\x20\x20' + _0x1e15ab)['slice'](-0x5);
        });
        console['log'](DATA['join'](''));
        if (arr[0x0] == 0x0)
            break;
        data = [];
        N = arr[0x0];
    } else {
        var sum = arr['reduce'](function (_0x13597c, _0x5bb5ce) {
            return _0x13597c + _0x5bb5ce;
        });
        arr['push'](sum);
        data['push'](arr);
    }
}