var a0_0x568615 = a0_0x6ad8;
var input = require('fs')[a0_0x568615(0x0)]('/dev/stdin', a0_0x568615(0x1));
var Arr = input['trim']()[a0_0x568615(0x2)]('\x0a');
var D = Arr['shift']() - 0x0;
var x = Arr['shift']() - 0x0;
var X = [];
function a0_0x6ad8(uzRBMX, key) {
    var stringArray = a0_0x3c3f();
    a0_0x6ad8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6ad8(uzRBMX, key);
}
for (var i = 0x0; i < x; i++) {
    var v = Arr[a0_0x568615(0x3)]()[a0_0x568615(0x2)]('\x20');
    if (v[0x0] == 'D')
        X['push'](v[0x1] - 0x0);
}
X[a0_0x568615(0x4)](function (a, b) {
    return b - a;
});
function a0_0x3c3f() {
    var _0x4390b6 = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'sort',
        'push',
        'length',
        'log'
    ];
    a0_0x3c3f = function () {
        return _0x4390b6;
    };
    return a0_0x3c3f();
}
var y = Arr[a0_0x568615(0x3)]() - 0x0;
var Y = [];
for (var i = 0x0; i < y; i++) {
    var v = Arr['shift']()[a0_0x568615(0x2)]('\x20');
    if (v[0x0] == 'DD')
        Y[a0_0x568615(0x5)](v[0x1] - 0x0);
}
Y['sort'](function (a, b) {
    return b - a;
});
var max = 0x0;
for (var x = 0x0; x <= X[a0_0x568615(0x6)]; x++) {
    for (var y = 0x0; y <= Y[a0_0x568615(0x6)]; y++) {
        if (D < x + y * 0x2)
            break;
        var sum = 0x0;
        for (var i = 0x0; i < x; i++)
            sum += X[i];
        for (var i = 0x0; i < y; i++)
            sum += Y[i];
        max = Math['max'](max, sum);
    }
}
console[a0_0x568615(0x7)](max);