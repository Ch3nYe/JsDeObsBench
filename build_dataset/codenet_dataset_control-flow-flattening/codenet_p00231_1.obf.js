var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var plus = {};
    var minus = {};
    var pm = [];
    for (var i = 0x0; i < N; i++) {
        var EBxSOc = '2|4|3|6|5|1|0|7'['split']('|');
        var DTvbvA = 0x0;
        while (!![]) {
            switch (EBxSOc[DTvbvA++]) {
            case '0':
                pm['push'](a);
                continue;
            case '1':
                minus[b] = m;
                continue;
            case '2':
                var arr = Arr['shift']()['split']('\x20')['map'](Number);
                continue;
            case '3':
                var a = arr[0x1];
                continue;
            case '4':
                var m = arr[0x0];
                continue;
            case '5':
                plus[a] = m;
                continue;
            case '6':
                var b = arr[0x2] - 0.001 * N;
                continue;
            case '7':
                pm['push'](b);
                continue;
            }
            break;
        }
    }
    pm['sort'](function (a, b) {
        var GuzOxP = {
            'AEtZj': function (x, y) {
                return x - y;
            }
        };
        return GuzOxP['AEtZj'](a, b);
    });
    var flag = 'OK';
    var sum = 0x0;
    for (var i = 0x0; i < pm['length']; i++) {
        var v = pm[i];
        if (plus['hasOwnProperty'](v))
            sum += plus[v];
        if (minus['hasOwnProperty'](v))
            sum -= minus[v];
        if (sum > 0x96) {
            flag = 'NG';
            break;
        }
    }
    console['log'](flag);
}