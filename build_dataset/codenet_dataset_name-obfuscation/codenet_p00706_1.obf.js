var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var wh = arr['shift']()['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    var XY = [];
    for (var i = 0x0; i < w; i++) {
        XY[i] = [];
        for (var j = 0x0; j < h; j++) {
            XY[i][j] = 0x0;
        }
    }
    while (n--) {
        var xy = arr['shift']()['split']('\x20')['map'](Number);
        XY[xy[0x0] - 0x1][xy[0x1] - 0x1] = 0x1;
    }
    var st = arr['shift']()['split']('\x20')['map'](Number);
    var s = st[0x0];
    var t = st[0x1];
    var max = 0x0;
    for (var i = 0x0; i <= w - s; i++) {
        for (var j = 0x0; j <= h - t; j++) {
            var sum = 0x0;
            for (var x = 0x0; x < s; x++) {
                for (var y = 0x0; y < t; y++) {
                    sum += XY[i + x][j + y];
                }
            }
            max = Math['max'](sum, max);
        }
    }
    console['log'](max);
}