var a0_0x333a7b = a0_0x2eb9;
var input = require('fs')[a0_0x333a7b(0x0)](a0_0x333a7b(0x1), a0_0x333a7b(0x2));
var arr = input[a0_0x333a7b(0x3)]()[a0_0x333a7b(0x4)]('\x0a');
function a0_0x2eb9(eItkFV, key) {
    var stringArray = a0_0x2944();
    a0_0x2eb9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2eb9(eItkFV, key);
}
function a0_0x2944() {
    var _0x4167e9 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'length',
        'forEach',
        'log'
    ];
    a0_0x2944 = function () {
        return _0x4167e9;
    };
    return a0_0x2944();
}
while (!![]) {
    var nab = arr['shift']();
    if (nab == '0\x200\x200')
        break;
    nab = nab['split']('\x20')[a0_0x333a7b(0x5)](Number);
    var n = nab[0x0];
    var ab = [
        nab[0x1],
        nab[0x2]
    ];
    var dp = [];
    for (var i = 0x0; i <= n; i++)
        dp[i] = ![];
    dp[0x0] = !![];
    for (var i = 0x0; i < ab[a0_0x333a7b(0x6)]; i++) {
        for (var j = 0x0; j <= n; j++) {
            if (dp[j])
                dp[j + ab[i]] = !![];
        }
    }
    var cnt = 0x0;
    dp[a0_0x333a7b(0x7)](function (v) {
        if (v == ![])
            cnt++;
    });
    console[a0_0x333a7b(0x8)](cnt);
}