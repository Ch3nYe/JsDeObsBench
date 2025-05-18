var a0_0x1c4e1b = a0_0x1411;
var input = require('fs')[a0_0x1c4e1b(0x0)](a0_0x1c4e1b(0x1), 'utf8');
function a0_0x2bdb() {
    var _0x18c852 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'min',
        'log'
    ];
    a0_0x2bdb = function () {
        return _0x18c852;
    };
    return a0_0x2bdb();
}
var Arr = input[a0_0x1c4e1b(0x2)]()[a0_0x1c4e1b(0x3)]('\x0a');
function a0_0x1411(ZTIRBR, key) {
    var stringArray = a0_0x2bdb();
    a0_0x1411 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1411(ZTIRBR, key);
}
while (!![]) {
    var nS = Arr['shift']()[a0_0x1c4e1b(0x3)]('\x20')['map'](Number);
    var n = nS[0x0];
    var S = nS[0x1];
    if (n == 0x0 && S == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i <= 0x64; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr[a0_0x1c4e1b(0x4)]() - 0x0;
        arr[v]++;
    }
    var cnt = 0x0;
    for (var i = 0x0; i <= 0x64; i++) {
        for (var j = i + 0x1; j <= 0x64; j++) {
            if (i + j > S)
                cnt += Math[a0_0x1c4e1b(0x5)](arr[i], arr[j]);
        }
    }
    console[a0_0x1c4e1b(0x6)](cnt);
}