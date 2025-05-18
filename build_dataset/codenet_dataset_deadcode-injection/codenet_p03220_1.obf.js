var a0_0x28302f = a0_0x1991;
function a0_0x1991(lCJLXV, key) {
    var stringArray = a0_0x200d();
    a0_0x1991 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1991(lCJLXV, key);
}
var toInt = x => parseInt(x, 0xa);
function a0_0x200d() {
    var _0x2711c2 = [
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'YgdNN',
        'log'
    ];
    a0_0x200d = function () {
        return _0x2711c2;
    };
    return a0_0x200d();
}
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x304f16 = a0_0x1991;
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; i < rest[_0x304f16(0x0)]; i++)
        if (rest[i] < v)
            v = rest[i];
    return v;
}
function max() {
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] > v)
            v = rest[i];
    return v;
}
function gcd() {
    var rest = arguments, v = rest[0x0], temp = (a, b) => b ? temp(b, a % b) : a;
    for (var i = 0x1; i < rest['length']; i++)
        v = temp(v, rest[i]);
    return v;
}
Main(require('fs')[a0_0x28302f(0x1)](a0_0x28302f(0x2), a0_0x28302f(0x3)));
function Main(input) {
    var _0x114649 = a0_0x1991;
    var input = input[_0x114649(0x4)]('\x0a');
    var n = toInt(input[0x0]);
    var ta = toIntArr(input[0x1]['split']('\x20'));
    var hs = toIntArr(input[0x2][_0x114649(0x4)]('\x20'));
    var t = ta[0x0];
    var a = ta[0x1];
    var ans = 0x1;
    var x = abs(t - a - 0.006 * hs[0x0]), y;
    for (var i = 0x1; i < n; i++) {
        if (_0x114649(0x5) !== _0x114649(0x5)) {
            y = abs(t - a - 0.006 * hs[i]);
            if (y < x) {
                ans = i + 0x1;
                x = y;
            }
        } else {
            y = abs(t - a - 0.006 * hs[i]);
            if (y < x) {
                ans = i + 0x1;
                x = y;
            }
        }
    }
    console[_0x114649(0x6)](ans);
}