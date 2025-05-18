function toNum(str) {
    var DsOVKo = {
        'NgEzy': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return DsOVKo['NgEzy'](parseInt, str, 0xa);
}
function gcd(a, b) {
    var nXUoKP = {
        'gdXeO': function (x, y) {
            return x === y;
        },
        'FuNqw': function (x, y) {
            return x % y;
        }
    };
    if (nXUoKP['gdXeO'](nXUoKP['FuNqw'](a, b), 0x0)) {
        return b;
    } else {
        return gcd(b, nXUoKP['FuNqw'](a, b));
    }
}
function lcm(a, b) {
    var jCMWlZ = {
        'nUmoq': function (x, y) {
            return x / y;
        },
        'TKEUp': function (x, y) {
            return x * y;
        },
        'hdjcG': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return jCMWlZ['nUmoq'](jCMWlZ['TKEUp'](a, b), jCMWlZ['hdjcG'](gcd, a, b));
}
function Main(input) {
    var YccchI = {
        'LVFxa': function (callee, param1) {
            return callee(param1);
        },
        'zpQwd': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'lpjOb': function (x, y) {
            return x < y;
        },
        'iLlZa': function (x, y) {
            return x < y;
        },
        'LLtPX': function (x, y) {
            return x * y;
        },
        'sxlXA': function (x, y) {
            return x / y;
        },
        'qVXxn': function (x, y) {
            return x != y;
        },
        'bVPpm': function (x, y) {
            return x * y;
        },
        'ylssE': function (x, y) {
            return x != y;
        },
        'dkPSE': function (x, y) {
            return x * y;
        }
    };
    var N = toNum(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    var M = YccchI['LVFxa'](toNum, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    var S = input['split']('\x0a')[0x1];
    var T = input['split']('\x0a')[0x2];
    var L = YccchI['zpQwd'](lcm, N, M);
    var flag = !![];
    var X = [];
    for (var i = 0x0; YccchI['lpjOb'](i, L); i++) {
        X['push']('');
    }
    X[0x0] = S[0x0];
    for (var i = 0x1; YccchI['iLlZa'](i, S['length']); i++) {
        X[YccchI['LLtPX'](i, YccchI['sxlXA'](L, N))] = S[i];
    }
    if (X[0x0] != T[0x0]) {
        console['log']('-1');
    } else {
        for (var i = 0x1; i < T['length']; i++) {
            if (YccchI['qVXxn'](X[YccchI['bVPpm'](i, YccchI['sxlXA'](L, M))], '') && YccchI['ylssE'](X[YccchI['dkPSE'](i, L / M)], T[i])) {
                console['log']('-1');
                flag = ![];
                break;
            }
        }
    }
    if (flag) {
        console['log'](L);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));