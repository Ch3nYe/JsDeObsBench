function bomb(y, x) {
    var stNWne = {
        'pviZp': function (x, y) {
            return x < y;
        },
        'XtIuf': function (x, y) {
            return x + y;
        },
        'HROYS': function (x, y) {
            return x + y;
        },
        'dkdbY': function (x, y) {
            return x >= y;
        },
        'WpjtV': function (x, y) {
            return x == y;
        },
        'TVNhi': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; stNWne['pviZp'](i, 0x4); i++) {
        var yy = stNWne['XtIuf'](y, dy[i]);
        var xx = stNWne['HROYS'](x, dx[i]);
        if (yy < 0x0 || stNWne['dkdbY'](yy, 0xc) || xx < 0x0 || stNWne['dkdbY'](xx, 0xc))
            continue;
        if (stNWne['WpjtV'](yx[yy][xx], 'a')) {
            yx[yy][xx] = cnt;
            stNWne['TVNhi'](bomb, yy, xx);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = 0x0;
var cnt = 0x0;
var yx = [];
for (var I = 0x0; I < Arr['length']; I++) {
    n++;
    var v = Arr[I]['replace'](/1/g, 'a');
    var arr = v['split']('');
    yx['push'](arr);
    if (n != 0xc)
        continue;
    cnt = 0x0;
    for (var i = 0x0; i < 0xc; i++) {
        for (var j = 0x0; j < 0xc; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console['log'](cnt);
    n = 0x0;
    yx = [];
    I++;
}