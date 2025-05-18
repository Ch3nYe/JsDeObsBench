var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var vEyhVw = {
        'PXLLG': function (x, y) {
            return x < y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; vEyhVw['PXLLG'](i, rest['length']); i++)
        if (vEyhVw['PXLLG'](rest[i], val))
            val = rest[i];
    return val;
}
function max() {
    var RJhwyP = {
        'yKOVs': function (x, y) {
            return x > y;
        }
    };
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (RJhwyP['yKOVs'](rest[i], val))
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var BNVFXj = {
        'SxquZ': function (x, y) {
            return x !== y;
        },
        'tQZLE': function (x, y) {
            return x - y;
        },
        'qNRJw': function (callee, param1) {
            return callee(param1);
        },
        'ifmJR': function (x, y) {
            return x < y;
        },
        'RLOlZ': function (x, y) {
            return x + y;
        },
        'iLcEF': function (x, y) {
            return x < y;
        },
        'PaqhX': function (x, y) {
            return x <= y;
        },
        'VtBUS': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var input = input['split']('\x0a');
    var temp1 = input[0x0]['split']('\x20');
    var n = BNVFXj['qNRJw'](toInt, temp1[0x0]);
    var m = BNVFXj['qNRJw'](toInt, temp1[0x1]);
    var abs = [];
    for (var i = 0x0; BNVFXj['ifmJR'](i, m); i++) {
        c = BNVFXj['qNRJw'](toIntArr, input[BNVFXj['RLOlZ'](i, 0x1)]['split']('\x20'));
        a = c[0x0];
        b = c[0x1];
        abs[i] = [
            a,
            b
        ];
    }
    abs['sort'](function (a, b) {
        if (BNVFXj['SxquZ'](a[0x0], b[0x0])) {
            return BNVFXj['tQZLE'](a[0x0], b[0x0]);
        } else {
            return BNVFXj['tQZLE'](a[0x1], b[0x1]);
        }
    });
    var l = 0x0;
    r = BNVFXj['tQZLE'](n, 0x1);
    var ab;
    var ans = 0x1;
    for (var i = 0x0; BNVFXj['iLcEF'](i, m); i++) {
        ab = abs[i];
        if (BNVFXj['PaqhX'](ab[0x1], l) || BNVFXj['PaqhX'](r, ab[0x0])) {
            ans++;
            l = ab[0x0];
            r = ab[0x1];
        } else {
            l = BNVFXj['VtBUS'](max, l, ab[0x0]);
            r = min(r, ab[0x1]);
        }
    }
    console['log'](ans);
}