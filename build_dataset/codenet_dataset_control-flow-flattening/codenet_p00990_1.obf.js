function over(x) {
    var UMtPap = {
        'siOYq': function (x, y) {
            return x >= y;
        }
    };
    if (UMtPap['siOYq'](x, 0xa))
        x = x - 0xa + 0x1;
    return x;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var id = arr['shift']()['split']('');
var a = arr['shift']() - 0x0;
var ary = arr['shift']()['split']('\x20')['map'](Number);
var k = [];
var sum = 0x0;
id['forEach'](function (v, i) {
    var wpOPpm = {
        'IJpZI': function (x, y) {
            return x % y;
        },
        'ZAhYr': function (x, y) {
            return x == y;
        },
        'VoFBH': function (x, y) {
            return x % y;
        },
        'vqxit': function (x, y) {
            return x - y;
        },
        'xNiZr': function (callee, param1) {
            return callee(param1);
        },
        'UyMvY': function (x, y) {
            return x * y;
        }
    };
    if (v == '*') {
        if (wpOPpm['IJpZI'](i, 0x2) == 0x0)
            k['push'](0x1);
        else
            k['push'](0x2);
    } else {
        if (wpOPpm['ZAhYr'](wpOPpm['VoFBH'](i, 0x2), 0x0))
            sum += wpOPpm['vqxit'](v, 0x0);
        else
            sum += wpOPpm['xNiZr'](over, wpOPpm['UyMvY'](wpOPpm['vqxit'](v, 0x0), 0x2));
    }
});
var dp = [];
for (var i = 0x0; i <= 0x7; i++) {
    dp[i] = [];
    for (var s = 0x0; s < 0xf4240; s++)
        dp[i][s] = ![];
}
dp[0x0][sum] = 0x1;
for (var i = 0x0; i < k['length']; i++) {
    for (var j = 0x0; j < ary['length']; j++) {
        for (var s = 0x0; s < 0xf4240; s++) {
            dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
        }
    }
}
var ans = 0x0;
for (var s = 0x0; s < 0x186a0; s++)
    ans += dp[k['length']][s * 0xa];
console['log'](ans);