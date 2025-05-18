function Main(input) {
    var bNcnHp = {
        'YdEwx': function (x, y) {
            return x < y;
        },
        'Ezsym': function (x, y) {
            return x % y;
        },
        'DERAT': function (x, y) {
            return x * y;
        },
        'CVMrw': function (x, y) {
            return x + y;
        },
        'RiHKD': function (callee, param1) {
            return callee(param1);
        }
    };
    var SHBqEW = '4|3|2|5|0|1'['split']('|');
    var sFxHzi = 0x0;
    while (!![]) {
        switch (SHBqEW[sFxHzi++]) {
        case '0':
            ans['fill'](0x0);
            continue;
        case '1':
            for (var i = 0x0; bNcnHp['YdEwx'](i, Qs['length']); i++) {
                for (var j = 0x0; j < Qs[i][0x2]; j++) {
                    if (j == 0x0) {
                        ans[i] = bNcnHp['Ezsym'](Qs[i][0x0], 0xf4243);
                    } else {
                        ans[i] = bNcnHp['Ezsym'](bNcnHp['DERAT'](ans[i], bNcnHp['CVMrw'](Qs[i][0x0], bNcnHp['DERAT'](j, Qs[i][0x1]))), 0xf4243);
                    }
                }
                console['log'](ans[i]);
            }
            continue;
        case '2':
            var Qs = input['slice'](0x1, bNcnHp['CVMrw'](Q, 0x1))['map'](x => x['split']('\x20')['map'](y => parseInt(y)));
            continue;
        case '3':
            var Q = bNcnHp['RiHKD'](parseInt, input[0x0]);
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        case '5':
            var ans = new Array(Q);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));