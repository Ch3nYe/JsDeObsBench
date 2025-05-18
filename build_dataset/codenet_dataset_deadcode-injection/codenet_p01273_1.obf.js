var a0_0x272131 = a0_0x4f04;
var data = require('fs')[a0_0x272131(0x0)](a0_0x272131(0x1), 'utf8');
function a0_0x15e0() {
    var _0x4b4995 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'map',
        'split',
        'push',
        'sort',
        'forEach',
        'log'
    ];
    a0_0x15e0 = function () {
        return _0x4b4995;
    };
    return a0_0x15e0();
}
function a0_0x4f04(ATmDdA, key) {
    var stringArray = a0_0x15e0();
    a0_0x4f04 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f04(ATmDdA, key);
}
var input = data[a0_0x272131(0x2)]()['split']('\x0a');
var line = 0x0;
while (!![]) {
    var nm = input[line]['split']('\x20')[a0_0x272131(0x3)](Number);
    line++;
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var infected = [];
    for (var i = 0x0; i < n; i++)
        infected[i] = !![];
    infected[0x0] = ![];
    var tsd = [];
    for (var i = 0x0; i < m; i++) {
        var packet = input[line][a0_0x272131(0x4)]('\x20')[a0_0x272131(0x3)](Number);
        line++;
        tsd[a0_0x272131(0x5)]([
            packet[0x0],
            packet[0x1] - 0x1,
            packet[0x2] - 0x1
        ]);
    }
    tsd[a0_0x272131(0x6)](function (a, b) {
        return a[0x0] - b[0x0];
    });
    tsd[a0_0x272131(0x7)](function (packet) {
        var s = packet[0x1];
        var d = packet[0x2];
        if (!infected[s])
            infected[d] = ![];
    });
    var answer = 0x0;
    infected[a0_0x272131(0x7)](function (packet) {
        if (!packet)
            answer++;
    });
    console[a0_0x272131(0x8)](answer);
}