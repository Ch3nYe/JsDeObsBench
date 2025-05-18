function bomb(x, y, z) {
    var kYTGUK = {
        'YQlxV': function (x, y) {
            return x <= y;
        },
        'GpxzD': function (x, y) {
            return x + y;
        },
        'JljXk': function (x, y) {
            return x * y;
        },
        'FfHth': function (x, y) {
            return x + y;
        },
        'UPHdR': function (x, y) {
            return x * y;
        },
        'KHrBE': function (x, y) {
            return x < y;
        },
        'DSvgI': function (x, y) {
            return x + y;
        },
        'znIIF': function (x, y) {
            return x >= y;
        },
        'uHedR': function (x, y) {
            return x + y;
        }
    };
    max = Math['max'](max, z);
    if (max == n)
        return;
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x1,
        0x0,
        0x1
    ];
    var dy = [
        -0x2,
        -0x2,
        -0x2,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x2,
        0x2,
        0x2
    ];
    var Safe = {};
    for (var i = -0x1; kYTGUK['YQlxV'](i, 0x1); i++) {
        for (var j = -0x1; kYTGUK['YQlxV'](j, 0x1); j++) {
            Safe[kYTGUK['GpxzD'](kYTGUK['GpxzD'](water[kYTGUK['JljXk'](z, 0x2)] + i, '\x20'), water[kYTGUK['FfHth'](kYTGUK['UPHdR'](z, 0x2), 0x1)] + j)] = !![];
        }
    }
    for (var i = 0x0; kYTGUK['KHrBE'](i, 0xc); i++) {
        var xx = kYTGUK['DSvgI'](x, dx[i]);
        var yy = kYTGUK['FfHth'](y, dy[i]);
        if (kYTGUK['KHrBE'](xx, 0x0) || kYTGUK['KHrBE'](yy, 0x0) || kYTGUK['znIIF'](xx, 0xa) || kYTGUK['znIIF'](yy, 0xa))
            continue;
        if (Safe['hasOwnProperty'](kYTGUK['uHedR'](kYTGUK['DSvgI'](xx, '\x20'), yy)))
            bomb(xx, yy, z + 0x1);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var xy = Arr['shift']()['split']('\x20')['map'](Number);
    if (xy[0x0] == 0x0 && xy[0x1] == 0x0)
        break;
    var map = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var n = Arr['shift']() - 0x0;
    var water = Arr['shift']()['split']('\x20')['map'](Number);
    var max = 0x0;
    bomb(xy[0x0], xy[0x1], 0x0);
    console['log'](max == n ? 'OK' : 'NA');
}