var a0_0x29aba8 = a0_0x845e;
function a0_0x845e(DojGqL, key) {
    var stringArray = a0_0x3b47();
    a0_0x845e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x845e(DojGqL, key);
}
var input = require('fs')['readFileSync'](a0_0x29aba8(0x0), 'utf8');
var Arr = input[a0_0x29aba8(0x1)]()['split']('\x0a');
function a0_0x3b47() {
    var _0x382fcf = [
        '/dev/stdin',
        'trim',
        'shift',
        'map',
        'push',
        'sort',
        'log',
        'length'
    ];
    a0_0x3b47 = function () {
        return _0x382fcf;
    };
    return a0_0x3b47();
}
while (!![]) {
    var n = Arr[a0_0x29aba8(0x2)]() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x29aba8(0x2)]()['split']('\x20')[a0_0x29aba8(0x3)](Number);
        var a = arr[0x1] * 0x3c + arr[0x2];
        var b = arr[0x3] * 0x3c + arr[0x4];
        var c = arr[0x5] * 0x3c + arr[0x6];
        var d = arr[0x7] * 0x3c + arr[0x8];
        team[a0_0x29aba8(0x4)]([
            arr[0x0],
            a + b + c + d
        ]);
    }
    team[a0_0x29aba8(0x5)](function (a, b) {
        a = a[0x1];
        b = b[0x1];
        return a - b;
    });
    console['log'](team[0x0][0x0]);
    console[a0_0x29aba8(0x6)](team[0x1][0x0]);
    console['log'](team[team[a0_0x29aba8(0x7)] - 0x2][0x0]);
}