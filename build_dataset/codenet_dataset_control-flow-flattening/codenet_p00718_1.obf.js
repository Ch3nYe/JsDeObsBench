var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('\x20');
    var sum = 0x0;
    arr['forEach'](function (v) {
        var BgfMtY = {
            'vddqU': '1|6|0|4|2|5|3',
            'cJaBh': function (x, y) {
                return x == y;
            },
            'QoNte': function (x, y) {
                return x - y;
            },
            'dDKUY': function (x, y) {
                return x == y;
            },
            'kvtPn': function (x, y) {
                return x * y;
            }
        };
        v = v['replace'](/(\d?)([mcxi])/g, function (s, s1, s2) {
            var PllDwe = BgfMtY['vddqU']['split']('|');
            var gXuUtM = 0x0;
            while (!![]) {
                switch (PllDwe[gXuUtM++]) {
                case '0':
                    if (BgfMtY['cJaBh'](s2, 'c'))
                        s2 = 0x64;
                    continue;
                case '1':
                    s1 = s1 ? BgfMtY['QoNte'](s1, 0x0) : 0x1;
                    continue;
                case '2':
                    if (s2 == 'i')
                        s2 = 0x1;
                    continue;
                case '3':
                    return s;
                case '4':
                    if (BgfMtY['dDKUY'](s2, 'x'))
                        s2 = 0xa;
                    continue;
                case '5':
                    sum += BgfMtY['kvtPn'](s1, s2);
                    continue;
                case '6':
                    if (BgfMtY['cJaBh'](s2, 'm'))
                        s2 = 0x3e8;
                    continue;
                }
                break;
            }
        });
    });
    var str = ('000' + sum)['slice'](-0x4);
    var S = str['split']('')['map'](Number);
    var result = '';
    S['forEach'](function (v, i) {
        var AtAwJI = {
            'OpbiK': function (x, y) {
                return x == y;
            },
            'VuCOR': function (x, y) {
                return x !== y;
            },
            'HFBQX': function (x, y) {
                return x + y;
            },
            'zlTib': function (x, y) {
                return x + y;
            }
        };
        if (AtAwJI['OpbiK'](v, 0x1))
            v = '';
        if (AtAwJI['VuCOR'](v, 0x0)) {
            if (i == 0x0)
                result += AtAwJI['HFBQX'](v, 'm');
            if (AtAwJI['OpbiK'](i, 0x1))
                result += AtAwJI['zlTib'](v, 'c');
            if (AtAwJI['OpbiK'](i, 0x2))
                result += v + 'x';
            if (i == 0x3)
                result += v + 'i';
        }
    });
    console['log'](result);
}