var a0_0x16da08 = a0_0x40c9;
var input = require('fs')[a0_0x16da08(0x0)](a0_0x16da08(0x1), a0_0x16da08(0x2));
var Arr = input[a0_0x16da08(0x3)]()['split']('\x0a')[a0_0x16da08(0x4)](Number);
Arr[a0_0x16da08(0x5)]();
function a0_0x40c9(qicsnz, key) {
    var stringArray = a0_0x11bb();
    a0_0x40c9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x40c9(qicsnz, key);
}
Arr[a0_0x16da08(0x6)](function (a, b) {
    return a - b;
});
var max = Arr[Arr[a0_0x16da08(0x7)] - 0x1];
function a0_0x11bb() {
    var _0x35b80c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'shift',
        'sort',
        'length',
        'sqrt',
        'push',
        'indexOf',
        'log'
    ];
    a0_0x11bb = function () {
        return _0x35b80c;
    };
    return a0_0x11bb();
}
var arr = [0x2];
for (var i = 0x3; i <= max; i = i + 0x2) {
    var a = !![];
    var sqrt = ~~Math[a0_0x16da08(0x8)](i) + 0x1;
    for (var j = 0x0; j < arr['length']; j++) {
        if (arr[j] > sqrt)
            break;
        if (i % arr[j] == 0x0) {
            a = ![];
            break;
        }
    }
    if (a)
        arr[a0_0x16da08(0x9)](i);
}
var num = 0x0;
var f = 0x0;
for (var i = 0x0; i < Arr[a0_0x16da08(0x7)]; i++) {
    if (Arr[i] != 0x2 && Arr[i] % 0x2 == 0x0)
        continue;
    var index = arr[a0_0x16da08(0xa)](Arr[i], f);
    if (index != -0x1) {
        f = index;
        num++;
    }
}
console[a0_0x16da08(0xb)](num);