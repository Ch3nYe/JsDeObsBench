function main(input) {
    var WCQkKp = {
        'qysmC': function (callee, param1) {
            return callee(param1);
        },
        'Jouwb': function (x, y) {
            return x <= y;
        },
        'tDhXA': function (x, y) {
            return x * y;
        },
        'OdDTp': function (x, y) {
            return x == y;
        },
        'iQEPb': function (x, y) {
            return x % y;
        },
        'HddJv': function (x, y) {
            return x + y;
        },
        'TEhFZ': function (x, y) {
            return x != y;
        },
        'bVXbb': function (x, y) {
            return x * y;
        }
    };
    var n = WCQkKp['qysmC'](parseInt, input);
    var map = {};
    for (var i = 0x2; WCQkKp['Jouwb'](i, n); i++) {
        var t = i;
        for (var j = 0x2; WCQkKp['tDhXA'](j, j) <= t; j++) {
            if (WCQkKp['OdDTp'](WCQkKp['iQEPb'](t, j), 0x0)) {
                var cnt = 0x0;
                while (WCQkKp['OdDTp'](WCQkKp['iQEPb'](t, j), 0x0)) {
                    cnt++;
                    t /= j;
                }
                if (map[j]) {
                    map[j] = WCQkKp['HddJv'](map[j], cnt);
                } else {
                    map[j] = cnt;
                }
            }
        }
        if (WCQkKp['TEhFZ'](t, 0x1)) {
            if (map[t]) {
                map[t]++;
            } else {
                map[t] = 0x1;
            }
        }
    }
    var ans = 0x1;
    var mod = 0x3b9aca07;
    for (var x in map) {
        ans = WCQkKp['bVXbb'](ans, map[x] + 0x1) % mod;
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));