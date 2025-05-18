function a0_0x5a6a(CxfYpl, key) {
    var stringArray = a0_0x45b1();
    a0_0x5a6a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a6a(CxfYpl, key);
}
function a0_0x45b1() {
    var _0xd9f754 = [
        'log',
        'readFileSync',
        '/dev/stdin',
        'split',
        'map'
    ];
    a0_0x45b1 = function () {
        return _0xd9f754;
    };
    return a0_0x45b1();
}
var a0_0x33cffc = a0_0x5a6a;
log = console[a0_0x33cffc(0x0)];
var stdin = require('fs')[a0_0x33cffc(0x1)](a0_0x33cffc(0x2), 'UTF-8');
var lines = stdin[a0_0x33cffc(0x3)]('\x0a');
var N = lines[0x0]['split']('\x20')[a0_0x33cffc(0x4)](Number)[0x0];
var T = lines['slice'](0x1)['filter'](v => v !== '')[a0_0x33cffc(0x4)](Number);
function gcd(a, b) {
    if (b === 0x0)
        return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
for (var i = 0x1; i < N; i++) {
    T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);