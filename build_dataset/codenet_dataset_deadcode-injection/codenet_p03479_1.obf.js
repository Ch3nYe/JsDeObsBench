var a0_0x4028e5 = a0_0x4e81;
var toInt = x => parseInt(x, 0xa);
function a0_0xde7a() {
    var _0x2f6bb2 = [
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split'
    ];
    a0_0xde7a = function () {
        return _0x2f6bb2;
    };
    return a0_0xde7a();
}
var toIntArr = arr => arr['map'](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x207372 = a0_0x4e81;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x207372(0x0)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x32fac6 = a0_0x4e81;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x32fac6(0x0)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x4028e5(0x1)](a0_0x4028e5(0x2), a0_0x4028e5(0x3)));
function a0_0x4e81(BJpDUd, key) {
    var stringArray = a0_0xde7a();
    a0_0x4e81 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e81(BJpDUd, key);
}
function Main(input) {
    var _0x60c4a8 = a0_0x4e81;
    var input = input[_0x60c4a8(0x4)]('\x0a');
    var nk = toIntArr(input[0x0]['split']('\x20'));
    var x = nk[0x0];
    var y = nk[0x1];
    var a = y / x;
    var temp = 0x1;
    var ans = 0x0;
    while (temp <= a) {
        temp *= 0x2;
        ans++;
    }
    console['log'](ans);
}