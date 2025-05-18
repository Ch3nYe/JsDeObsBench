var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (arr[0x0] == '0\x200')
        break;
    var nm = arr['shift']()['split']('\x20')['map'](Number);
    var point = [];
    for (var i = 0x0; i < nm[0x0]; i++)
        point[i] = [
            0x0,
            0x0
        ];
    for (var i = 0x0; i < nm[0x1]; i++) {
        var c = arr['shift']()['split']('\x20')['map'](Number);
        var s = c['shift']();
        var k = c['shift']();
        if (k == 0x1)
            point[c[0x0] - 0x1][0x0] += s;
        c['forEach'](function (_0x2d08ab, _0x18d1ea) {
            point[_0x2d08ab - 0x1][0x1] += s;
        });
    }
    var max = 0x0;
    for (var i = 0x0; i < nm[0x0]; i++) {
        for (var j = 0x0; j < nm[0x0]; j++) {
            if (i == j)
                continue;
            max = Math['max'](max, point[i][0x1] - point[j][0x0]);
        }
    }
    console['log'](max + 0x1);
}