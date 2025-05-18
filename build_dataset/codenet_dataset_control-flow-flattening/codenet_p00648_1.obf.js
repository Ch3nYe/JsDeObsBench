var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var obj = {};
    var ary = [];
    for (var i = 0x0; i < N; i++) {
        var SfQmig = '3|4|5|1|2|0|6'['split']('|');
        var SbGIsY = 0x0;
        while (!![]) {
            switch (SfQmig[SbGIsY++]) {
            case '0':
                obj[name] = w * 0x5a0 + s;
                continue;
            case '1':
                var s = nws[0x2]['split']('')['map'](Number);
                continue;
            case '2':
                s = s['length'] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
                continue;
            case '3':
                var nws = arr['shift']()['split']('\x20');
                continue;
            case '4':
                var name = nws[0x0];
                continue;
            case '5':
                var w = nws[0x1] - 0x0;
                continue;
            case '6':
                ary['push'](w * 0x5a0 + s);
                continue;
            }
            break;
        }
    }
    var P = arr['shift']() - 0x0;
    for (var i = 0x0; i < P; i++) {
        var f = arr['shift']();
        ary['push'](obj[f] - 29.5);
    }
    ary['sort'](function (a, b) {
        var HfFbmg = {
            'rRrAk': function (x, y) {
                return x - y;
            }
        };
        return HfFbmg['rRrAk'](a, b);
    });
    var cnt = 0x0;
    var i = 0x0;
    var p = 0x0;
    ary['forEach'](function (v) {
        var TXosvY = {
            'eZSeG': function (x, y) {
                return x == y;
            },
            'dXiNK': function (x, y) {
                return x % y;
            },
            'VOdZs': function (x, y) {
                return x + y;
            },
            'Qabiz': function (x, y) {
                return x <= y;
            }
        };
        if (TXosvY['eZSeG'](TXosvY['dXiNK'](v, 0x1), 0.5)) {
            cnt++;
            p++;
            i = TXosvY['VOdZs'](v, 29.5) + 0x1e;
        } else if (TXosvY['Qabiz'](i, v)) {
            cnt++;
            i = TXosvY['VOdZs'](v, 0x1e);
        }
    });
    if (p != P)
        cnt = -0x1;
    console['log'](cnt);
}