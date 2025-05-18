var a0_0x492bb5 = a0_0x7904;
var input = require('fs')[a0_0x492bb5(0x0)](a0_0x492bb5(0x1), a0_0x492bb5(0x2));
var Arr = input[a0_0x492bb5(0x3)]()[a0_0x492bb5(0x4)]('\x0a');
function a0_0x51b6() {
    var _0x41bf59 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'push',
        'sum',
        'sort',
        'forEach',
        'log',
        'join'
    ];
    a0_0x51b6 = function () {
        return _0x41bf59;
    };
    return a0_0x51b6();
}
function a0_0x7904(dltFcR, key) {
    var stringArray = a0_0x51b6();
    a0_0x7904 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7904(dltFcR, key);
}
while (!![]) {
    var NM = Arr[a0_0x492bb5(0x5)]();
    if (NM == a0_0x492bb5(0x6))
        break;
    var nm = NM[a0_0x492bb5(0x4)]('\x20')[a0_0x492bb5(0x7)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var arr = [];
    for (var i = 0x0; i < m; i++)
        arr[a0_0x492bb5(0x8)]({
            'x': i + 0x1,
            'sum': 0x0
        });
    for (var i = 0x0; i < n; i++) {
        var data = Arr[a0_0x492bb5(0x5)]()[a0_0x492bb5(0x4)]('\x20')[a0_0x492bb5(0x7)](Number);
        arr['forEach'](function (v, j) {
            var _0x38497a = a0_0x7904;
            arr[j][_0x38497a(0x9)] += data[j];
        });
    }
    arr[a0_0x492bb5(0xa)](function (a, b) {
        var _0x5f24aa = a0_0x7904;
        a = a[_0x5f24aa(0x9)];
        b = b[_0x5f24aa(0x9)];
        return b - a;
    });
    var c = [];
    arr[a0_0x492bb5(0xb)](function (v) {
        var _0x5bdb66 = a0_0x7904;
        c[_0x5bdb66(0x8)](v['x']);
    });
    console[a0_0x492bb5(0xc)](c[a0_0x492bb5(0xd)]('\x20'));
}