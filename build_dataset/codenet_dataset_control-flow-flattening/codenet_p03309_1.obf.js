function myin() {
    var BgREqs = {
        'vxwWm': function (callee, param1) {
            return callee(param1);
        }
    };
    return BgREqs['vxwWm'](require, 'fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    var ZiLCDL = {
        'AMIgh': function (callee, param1) {
            return callee(param1);
        }
    };
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return ZiLCDL['AMIgh'](parseInt, i);
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
    var ItXjtU = {
        'KeTWA': function (x, y) {
            return x - y;
        },
        'oYlxb': function (callee, param1) {
            return callee(param1);
        },
        'ZaNMg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HwKPd': function (x, y) {
            return x < y;
        },
        'Vsjlj': function (x, y) {
            return x - y;
        },
        'MSxiq': function (x, y) {
            return x + y;
        },
        'Ooclg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'cWhYm': function (x, y) {
            return x < y;
        },
        'uMvWo': function (x, y) {
            return x + y;
        }
    };
    var ujibZW = '0|9|2|6|4|5|3|8|7|10|1'['split']('|');
    var BlsGJN = 0x0;
    while (!![]) {
        switch (ujibZW[BlsGJN++]) {
        case '0':
            var KGjuGa = {
                'eAoKP': function (x, y) {
                    return ItXjtU['KeTWA'](x, y);
                }
            };
            continue;
        case '1':
            ItXjtU['oYlxb'](myout, output);
            continue;
        case '2':
            var N = ItXjtU['ZaNMg'](myconv, input[0x0], 0x1);
            continue;
        case '3':
            tmpList['sort'](function (a, b) {
                return KGjuGa['eAoKP'](a, b);
            });
            continue;
        case '4':
            var tmpList = [];
            continue;
        case '5':
            for (var i = 0x0; ItXjtU['HwKPd'](i, N); i++) {
                tmpList['push'](ItXjtU['Vsjlj'](list[i], ItXjtU['MSxiq'](i, 0x1)));
            }
            continue;
        case '6':
            var list = ItXjtU['ZaNMg'](myconv, input[0x1], 0x4);
            continue;
        case '7':
            var output = 0x0;
            continue;
        case '8':
            var b = tmpList[ItXjtU['Ooclg'](myconv, tmpList['length'] / 0x2, 0x1)];
            continue;
        case '9':
            input = ItXjtU['ZaNMg'](myconv, input, 0x3);
            continue;
        case '10':
            for (var i = 0x0; ItXjtU['cWhYm'](i, N); i++) {
                output += Math['abs'](ItXjtU['KeTWA'](list[i], b + ItXjtU['uMvWo'](i, 0x1)));
            }
            continue;
        }
        break;
    }
}
Main(myin());