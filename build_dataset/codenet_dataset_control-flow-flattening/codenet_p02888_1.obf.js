function Main(input) {
    var abDJIO = {
        'vOhLG': '5|2|6|0|7|1|3|4',
        'tsMMw': function (x, y) {
            return x - y;
        },
        'sqeZE': function (x, y) {
            return x + y;
        },
        'zGalV': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'yQjug': function (x, y) {
            return x + y;
        }
    };
    var VbvHyt = abDJIO['vOhLG']['split']('|');
    var UdeyAT = 0x0;
    while (!![]) {
        switch (VbvHyt[UdeyAT++]) {
        case '0':
            var L = input[0x1]['split']('\x20')['map'](Number);
            continue;
        case '1':
            L['sort'](function (a, b) {
                return EoqhfX['PAfKp'](b, a);
            });
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            for (var i = 0x0; i < abDJIO['tsMMw'](N, 0x1); i++) {
                for (var j = abDJIO['sqeZE'](i, 0x1); j < N; j++) {
                    var fzgszE = '0|1|3|4|2'['split']('|');
                    var gDeiaB = 0x0;
                    while (!![]) {
                        switch (fzgszE[gDeiaB++]) {
                        case '0':
                            var tag = L[i] - L[j];
                            continue;
                        case '1':
                            var arr = L['slice'](0x0, L['length']);
                            continue;
                        case '2':
                            sum += abDJIO['tsMMw'](arr['length'], abDJIO['zGalV'](caninsert, arr, tag));
                            continue;
                        case '3':
                            arr['splice'](0x0, abDJIO['yQjug'](j, 0x1));
                            continue;
                        case '4':
                            arr['reverse']();
                            continue;
                        }
                        break;
                    }
                }
            }
            continue;
        case '4':
            console['log'](sum);
            continue;
        case '5':
            var EoqhfX = {
                'PAfKp': function (x, y) {
                    return abDJIO['tsMMw'](x, y);
                }
            };
            continue;
        case '6':
            var N = input[0x0];
            continue;
        case '7':
            var sum = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function caninsert(array, value) {
    var hNCtAx = {
        'kYGYC': '4|2|1|3|0',
        'dTVNj': function (x, y) {
            return x < y;
        },
        'FwGXK': function (x, y) {
            return x + y;
        },
        'gDpdQ': function (x, y) {
            return x / y;
        },
        'YfYHN': function (x, y) {
            return x - y;
        },
        'drjXx': function (x, y) {
            return x <= y;
        }
    };
    var FTZirA = hNCtAx['kYGYC']['split']('|');
    var bViBLI = 0x0;
    while (!![]) {
        switch (FTZirA[bViBLI++]) {
        case '0':
            return lower;
        case '1':
            var upper = array['length'];
            continue;
        case '2':
            var lower = 0x0;
            continue;
        case '3':
            while (hNCtAx['dTVNj'](lower, upper)) {
                var mid = Math['floor'](hNCtAx['FwGXK'](lower, hNCtAx['gDpdQ'](hNCtAx['YfYHN'](upper, lower), 0x2)));
                if (hNCtAx['drjXx'](array[mid], value)) {
                    lower = hNCtAx['FwGXK'](mid, 0x1);
                } else {
                    upper = mid;
                }
            }
            continue;
        case '4':
            value += 0.1;
            continue;
        }
        break;
    }
}
;