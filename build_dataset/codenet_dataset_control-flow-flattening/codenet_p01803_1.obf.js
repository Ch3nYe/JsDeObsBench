var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    var obj = {};
    var max = 0x0;
    Arr['forEach'](function (v) {
        var vMaKbm = {
            'tTRKz': function (x, y) {
                return x < y;
            }
        };
        var APeuXe = '3|2|1|0|5|4'['split']('|');
        var ohMtSp = 0x0;
        while (!![]) {
            switch (APeuXe[ohMtSp++]) {
            case '0':
                for (var i = 0x0; vMaKbm['tTRKz'](i, str['length']); i++) {
                    if (flag)
                        s += str[i];
                    flag = /[aiueo]/['test'](str[i]) ? !![] : ![];
                }
                continue;
            case '1':
                var flag = ![];
                continue;
            case '2':
                var s = str[0x0];
                continue;
            case '3':
                var str = v;
                continue;
            case '4':
                max = Math['max'](max, s['length']);
                continue;
            case '5':
                obj[s] = !![];
                continue;
            }
            break;
        }
    });
    for (var i = 0x1; i <= max; i++) {
        var Obj = {};
        for (var key in obj) {
            Obj[key['slice'](0x0, i)] = !![];
        }
        if (Object['keys'](Obj)['length'] == n) {
            console['log'](i);
            break;
        }
        if (i == max)
            console['log'](-0x1);
    }
}