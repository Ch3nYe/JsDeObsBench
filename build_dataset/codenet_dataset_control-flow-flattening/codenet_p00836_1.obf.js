function prime(max) {
    var YJRXdx = {
        'NoFCJ': function (x, y) {
            return x <= y;
        },
        'VGgNN': function (x, y) {
            return x == y;
        },
        'Kyhte': function (x, y) {
            return x + y;
        },
        'iJEWv': function (x, y) {
            return x <= y;
        },
        'UYPjo': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; YJRXdx['NoFCJ'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; YJRXdx['NoFCJ'](i, sqrt); i++) {
        if (YJRXdx['VGgNN'](arr[i], ![]))
            continue;
        for (var j = YJRXdx['Kyhte'](i, i); YJRXdx['iJEWv'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (YJRXdx['UYPjo'](arr[i], ![]))
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0x2710);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var cnt = [];
for (var i = 0x0; i <= 0x2710; i++)
    cnt[i] = 0x0;
p['forEach'](function (v, index) {
    var TDojay = {
        'jKIgz': function (x, y) {
            return x + y;
        },
        'LJsOZ': function (x, y) {
            return x < y;
        },
        'vFIxy': function (x, y) {
            return x > y;
        }
    };
    cnt[v]++;
    for (var i = TDojay['jKIgz'](index, 0x1); TDojay['LJsOZ'](i, p['length']); i++) {
        v += p[i];
        if (TDojay['vFIxy'](v, 0x2710))
            break;
        cnt[v]++;
    }
});
arr['some'](function (v) {
    var mBiQAq = {
        'Zkgch': function (x, y) {
            return x == y;
        }
    };
    if (mBiQAq['Zkgch'](v, 0x0))
        return !![];
    console['log'](cnt[v]);
});