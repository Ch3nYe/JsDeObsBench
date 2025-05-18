var a0_0x190d06 = a0_0x1a14;
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()[a0_0x190d06(0x0)]('\x0a');
var dp = [
    0x1,
    0x2,
    0x4
];
function a0_0x27d3() {
    var _0x41deae = [
        'split',
        'shift',
        'log',
        'ceil'
    ];
    a0_0x27d3 = function () {
        return _0x41deae;
    };
    return a0_0x27d3();
}
function a0_0x1a14(NHhhPT, key) {
    var stringArray = a0_0x27d3();
    a0_0x1a14 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a14(NHhhPT, key);
}
for (var i = 0x3; i <= 0x1f; i++) {
    dp[i] = dp[i - 0x1] + dp[i - 0x2] + dp[i - 0x3];
}
while (!![]) {
    var n = Arr[a0_0x190d06(0x1)]() - 0x0;
    if (n == 0x0)
        break;
    console[a0_0x190d06(0x2)](Math[a0_0x190d06(0x3)](dp[n - 0x1] / 0xe42));
}