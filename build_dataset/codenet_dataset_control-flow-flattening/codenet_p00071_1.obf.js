function bomb(y, x) {
    var FBhBSI = {
        'brESX': function (x, y) {
            return x < y;
        },
        'xNHMq': function (x, y) {
            return x <= y;
        },
        'VfUHz': function (x, y) {
            return x + y;
        },
        'TmJrp': function (x, y) {
            return x * y;
        },
        'aRTVY': function (x, y) {
            return x * y;
        },
        'XiJod': function (x, y) {
            return x >= y;
        },
        'zNgIg': function (x, y) {
            return x >= y;
        },
        'VtINA': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    for (var i = 0x0; FBhBSI['brESX'](i, 0x4); i++) {
        for (var j = 0x1; FBhBSI['xNHMq'](j, 0x3); j++) {
            var yy = FBhBSI['VfUHz'](y, FBhBSI['TmJrp'](dy[i], j));
            var xx = FBhBSI['VfUHz'](x, FBhBSI['aRTVY'](dx[i], j));
            if (FBhBSI['brESX'](yy, 0x0) || FBhBSI['XiJod'](yy, 0x8) || FBhBSI['brESX'](xx, 0x0) || FBhBSI['zNgIg'](xx, 0x8))
                continue;
            if (yx[yy][xx] == 0x1) {
                yx[yy][xx] = 0x0;
                FBhBSI['VtINA'](bomb, yy, xx);
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
for (var i = 0x0; i < AL; i++) {
    var lAXnIb = '6|5|0|7|1|3|4|2'['split']('|');
    var qZPzsg = 0x0;
    while (!![]) {
        switch (lAXnIb[qZPzsg++]) {
        case '0':
            for (var j = 0x0; j < 0x8; j++) {
                var line = Arr['shift']()['split']('')['map'](Number);
                yx['push'](line);
            }
            continue;
        case '1':
            var Y = Arr['shift']() - 0x0 - 0x1;
            continue;
        case '2':
            for (var j = 0x0; j < 0x8; j++)
                console['log'](yx[j]['join'](''));
            continue;
        case '3':
            if (yx[Y][X] == 0x1) {
                yx[Y][X] = 0x0;
                bomb(Y, X);
            }
            continue;
        case '4':
            console['log']('Data\x20' + (i + 0x1) + ':');
            continue;
        case '5':
            var yx = [];
            continue;
        case '6':
            Arr['shift']();
            continue;
        case '7':
            var X = Arr['shift']() - 0x0 - 0x1;
            continue;
        }
        break;
    }
}