var a0_0x3a205e = a0_0x3eba;
function a0_0x3eba(lumWIh, key) {
    var stringArray = a0_0x325f();
    a0_0x3eba = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3eba(lumWIh, key);
}
var input = require('fs')['readFileSync'](a0_0x3a205e(0x0), a0_0x3a205e(0x1));
function a0_0x325f() {
    var _0x2b334b = [
        '/dev/stdin',
        'utf8',
        'map',
        'log',
        'Bob',
        'Alice',
        'Draw'
    ];
    a0_0x325f = function () {
        return _0x2b334b;
    };
    return a0_0x325f();
}
var [t, tt, r, rr] = input['trim']()['split']('\x20')[a0_0x3a205e(0x2)](Number);
if (r == -0x1 || rr == -0x1) {
    if (t > tt)
        console[a0_0x3a205e(0x3)](a0_0x3a205e(0x4));
    else if (t < tt)
        console['log'](a0_0x3a205e(0x5));
    else if (t == tt)
        console[a0_0x3a205e(0x3)](a0_0x3a205e(0x6));
} else if (r > rr)
    console[a0_0x3a205e(0x3)]('Alice');
else if (r < rr)
    console['log'](a0_0x3a205e(0x4));
else if (r == rr)
    console[a0_0x3a205e(0x3)](a0_0x3a205e(0x6));