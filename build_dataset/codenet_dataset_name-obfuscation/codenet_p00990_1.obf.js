function over(_0x161372) {
    if (_0x161372 >= 0xa)
        _0x161372 = _0x161372 - 0xa + 0x1;
    return _0x161372;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var id = arr['shift']()['split']('');
var a = arr['shift']() - 0x0;
var ary = arr['shift']()['split']('\x20')['map'](Number);
var k = [];
var sum = 0x0;
id['forEach'](function (_0x4e4a12, _0xf76f05) {
    if (_0x4e4a12 == '*') {
        if (_0xf76f05 % 0x2 == 0x0)
            k['push'](0x1);
        else
            k['push'](0x2);
    } else {
        if (_0xf76f05 % 0x2 == 0x0)
            sum += _0x4e4a12 - 0x0;
        else
            sum += over((_0x4e4a12 - 0x0) * 0x2);
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