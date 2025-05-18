var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nrl = arr['shift']()['split']('\x20')['map'](Number);
var n = nrl[0x0];
var L = nrl[0x2];
var t = [];
var max = [
    0x0,
    0x0
];
var time = 0x0;
for (var i = 0x0; i < n; i++)
    t[i] = [
        0x0,
        0x0,
        i
    ];
arr['push']([
    0x1,
    L,
    0x0
]['join']('\x20'));
arr['forEach'](function (v) {
    var JTvMlr = {
        'ajGAh': '8|0|3|7|2|1|5|4|6',
        'YqZPO': function (x, y) {
            return x - y;
        },
        'uKvFE': function (x, y) {
            return x > y;
        },
        'ccGKA': function (x, y) {
            return x == y;
        },
        'DwVxp': function (x, y) {
            return x <= y;
        },
        'rYVcY': function (x, y) {
            return x < y;
        }
    };
    var VTvJKJ = JTvMlr['ajGAh']['split']('|');
    var qaMTTk = 0x0;
    while (!![]) {
        switch (VTvJKJ[qaMTTk++]) {
        case '0':
            var d = JTvMlr['YqZPO'](v[0x0], 0x1);
            continue;
        case '1':
            time = T;
            continue;
        case '2':
            t[max[0x0]][0x1] += T - time;
            continue;
        case '3':
            var T = v[0x1];
            continue;
        case '4':
            if (JTvMlr['uKvFE'](x, 0x0)) {
                if (t[d][0x0] > max[0x1])
                    max = [
                        d,
                        t[d][0x0]
                    ];
                else if (JTvMlr['ccGKA'](t[d][0x0], max[0x1]) && JTvMlr['DwVxp'](d, max[0x0]))
                    max = [
                        d,
                        t[d][0x0]
                    ];
            }
            continue;
        case '5':
            t[d][0x0] += x;
            continue;
        case '6':
            if (JTvMlr['rYVcY'](x, 0x0)) {
                var MAX = 0x0;
                var m = 0x0;
                t['forEach'](function (V, index) {
                    if (MAX < V[0x0])
                        m = index;
                });
                max = [
                    m,
                    t[m][0x0]
                ];
            }
            continue;
        case '7':
            var x = v[0x2];
            continue;
        case '8':
            v = v['split']('\x20')['map'](Number);
            continue;
        }
        break;
    }
});
t['sort'](function (a, b) {
    var YoobRE = {
        'mxFWf': function (x, y) {
            return x - y;
        }
    };
    if (a[0x1] == b[0x1])
        return YoobRE['mxFWf'](a[0x2], b[0x2]);
    else
        return YoobRE['mxFWf'](b[0x1], a[0x1]);
});
console['log'](t[0x0][0x2] + 0x1);