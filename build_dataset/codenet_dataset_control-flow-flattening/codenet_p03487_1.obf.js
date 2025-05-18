var lines = [];
var result = 0x0;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var WRWUQu = {
        'IrENR': function (callee, param1) {
            return callee(param1);
        },
        'Njkfw': function (x, y) {
            return x !== y;
        },
        'BVPPK': function (x, y) {
            return x - y;
        },
        'wAxQK': function (x, y) {
            return x + y;
        },
        'RHvzT': function (x, y) {
            return x < y;
        },
        'pvxJz': function (x, y) {
            return x === y;
        }
    };
    var N = WRWUQu['IrENR'](Number, lines[0x0]);
    var a = lines[0x1]['split']('\x20')['map'](value => Number(value));
    a['sort']((a, b) => a - b);
    var counter = WRWUQu['IrENR'](Array, N)['fill'](0x0);
    var j = 0x0;
    counter[0x0] = [
        a[0x0],
        0x1
    ];
    for (var i = 0x1; i < N; i++) {
        if (WRWUQu['Njkfw'](a[i], a[WRWUQu['BVPPK'](i, 0x1)])) {
            j++;
            counter[j] = [
                a[i],
                0x1
            ];
        } else {
            var cnt = WRWUQu['wAxQK'](counter[j][0x1], 0x1);
            counter[j] = [
                a[i],
                cnt
            ];
        }
    }
    for (var i = 0x0; WRWUQu['RHvzT'](i, counter['length']); i++) {
        if (WRWUQu['pvxJz'](counter[i][0x0], counter[i][0x1])) {
            continue;
        } else {
            if (counter[i] === 0x0) {
                continue;
            } else {
                result += Math['min'](counter[i][0x1], Math['abs'](WRWUQu['BVPPK'](counter[i][0x0], counter[i][0x1])));
            }
        }
    }
    console['log'](result);
});