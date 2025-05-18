var a0_0x2bee07 = a0_0x2519;
function a0_0x2519(nhntwO, key) {
    var stringArray = a0_0x425c();
    a0_0x2519 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2519(nhntwO, key);
}
process[a0_0x2bee07(0x0)][a0_0x2bee07(0x1)]();
process[a0_0x2bee07(0x0)]['setEncoding']('utf8');
function a0_0x425c() {
    var _0x1f3346 = [
        'stdin',
        'resume',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x425c = function () {
        return _0x1f3346;
    };
    return a0_0x425c();
}
function Main(input) {
    var _0x51b635 = a0_0x2519;
    var tmp = input[_0x51b635(0x2)]('\x0a');
    var line0 = tmp[0x0][_0x51b635(0x2)]('\x20');
    var line1 = tmp[0x1][_0x51b635(0x2)]('\x20');
    var n = Number(line0[0x0]);
    var k = Number(line1[0x0]);
    var ans = 0x1;
    for (var i = 0x1; i <= n; i++) {
        if (ans < k)
            ans *= 0x2;
        else
            ans += k;
    }
    console[_0x51b635(0x3)](ans);
}
Main(require('fs')[a0_0x2bee07(0x4)](a0_0x2bee07(0x5), a0_0x2bee07(0x6)));