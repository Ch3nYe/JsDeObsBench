var a0_0x4eabd2 = a0_0x102d;
function a0_0x8ae3() {
    var _0x14122a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x8ae3 = function () {
        return _0x14122a;
    };
    return a0_0x8ae3();
}
var input = require('fs')[a0_0x4eabd2(0x0)](a0_0x4eabd2(0x1), a0_0x4eabd2(0x2));
var lines = input['trim']()[a0_0x4eabd2(0x3)]('\x0a');
var line;
var rectangles = 0x0;
var lozenges = 0x0;
function a0_0x102d(fejJBE, key) {
    var stringArray = a0_0x8ae3();
    a0_0x102d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x102d(fejJBE, key);
}
while (line = lines[a0_0x4eabd2(0x4)]()) {
    var l = line['split'](',')[a0_0x4eabd2(0x5)](function (n) {
        return +n;
    });
    var a = l[0x0];
    var b = l[0x1];
    var c = l[0x2];
    if (a * a + b * b == c * c)
        rectangles++;
    else if (a == b)
        lozenges++;
}
console['log'](rectangles);
console[a0_0x4eabd2(0x6)](lozenges);