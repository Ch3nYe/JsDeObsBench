var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x0;
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    if (I != 0x0)
        console['log']('');
    I++;
    var rank = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var score = 0x3 * (arr[0x1] - 0x0) + (arr[0x3] - 0x0) + (0xa - i) * 0.01;
        rank['push']([
            arr[0x0],
            score
        ]);
    }
    rank['sort'](function (a, b) {
        var VeeqSR = {
            'mwUxw': function (x, y) {
                return x - y;
            }
        };
        a = a[0x1];
        b = b[0x1];
        return VeeqSR['mwUxw'](b, a);
    });
    rank['forEach'](function (v) {
        var NhGNKf = {
            'kkjXT': function (x, y) {
                return x + y;
            }
        };
        console['log'](NhGNKf['kkjXT'](v[0x0], ',') + Math['floor'](v[0x1]));
    });
}