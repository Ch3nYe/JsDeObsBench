var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', x => {
    lines['push'](x);
});
var A;
rl['on']('close', () => {
    var iqNmlb = {
        'HcHdG': function (callee, param1) {
            return callee(param1);
        },
        'ZXecH': function (x, y) {
            return x < y;
        },
        'rZtjR': function (x, y) {
            return x < y;
        },
        'QAomM': function (x, y) {
            return x < y;
        }
    };
    var N = iqNmlb['HcHdG'](Number, lines[0x0]['split']('\x20')[0x0]);
    var M = Number(lines[0x0]['split']('\x20')[0x1]);
    A = lines[0x1]['split']('\x20')['map'](i => Number(i));
    lines['shift']();
    lines['shift']();
    var BC = lines['map'](i => i['split']('\x20')['map'](i => Number(i)));
    A['sort']((a, b) => a - b);
    BC['sort']((a, b) => b[0x1] - a[0x1]);
    var k = 0x0;
    var ans = 0x0;
    for (var i = 0x0; iqNmlb['ZXecH'](i, M); i++) {
        var b = BC[i][0x0];
        var c = BC[i][0x1];
        var cnt = 0x1;
        for (var j = k; iqNmlb['ZXecH'](j, N); j++) {
            if (iqNmlb['rZtjR'](b, cnt)) {
                k = j;
                break;
            }
            if (iqNmlb['QAomM'](A[j], c)) {
                ans += c;
            } else {
                for (var x = j; iqNmlb['QAomM'](x, N); x++) {
                    ans += A[x];
                }
                console['log'](ans);
                return 0x0;
            }
            cnt++;
        }
    }
    for (var x = j; x < N; x++) {
        ans += A[x];
    }
    console['log'](ans);
});