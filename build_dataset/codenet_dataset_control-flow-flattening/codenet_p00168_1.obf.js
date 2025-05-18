var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var dp = [
    0x1,
    0x2,
    0x4
];
for (var i = 0x3; i <= 0x1f; i++) {
    dp[i] = dp[i - 0x1] + dp[i - 0x2] + dp[i - 0x3];
}
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    console['log'](Math['ceil'](dp[n - 0x1] / 0xe42));
}