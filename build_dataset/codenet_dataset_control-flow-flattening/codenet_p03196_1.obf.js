inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
N = l['shift']() * 0x1;
P = l['shift']() * 0x1;
_primFactors = function (n) {
    var tHzTQw = {
        'BeabJ': '8|2|5|7|6|3|0|4|1',
        'ncFfm': function (x, y) {
            return x <= y;
        },
        'emKCF': function (x, y) {
            return x * y;
        },
        'zmJXi': function (x, y) {
            return x === y;
        },
        'KLAqI': function (x, y) {
            return x % y;
        },
        'vJbGj': function (x, y) {
            return x === y;
        },
        'DzVwB': function (x, y) {
            return x === y;
        },
        'CZzHk': function (x, y) {
            return x % y;
        },
        'WcNnK': function (x, y) {
            return x > y;
        }
    };
    var utapyI = tHzTQw['BeabJ']['split']('|');
    var SQmtwx = 0x0;
    while (!![]) {
        switch (utapyI[SQmtwx++]) {
        case '0':
            for (i = 0x3; tHzTQw['ncFfm'](tHzTQw['emKCF'](i, i), s); i += 0x2) {
                r = 0x0;
                if (tHzTQw['zmJXi'](tHzTQw['KLAqI'](n, i), 0x0)) {
                    do {
                        r++;
                        n /= i;
                    } while (tHzTQw['vJbGj'](n % i, 0x0));
                    arr['push']({
                        'n': i,
                        'r': r
                    });
                }
            }
            continue;
        case '1':
            return arr;
        case '2':
            if (n == 0x1) {
                return [{
                        'n': 0x1,
                        'r': 0x1
                    }];
            }
            continue;
        case '3':
            if (tHzTQw['DzVwB'](tHzTQw['CZzHk'](n, i), 0x0)) {
                do {
                    r++;
                    n /= i;
                } while (tHzTQw['KLAqI'](n, i) === 0x0);
                arr['push']({
                    'n': i,
                    'r': r
                });
            }
            continue;
        case '4':
            if (tHzTQw['WcNnK'](n, 0x1)) {
                arr['push']({
                    'n': n,
                    'r': 0x1
                });
            }
            continue;
        case '5':
            s = n;
            continue;
        case '6':
            r = 0x0;
            continue;
        case '7':
            var i = 0x2;
            continue;
        case '8':
            var arr = [];
            continue;
        }
        break;
    }
};
arr = _primFactors(P);
ans = 0x1;
for (i = 0x0; i < arr['length']; i++) {
    a = arr[i];
    r = a['r'];
    while (r >= N) {
        ans *= a['n'];
        r -= N;
    }
}
console['log'](ans);