'use strict';
function myin() {
    var bKozrx = {
        'MHNCx': function (callee, param1) {
            return callee(param1);
        },
        'mdrPL': '/dev/stdin',
        'RNxZi': 'utf8'
    };
    return bKozrx['MHNCx'](require, 'fs')['readFileSync'](bKozrx['mdrPL'], bKozrx['RNxZi'])['trim']();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    var rfkbKQ = {
        'yVkdW': function (callee, param1) {
            return callee(param1);
        }
    };
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return rfkbKQ['yVkdW'](parseInt, i);
    case 0x2:
        return i['split']('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i['split']('\x20')['map'](a => Number(a));
    case 0x5:
        return i['split']('\x0a')['map'](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i['split']('')['map'](a => Number(a));
    }
}
function Main(input) {
    var AzncWT = {
        'dAqsl': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'tMctr': function (x, y) {
            return x < y;
        },
        'NmDtH': function (x, y) {
            return x + y;
        },
        'CHOPz': function (x, y) {
            return x == y;
        }
    };
    input = myconv(input, 0x3);
    var N = AzncWT['dAqsl'](myconv, input[0x0], 0x1);
    var list = AzncWT['dAqsl'](myconv, input[0x1], 0x4);
    var output = 0x0;
    for (var i = 0x0; AzncWT['tMctr'](i, N - 0x1); i++) {
        var mae = list[i];
        var ato = list[AzncWT['NmDtH'](i, 0x1)];
        if (AzncWT['CHOPz'](mae, ato)) {
            output++;
            list[AzncWT['NmDtH'](i, 0x1)] = -0x1;
        }
    }
    myout(output);
}
Main(myin());