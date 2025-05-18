var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
Arr['forEach'](function (v) {
    var GGMhtj = {
        'iIUQI': function (x, y) {
            return x == y;
        },
        'gVYon': function (x, y) {
            return x % y;
        },
        'rJxHs': function (x, y) {
            return x * y;
        },
        'jxLWS': function (x, y) {
            return x - y;
        },
        'pAvWt': function (x, y) {
            return x / y;
        },
        'tENUI': function (x, y) {
            return x - y;
        }
    };
    var arr = [
        0x0,
        v
    ];
    for (var i = 0x2; i <= 0xa; i++) {
        arr[i] = GGMhtj['iIUQI'](GGMhtj['gVYon'](i, 0x2), 0x0) ? GGMhtj['rJxHs'](arr[GGMhtj['jxLWS'](i, 0x1)], 0x2) : GGMhtj['pAvWt'](arr[GGMhtj['tENUI'](i, 0x1)], 0x3);
    }
    var sum = arr['reduce'](function (a, b) {
        return a + b;
    });
    console['log'](sum['toFixed'](0x8));
});