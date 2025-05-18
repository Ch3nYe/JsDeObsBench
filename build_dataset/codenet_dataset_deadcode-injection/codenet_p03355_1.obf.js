var a0_0x3f22fc = a0_0xb8e5;
var toInt = x => parseInt(x, 0xa);
function a0_0xb8e5(YvHsLd, key) {
    var stringArray = a0_0xbebf();
    a0_0xb8e5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb8e5(YvHsLd, key);
}
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x2dcef1 = a0_0xb8e5;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x2dcef1(0x0)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x48f836 = a0_0xb8e5;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x48f836(0x0)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x3f22fc(0x1)](a0_0x3f22fc(0x2), a0_0x3f22fc(0x3)));
function a0_0xbebf() {
    var _0x2799d1 = [
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'slice',
        'indexOf',
        'sort',
        'log'
    ];
    a0_0xbebf = function () {
        return _0x2799d1;
    };
    return a0_0xbebf();
}
function Main(input) {
    var _0x5ad9db = a0_0xb8e5;
    var input = input[_0x5ad9db(0x4)]('\x0a');
    var s = input[0x0];
    var k = toInt(input[0x1]);
    var l = s[_0x5ad9db(0x0)];
    var arr = [];
    var x;
    for (var i = 0x0; i < l; i++) {
        for (var j = i; j < i + 0x5; j++) {
            x = s[_0x5ad9db(0x5)](i, j + 0x1);
            if (arr[_0x5ad9db(0x6)](x) === -0x1)
                arr['push'](x);
        }
    }
    arr[_0x5ad9db(0x7)]((a, b) => a < b ? -0x1 : 0x1);
    ans = arr[k - 0x1];
    console[_0x5ad9db(0x8)](ans);
}