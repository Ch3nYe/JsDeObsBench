var a0_0x24bcd9 = a0_0x274f;
function a0_0x274f(kxvYHn, key) {
    var stringArray = a0_0x1d2f();
    a0_0x274f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x274f(kxvYHn, key);
}
var input = require('fs')[a0_0x24bcd9(0x0)](a0_0x24bcd9(0x1), 'utf8');
var Arr = input[a0_0x24bcd9(0x2)]()['split']('\x0a')['map'](Number);
function a0_0x1d2f() {
    var _0xf1480c = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'forEach',
        'log',
        'toFixed'
    ];
    a0_0x1d2f = function () {
        return _0xf1480c;
    };
    return a0_0x1d2f();
}
Arr[a0_0x24bcd9(0x3)](function (v) {
    var _0x5b4f6b = a0_0x274f;
    var arr = [
        0x0,
        v
    ];
    for (var i = 0x2; i <= 0xa; i++) {
        arr[i] = i % 0x2 == 0x0 ? arr[i - 0x1] * 0x2 : arr[i - 0x1] / 0x3;
    }
    var sum = arr['reduce'](function (a, b) {
        return a + b;
    });
    console[_0x5b4f6b(0x4)](sum[_0x5b4f6b(0x5)](0x8));
});