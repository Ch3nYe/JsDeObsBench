function a0_0x1690() {
    var _0xf40790 = [
        'map',
        'length',
        'readFileSync',
        '/dev/stdin',
        'split',
        'log'
    ];
    a0_0x1690 = function () {
        return _0xf40790;
    };
    return a0_0x1690();
}
var a0_0xf39004 = a0_0x19aa;
var toInt = x => parseInt(x, 0xa);
function a0_0x19aa(JlPFrF, key) {
    var stringArray = a0_0x1690();
    a0_0x19aa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19aa(JlPFrF, key);
}
var toIntArr = arr => arr[a0_0xf39004(0x0)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x16681d = a0_0x19aa;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x16681d(0x1)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x5dc59c = a0_0x19aa;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x5dc59c(0x1)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0xf39004(0x2)](a0_0xf39004(0x3), 'utf8'));
function Main(input) {
    var _0x30e578 = a0_0x19aa;
    var input = input['split']('\x0a');
    var n = toInt(input[0x0]);
    var as = toIntArr(input[0x1][_0x30e578(0x4)]('\x20'));
    as[_0x30e578(0x1)] = n;
    var ans = -n;
    for (var i = 0x0; i < n; i++) {
        ans += as[i];
    }
    console[_0x30e578(0x5)](ans);
}