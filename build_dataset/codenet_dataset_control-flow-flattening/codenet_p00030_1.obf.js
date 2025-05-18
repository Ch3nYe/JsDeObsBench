function comb(r) {
    var tPBvag = {
        'DSpli': function (x, y) {
            return x != y;
        },
        'OCHEZ': function (x, y) {
            return x <= y;
        },
        'PFSrR': function (x, y) {
            return x == y;
        },
        'ajyWA': function (x, y) {
            return x + y;
        },
        'JqKpl': function (x, y) {
            return x - y;
        },
        'YsByO': function (x, y) {
            return x + y;
        }
    };
    var cDdBVV = '4|6|2|1|0|3|5'['split']('|');
    var vEVLWO = 0x0;
    while (!![]) {
        switch (cDdBVV[vEVLWO++]) {
        case '0':
            var ret = [];
            continue;
        case '1':
            c[0x1] = 0x0;
            continue;
        case '2':
            var k = 0x1;
            continue;
        case '3':
            while (tPBvag['DSpli'](k, 0x0)) {
                var jvnghS = '4|2|0|5|6|1|3'['split']('|');
                var GnEpyK = 0x0;
                while (!![]) {
                    switch (jvnghS[GnEpyK++]) {
                    case '0':
                        for (var i = 0x1; tPBvag['OCHEZ'](i, r); i++) {
                            arr['push'](c[i]);
                        }
                        continue;
                    case '1':
                        while (tPBvag['PFSrR'](c[k], tPBvag['ajyWA'](tPBvag['JqKpl'](0x9, r), k)))
                            k = k - 0x1;
                        continue;
                    case '2':
                        var arr = [];
                        continue;
                    case '3':
                        c[k] = c[k] + 0x1;
                        continue;
                    case '4':
                        for (var i = tPBvag['YsByO'](k, 0x1); i <= r; i++) {
                            c[i] = c[tPBvag['JqKpl'](i, 0x1)] + 0x1;
                        }
                        continue;
                    case '5':
                        ret['push'](arr);
                        continue;
                    case '6':
                        k = r;
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '4':
            var c = [];
            continue;
        case '5':
            return ret;
        case '6':
            c[0x0] = -0x1;
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var nums = line['split']('\x20');
    var n = +nums[0x0];
    var s = +nums[0x1];
    if (n + s == 0x0)
        break;
    var c = comb(n);
    var cnt = 0x0;
    for (var i = 0x0; i < c['length']; i++) {
        var arr = c[i];
        if (s == arr['reduce'](function (prev, now) {
                var EeJNtn = {
                    'CudrL': function (x, y) {
                        return x + y;
                    }
                };
                return EeJNtn['CudrL'](prev, now);
            })) {
            cnt++;
        }
    }
    console['log'](cnt);
}