function time(x) {
    var mBUReW = {
        'dozUO': function (x, y) {
            return x + y;
        },
        'Ndtoa': function (x, y) {
            return x * y;
        },
        'oCSrp': function (x, y) {
            return x * y;
        },
        'yqaRe': function (x, y) {
            return x * y;
        }
    };
    x = x['split']('')['map'](Number);
    return mBUReW['dozUO'](mBUReW['dozUO'](mBUReW['dozUO'](mBUReW['Ndtoa'](mBUReW['oCSrp'](x[0x0], 0xa), 0x3c), x[0x1] * 0x3c), mBUReW['yqaRe'](x[0x2], 0xa)), x[0x3]);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var npq = arr['shift']();
    if (npq == '0\x200\x200')
        break;
    npq = npq['split']('\x20');
    var n = npq[0x0] - 0x0;
    var p = time(npq[0x1]);
    var q = time(npq[0x2]);
    var tv = [];
    for (var i = p; i < q; i++)
        tv[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var cm = arr['shift']();
        var ary = arr['shift']()['split']('\x20');
        for (var j = 0x0; j < cm; j++) {
            var start = time(ary['shift']());
            var stop = time(ary['shift']());
            for (var k = start; k < stop; k++)
                tv[k]++;
        }
    }
    var max = 0x0;
    var cnt = 0x0;
    for (var i = p; i < q; i++) {
        if (tv[i] != n) {
            cnt++;
        } else {
            max = Math['max'](max, cnt);
            cnt = 0x0;
        }
    }
    max = Math['max'](max, cnt);
    console['log'](max);
}