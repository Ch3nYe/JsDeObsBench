var a0_0x26ad6c = a0_0x30fa;
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0x26ad6c(0x0)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function a0_0x30fa(qNClco, key) {
    var stringArray = a0_0x4056();
    a0_0x30fa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x30fa(qNClco, key);
}
function max() {
    var _0xc54beb = a0_0x30fa;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0xc54beb(0x1)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync'](a0_0x26ad6c(0x2), a0_0x26ad6c(0x3)));
function a0_0x4056() {
    var _0x34c00e = [
        'map',
        'length',
        '/dev/stdin',
        'utf8',
        'split',
        'VikJm',
        'XagVT',
        'log'
    ];
    a0_0x4056 = function () {
        return _0x34c00e;
    };
    return a0_0x4056();
}
function Main(input) {
    var _0x59ca54 = a0_0x30fa;
    var input = input[_0x59ca54(0x4)]('\x0a');
    var n = toInt(input[0x0]);
    var as = toIntArr(input[0x1][_0x59ca54(0x4)]('\x20'));
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        if (_0x59ca54(0x5) !== _0x59ca54(0x5)) {
            if (bs[i] < min) {
                min = bs[i];
                ans = i;
            }
        } else {
            sum += as[i];
        }
    }
    var bs = as[_0x59ca54(0x0)]((el, ind, arr) => abs(sum - n * el));
    var ans = 0x0;
    var min = bs[0x0];
    for (var i = 0x1; i < n; i++) {
        if (bs[i] < min) {
            if ('cwDpF' === _0x59ca54(0x6)) {
                sum += as[i];
            } else {
                min = bs[i];
                ans = i;
            }
        }
    }
    console[_0x59ca54(0x7)](ans);
}