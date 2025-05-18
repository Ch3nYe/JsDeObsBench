var a0_0x3b5247 = a0_0x1d9e;
var input = require('fs')[a0_0x3b5247(0x0)](a0_0x3b5247(0x1), a0_0x3b5247(0x2));
var Arr = input[a0_0x3b5247(0x3)]()[a0_0x3b5247(0x4)]('\x0a');
var n = Arr[a0_0x3b5247(0x5)]() - 0x0;
function a0_0x9e85() {
    var _0x126cad = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'length',
        'push',
        'slice',
        'reverse',
        'join'
    ];
    a0_0x9e85 = function () {
        return _0x126cad;
    };
    return a0_0x9e85();
}
function a0_0x1d9e(bcialL, key) {
    var stringArray = a0_0x9e85();
    a0_0x1d9e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d9e(bcialL, key);
}
for (var I = 0x0; I < n; I++) {
    var str = Arr['shift']();
    var arr = [];
    for (var i = 0x1; i < str[a0_0x3b5247(0x6)]; i++) {
        arr[a0_0x3b5247(0x7)]([
            str['slice'](0x0, i),
            str[a0_0x3b5247(0x8)](i, str[a0_0x3b5247(0x6)])
        ]);
    }
    var obj = {};
    for (var i = 0x0; i < arr[a0_0x3b5247(0x6)]; i++) {
        var A = arr[i][0x0];
        var B = arr[i][0x1];
        var a = A[a0_0x3b5247(0x4)]('')[a0_0x3b5247(0x9)]()[a0_0x3b5247(0xa)]('');
        var b = B[a0_0x3b5247(0x4)]('')[a0_0x3b5247(0x9)]()[a0_0x3b5247(0xa)]('');
        obj[A + B] = !![];
        obj[A + b] = !![];
        obj[a + B] = !![];
        obj[a + b] = !![];
        obj[B + A] = !![];
        obj[B + a] = !![];
        obj[b + A] = !![];
        obj[b + a] = !![];
    }
    console['log'](Object['keys'](obj)[a0_0x3b5247(0x6)]);
}