var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var L = Arr['shift']();
for (var i = 0x0; i < L; i++) {
    var VsqVhq = '0|3|5|4|7|1|6|2'['split']('|');
    var gkpCOw = 0x0;
    while (!![]) {
        switch (VsqVhq[gkpCOw++]) {
        case '0':
            var str = Arr[i];
            continue;
        case '1':
            var n = 0x1;
            continue;
        case '2':
            console['log'](arr['join'](''));
            continue;
        case '3':
            str = str['replace'](/\-\>/g, 'A');
            continue;
        case '4':
            var m = str['split']('');
            continue;
        case '5':
            str = str['replace'](/\<\-/g, 'Z');
            continue;
        case '6':
            m['forEach'](function (v) {
                var AYLwrN = {
                    'GefNb': function (x, y) {
                        return x == y;
                    },
                    'FibjQ': function (x, y) {
                        return x == y;
                    },
                    'ucchI': function (x, y) {
                        return x > y;
                    }
                };
                if (AYLwrN['GefNb'](v, 'A'))
                    n++;
                else if (v == 'Z')
                    n--;
                else {
                    if (AYLwrN['FibjQ'](n, 0x0)) {
                        arr['unshift'](v);
                        n = 0x1;
                    }
                    if (AYLwrN['ucchI'](n, arr['length']))
                        arr['push'](v);
                }
            });
            continue;
        case '7':
            var arr = [m[0x0]];
            continue;
        }
        break;
    }
}