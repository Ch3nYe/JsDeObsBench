var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ans = [];
    for (var i = 0x0; i < n; i++) {
        var ipCoBi = '0|2|1|3|4'['split']('|');
        var NsHWIB = 0x0;
        while (!![]) {
            switch (ipCoBi[NsHWIB++]) {
            case '0':
                var arr = Arr['shift']()['split']('\x20');
                continue;
            case '1':
                arr = arr['map'](Number);
                continue;
            case '2':
                var name = arr['shift']();
                continue;
            case '3':
                arr['unshift'](name);
                continue;
            case '4':
                (function (L, P, A, B, C, D, E, F, S, M) {
                    var zyfOiI = {
                        'fvYDf': function (x, y) {
                            return x + y;
                        },
                        'HtxnX': function (x, y) {
                            return x + y;
                        },
                        'VFHpD': function (x, y) {
                            return x * y;
                        },
                        'akkFX': function (x, y) {
                            return x + y;
                        },
                        'jODQW': function (x, y) {
                            return x - y;
                        },
                        'WssTN': function (x, y) {
                            return x * y;
                        }
                    };
                    var time = zyfOiI['fvYDf'](zyfOiI['HtxnX'](A, B) + C, zyfOiI['VFHpD'](zyfOiI['akkFX'](D, E), M));
                    var money = zyfOiI['jODQW'](zyfOiI['WssTN'](F * S, M), P);
                    ans['push']([
                        L,
                        money / time
                    ]);
                }['apply'](null, arr));
                continue;
            }
            break;
        }
    }
    ans['sort'](function (a, b) {
        var FLlQni = {
            'MOqqg': function (x, y) {
                return x == y;
            },
            'GFpkJ': function (x, y) {
                return x > y;
            }
        };
        if (FLlQni['MOqqg'](a[0x1], b[0x1]))
            return FLlQni['GFpkJ'](a[0x0]['toString'](), b[0x0]['toString']()) ? 0x1 : -0x1;
        else
            return b[0x1] - a[0x1];
    });
    ans['forEach'](function (v) {
        console['log'](v[0x0]);
    });
    console['log']('#');
}