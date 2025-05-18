var a0_0x5ba649 = a0_0x185a;
var input = require('fs')[a0_0x5ba649(0x0)](a0_0x5ba649(0x1), a0_0x5ba649(0x2));
function a0_0x185a(TVbhWp, key) {
    var stringArray = a0_0x9d3e();
    a0_0x185a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x185a(TVbhWp, key);
}
var arr = input['trim']()[a0_0x5ba649(0x3)]('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0x5ba649(0x4)]()[a0_0x5ba649(0x3)]('\x20')['map'](Number);
var b = [];
function a0_0x9d3e() {
    var _0x1792b0 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'length',
        'log',
        'join'
    ];
    a0_0x9d3e = function () {
        return _0x1792b0;
    };
    return a0_0x9d3e();
}
var memo = '';
for (var i = 0x0; i < a[a0_0x5ba649(0x5)]; i++) {
    if (a[i] !== memo)
        b['push'](a[i]);
    memo = a[i];
}
console[a0_0x5ba649(0x6)](b[a0_0x5ba649(0x7)]('\x20'));