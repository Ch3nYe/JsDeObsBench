function prime(max) {
    var aTgmRk = {
        'EbNtS': function (x, y) {
            return x <= y;
        },
        'rvjAa': function (x, y) {
            return x == y;
        },
        'JOmvK': function (x, y) {
            return x + y;
        },
        'jAYxr': function (x, y) {
            return x <= y;
        },
        'DiFeR': function (x, y) {
            return x <= y;
        },
        'NzGzP': function (x, y) {
            return x !== y;
        }
    };
    var arr = [];
    for (var i = 0x0; aTgmRk['EbNtS'](i, max); i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math['sqrt'](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (aTgmRk['rvjAa'](arr[i], ![]))
            continue;
        for (var j = aTgmRk['JOmvK'](i, i); aTgmRk['jAYxr'](j, max); j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; aTgmRk['DiFeR'](i, max); i++) {
        if (aTgmRk['NzGzP'](arr[i], ![]))
            result['push'](arr[i]);
    }
    return result;
}
var PRIME = prime(0x186a0);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['some'](function (v) {
    var PNZXBt = {
        'fZceQ': function (x, y) {
            return x == y;
        },
        'GxJYm': function (x, y) {
            return x < y;
        },
        'DoRAK': function (x, y) {
            return x * y;
        },
        'OHaQG': function (x, y) {
            return x > y;
        },
        'HExlW': function (x, y) {
            return x <= y;
        },
        'lnAvp': function (x, y) {
            return x * y;
        },
        'sbgBz': function (x, y) {
            return x < y;
        },
        'TMjrz': function (x, y) {
            return x + y;
        }
    };
    if (PNZXBt['fZceQ'](v, '0\x200\x200'))
        return !![];
    var mab = v['split']('\x20')['map'](Number);
    var m = mab[0x0];
    var a = mab[0x1];
    var b = mab[0x2];
    var ans = [
        0x0,
        0x0,
        0x0
    ];
    for (var p = 0x0; PNZXBt['GxJYm'](p, PRIME['length']); p++) {
        for (var q = p; PNZXBt['GxJYm'](q, PRIME['length']); q++) {
            var pq = PNZXBt['DoRAK'](PRIME[p], PRIME[q]);
            if (PNZXBt['OHaQG'](pq, m))
                break;
            if (PNZXBt['HExlW'](PNZXBt['lnAvp'](PRIME[q], a), PNZXBt['lnAvp'](PRIME[p], b)) && PNZXBt['sbgBz'](ans[0x2], pq))
                ans = [
                    PRIME[p],
                    PRIME[q],
                    pq
                ];
        }
    }
    console['log'](PNZXBt['TMjrz'](PNZXBt['TMjrz'](ans[0x0], '\x20'), ans[0x1]));
});