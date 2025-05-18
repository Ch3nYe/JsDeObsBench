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
    s['forEach'](_0x5d9242 => {
        sum += Math['abs'](y - k[_0x5d9242][0x0]) + Math['abs'](x - k[_0x5d9242][0x1]) + 0x1;
        [y, x] = [
            k[_0x5d9242][0x0],
            k[_0x5d9242][0x1]
        ];
    });
    console['log'](sum);
}