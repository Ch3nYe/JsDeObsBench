var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
    arr['shift']()['split']('')['forEach']((v, j) => {
        var EXTtod = {
            'vRaXC': function (x, y) {
                return x == y;
            }
        };
        if (EXTtod['vRaXC'](v, 'B'))
            b['push']([
                i,
                j
            ]);
    });
}
var max = 0x0;
for (var i = 0x0; i < b['length']; i++) {
    for (var j = i + 0x1; j < b['length']; j++) {
        var d = Math['abs'](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
        max = Math['max'](max, d);
    }
}
console['log'](max);