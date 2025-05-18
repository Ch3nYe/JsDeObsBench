var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
    if (h == 0x0 && w == 0x0)
        break;
    var k = {};
    for (var i = 0x0; i < h; i++) {
        var r = arr['shift']()['split']('');
        for (var j = 0x0; j < w; j++) {
            k[r[j]] = [
                i,
                j
            ];
        }
    }
    var [s, sum, y, x] = [
        arr['shift']()['split'](''),
        0x0,
        0x0,
        0x0
    ];
    s['forEach'](v => {
        var sAHbzT = {
            'qsdCj': function (x, y) {
                return x + y;
            },
            'sEPaS': function (x, y) {
                return x - y;
            }
        };
        sum += sAHbzT['qsdCj'](Math['abs'](sAHbzT['sEPaS'](y, k[v][0x0])), Math['abs'](sAHbzT['sEPaS'](x, k[v][0x1]))) + 0x1;
        [y, x] = [
            k[v][0x0],
            k[v][0x1]
        ];
    });
    console['log'](sum);
}