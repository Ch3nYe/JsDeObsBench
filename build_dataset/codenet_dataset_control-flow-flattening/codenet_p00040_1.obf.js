(function (input) {
    var cjJjNA = {
        'OxeIU': function (callee, param1) {
            return callee(param1);
        },
        'IAjhs': function (x, y) {
            return x < y;
        },
        'vdyOn': function (callee, param1) {
            return callee(param1);
        }
    };
    var p = input['replace'](/\n$/, '')['split']('\x0a');
    var n = cjJjNA['OxeIU'](Number, p['shift']());
    for (var i = 0x0; cjJjNA['IAjhs'](i, n); i++) {
        console['log'](cjJjNA['vdyOn'](conv, p['shift']()));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function conv(s) {
    var auYopq = {
        'AYmCw': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    a = s['split']('\x20');
    for (var i = 0x0; i < a['length']; i++) {
        var r = check(a[i]);
        if (r) {
            return auYopq['AYmCw'](conv_, s, r);
        }
    }
    return s;
}
function conv_(s, r) {
    var xsBIcQ = {
        'mHDTe': '4|2|1|3|0',
        'zcBIp': function (x, y) {
            return x === y;
        },
        'RfLEh': function (x, y) {
            return x + y;
        },
        'NCtAj': function (x, y) {
            return x % y;
        }
    };
    var xRTGEQ = xsBIcQ['mHDTe']['split']('|');
    var tNTehO = 0x0;
    while (!![]) {
        switch (xRTGEQ[tNTehO++]) {
        case '0':
            return s;
        case '1':
            var b = r[0x1];
            continue;
        case '2':
            var a = r[0x0];
            continue;
        case '3':
            var s = s['split']('')['map'](function (e) {
                if (iQjYHn['SpfII'](e, '\x20')) {
                    return e;
                }
                return String['fromCharCode'](iQjYHn['yvjWS'](iQjYHn['KVxWg'](iQjYHn['yvjWS'](a * e['charCodeAt'](0x0), b), 0x1a), 'a'['charCodeAt'](0x0)));
            })['join']('');
            continue;
        case '4':
            var iQjYHn = {
                'SpfII': function (x, y) {
                    return xsBIcQ['zcBIp'](x, y);
                },
                'yvjWS': function (x, y) {
                    return xsBIcQ['RfLEh'](x, y);
                },
                'KVxWg': function (x, y) {
                    return xsBIcQ['NCtAj'](x, y);
                }
            };
            continue;
        }
        break;
    }
}
function check(str) {
    var pcZeSi = {
        'UQkbN': function (x, y) {
            return x !== y;
        },
        'PyFPf': function (x, y) {
            return x < y;
        },
        'lhHhm': function (x, y) {
            return x === y;
        },
        'KbDps': 'this',
        'lzFEV': function (x, y) {
            return x === y;
        },
        'jHxoT': 'that'
    };
    if (pcZeSi['UQkbN'](str['length'], 0x4)) {
        return ![];
    }
    for (var i = 0x0; i < 0x1a; i++) {
        for (var j = 0x0; pcZeSi['PyFPf'](j, 0x1a); j++) {
            var s = conv_(str, [
                i,
                j
            ]);
            if (pcZeSi['lhHhm'](s, pcZeSi['KbDps']) || pcZeSi['lzFEV'](s, pcZeSi['jHxoT'])) {
                return [
                    i,
                    j
                ];
            }
        }
    }
    return ![];
}