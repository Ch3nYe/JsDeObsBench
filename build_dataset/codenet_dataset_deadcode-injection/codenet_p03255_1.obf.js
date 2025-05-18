var a0_0x270024 = a0_0x2ff5;
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0x270024(0x0)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x42f25f = a0_0x2ff5;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x42f25f(0x1)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x504cdd = a0_0x2ff5;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x504cdd(0x1)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x270024(0x2)]('/dev/stdin', a0_0x270024(0x3)));
function a0_0x367b() {
    var _0x59da0f = [
        'map',
        'length',
        'readFileSync',
        'utf8',
        'split',
        'log'
    ];
    a0_0x367b = function () {
        return _0x59da0f;
    };
    return a0_0x367b();
}
function a0_0x2ff5(eLlRWC, key) {
    var stringArray = a0_0x367b();
    a0_0x2ff5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ff5(eLlRWC, key);
}
function Main(input) {
    var _0x123b29 = a0_0x2ff5;
    var input = input[_0x123b29(0x4)]('\x0a');
    var temp = toIntArr(input[0x0][_0x123b29(0x4)]('\x20'));
    var n = temp[0x0];
    var x = temp[0x1];
    var xs = toIntArr(input[0x1][_0x123b29(0x4)]('\x20'));
    var ss = [xs[0x0]];
    for (var i = 0x1; i < n; i++) {
        ss[i] = xs[i] + ss[i - 0x1];
    }
    var ans = (n + 0x1) * x;
    var has = 0x0;
    for (var i = n - 0x1; i > -0x1; i--) {
        has++;
        if (has > 0x2 && x < ss[i] * (has - 0x1) * 0x2 - xs[i] * 0x2) {
            has = 0x1;
            ans += x;
        }
        ans += xs[i] * (max(has, 0x2) * 0x2 + 0x1);
    }
    console[_0x123b29(0x5)](ans);
}