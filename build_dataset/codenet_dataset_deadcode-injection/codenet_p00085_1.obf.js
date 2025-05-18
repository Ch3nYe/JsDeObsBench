function a0_0x8640() {
    var _0x4154b1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        '0\x200',
        'log'
    ];
    a0_0x8640 = function () {
        return _0x4154b1;
    };
    return a0_0x8640();
}
var a0_0x744710 = a0_0x260a;
var input = require('fs')[a0_0x744710(0x0)](a0_0x744710(0x1), a0_0x744710(0x2));
function a0_0x260a(nfUrhQ, key) {
    var stringArray = a0_0x8640();
    a0_0x260a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x260a(nfUrhQ, key);
}
var Arr = input[a0_0x744710(0x3)]()[a0_0x744710(0x4)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x744710(0x5)]; i++) {
    if (Arr[i] == a0_0x744710(0x6))
        break;
    var arr = Arr[i][a0_0x744710(0x4)]('\x20')['map'](Number);
    var N = arr[0x0];
    var m = arr[0x1];
    var n = {};
    for (var j = 0x0; j < N; j++)
        n[j] = null;
    var x = 0x0;
    for (var k = 0x0; k < N; k++) {
        var y = 0x0;
        do {
            x++;
            if (x == N)
                x = 0x0;
            if (n[x] === null)
                y++;
        } while (y != m);
        n[x] = k;
    }
    console[a0_0x744710(0x7)](x);
}