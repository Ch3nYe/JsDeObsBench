function HW() {
    var wjOQCr = {
        'HzAgL': function (x, y) {
            return x == y;
        },
        'AIKtx': function (x, y) {
            return x < y;
        },
        'zTMlY': function (x, y) {
            return x + y;
        },
        'wVPhc': function (x, y) {
            return x <= y;
        },
        'ctiwx': function (x, y) {
            return x + y;
        },
        'BgTAi': function (x, y) {
            return x * y;
        }
    };
    var arr = [];
    for (var i = 0x1; wjOQCr['AIKtx'](i, 0x96); i++) {
        for (var j = wjOQCr['zTMlY'](i, 0x1); wjOQCr['wVPhc'](j, 0x96); j++) {
            arr['push']([
                i,
                j,
                wjOQCr['ctiwx'](wjOQCr['BgTAi'](i, i), wjOQCr['BgTAi'](j, j))
            ]);
        }
    }
    arr['sort'](function (a, b) {
        if (wjOQCr['HzAgL'](a[0x2], b[0x2]))
            return a[0x0] - b[0x0];
        else
            return a[0x2] - b[0x2];
    });
    return arr;
}
var Rectangles = HW();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var hw = Arr['shift']()['split']('\x20')['map'](Number);
    var h = hw[0x0];
    var w = hw[0x1];
    if (h == 0x0 && w == 0x0)
        break;
    var num = h * h + w * w;
    for (var i = 0x0; i < Rectangles['length']; i++) {
        if (Rectangles[i][0x0] == h && Rectangles[i][0x1] == w)
            break;
    }
    console['log'](Rectangles[i + 0x1][0x0] + '\x20' + Rectangles[i + 0x1][0x1]);
}