var a0_0x5150df = a0_0x4279;
function over(x) {
    if (x >= 0xa)
        x = x - 0xa + 0x1;
    return x;
}
var input = require('fs')['readFileSync'](a0_0x5150df(0x0), a0_0x5150df(0x1));
var arr = input['trim']()['split']('\x0a');
var n = arr[a0_0x5150df(0x2)]() - 0x0;
var id = arr[a0_0x5150df(0x2)]()[a0_0x5150df(0x3)]('');
var a = arr['shift']() - 0x0;
var ary = arr[a0_0x5150df(0x2)]()[a0_0x5150df(0x3)]('\x20')[a0_0x5150df(0x4)](Number);
var k = [];
var sum = 0x0;
id[a0_0x5150df(0x5)](function (v, i) {
    var _0x535f67 = a0_0x4279;
    if (v == '*') {
        if (i % 0x2 == 0x0)
            k['push'](0x1);
        else
            k[_0x535f67(0x6)](0x2);
    } else {
        if (_0x535f67(0x7) === 'BLmvf') {
            if (i % 0x2 == 0x0)
                sum += v - 0x0;
            else
                sum += over((v - 0x0) * 0x2);
        } else {
            for (var j = 0x0; j < ary[_0x535f67(0x8)]; j++) {
                for (var s = 0x0; s < 0xf4240; s++) {
                    dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
                }
            }
        }
    }
});
var dp = [];
for (var i = 0x0; i <= 0x7; i++) {
    dp[i] = [];
    for (var s = 0x0; s < 0xf4240; s++)
        dp[i][s] = ![];
}
function a0_0x4279(eRsOLG, key) {
    var stringArray = a0_0x1d43();
    a0_0x4279 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4279(eRsOLG, key);
}
function a0_0x1d43() {
    var _0x5156f2 = [
        '/dev/stdin',
        'utf8',
        'shift',
        'split',
        'map',
        'forEach',
        'push',
        'BLmvf',
        'length',
        'log'
    ];
    a0_0x1d43 = function () {
        return _0x5156f2;
    };
    return a0_0x1d43();
}
dp[0x0][sum] = 0x1;
for (var i = 0x0; i < k[a0_0x5150df(0x8)]; i++) {
    for (var j = 0x0; j < ary[a0_0x5150df(0x8)]; j++) {
        for (var s = 0x0; s < 0xf4240; s++) {
            dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
        }
    }
}
var ans = 0x0;
for (var s = 0x0; s < 0x186a0; s++)
    ans += dp[k[a0_0x5150df(0x8)]][s * 0xa];
console[a0_0x5150df(0x9)](ans);