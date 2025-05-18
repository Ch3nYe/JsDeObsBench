var a0_0x5e5f25 = a0_0x2e98;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x5e5f25(0x0));
function a0_0x273a() {
    var _0x33bb0d = [
        'utf8',
        'trim',
        'shift',
        '0\x200',
        'split',
        'map',
        'log'
    ];
    a0_0x273a = function () {
        return _0x33bb0d;
    };
    return a0_0x273a();
}
function a0_0x2e98(kDIpQp, key) {
    var stringArray = a0_0x273a();
    a0_0x2e98 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e98(kDIpQp, key);
}
var arr = input[a0_0x5e5f25(0x1)]()['split']('\x0a');
while (!![]) {
    var nh = arr[a0_0x5e5f25(0x2)]();
    if (nh == a0_0x5e5f25(0x3))
        break;
    nh = nh[a0_0x5e5f25(0x4)]('\x20')[a0_0x5e5f25(0x5)](Number);
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
        var ary = arr['shift']()[a0_0x5e5f25(0x4)]('\x20');
        var c = ary[a0_0x5e5f25(0x2)]();
        ary = ary[a0_0x5e5f25(0x5)](function (v) {
            return v - 0x1;
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
    console[a0_0x5e5f25(0x6)](cnt);
}