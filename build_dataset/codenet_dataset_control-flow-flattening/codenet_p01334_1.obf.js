function bomb(y, x) {
    var ahhdDP = {
        'xDVFz': function (x, y) {
            return x + y;
        },
        'MAupZ': function (x, y) {
            return x + y;
        }
    };
    var Y = yx[y][x][0x1];
    var X = yx[y][x][0x0];
    if (ring['hasOwnProperty'](ahhdDP['xDVFz'](Y + ',', X))) {
        var flag = !![];
        for (var k in ring) {
            if (obj['hasOwnProperty'](k))
                flag = ![];
            obj[k] = !![];
        }
        if (flag)
            cnt++;
    } else {
        ring[ahhdDP['xDVFz'](ahhdDP['MAupZ'](Y, ','), X)] = !![];
        bomb(Y, X);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var tile = arr['shift']()['split']('\x20')['map'](Number);
        var t = [];
        for (var j = 0x0; j < n; j++)
            t[j] = [
                tile['shift'](),
                tile['shift']()
            ];
        yx['push'](t);
    }
    var obj = {};
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (obj['hasOwnProperty'](i + ',' + j))
                continue;
            var ring = {};
            ring[i + ',' + j] = !![];
            bomb(i, j);
        }
    }
    console['log'](cnt);
}