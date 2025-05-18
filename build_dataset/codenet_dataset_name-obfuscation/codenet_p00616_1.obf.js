var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nh = arr['shift']();
    if (nh == '0\x200')
        break;
    nh = nh['split']('\x20')['map'](Number);
    var n = nh[0x0];
    var h = nh[0x1];
    var xyz = [];
    for (var i = 0x0; i < n; i++) {
        xyz[i] = [];
        for (var j = 0x0; j < n; j++) {
            xyz[i][j] = [];
            for (var k = 0x0; k < n; k++) {
                xyz[i][j][k] = 0x0;
            }
        }
    }
    for (var I = 0x0; I < h; I++) {
        var ary = arr['shift']()['split']('\x20');
        var c = ary['shift']();
        ary = ary['map'](function (_0x4e3998) {
            return _0x4e3998 - 0x1;
        });
        if (c == 'xy') {
            for (var i = 0x0; i < n; i++)
                xyz[ary[0x0]][ary[0x1]][i] = 0x1;
        } else if (c == 'xz') {
            for (var i = 0x0; i < n; i++)
                xyz[ary[0x0]][i][ary[0x1]] = 0x1;
        } else if (c == 'yz') {
            for (var i = 0x0; i < n; i++)
                xyz[i][ary[0x0]][ary[0x1]] = 0x1;
        }
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            for (var k = 0x0; k < n; k++) {
                if (xyz[i][j][k] == 0x0)
                    cnt++;
                ;
            }
        }
    }
    console['log'](cnt);
}