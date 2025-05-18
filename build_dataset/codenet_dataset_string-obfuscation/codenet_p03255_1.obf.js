var a0_0x144bad = a0_0x450c;
(function (stringArrayFunction, comparisonValue) {
    var _0x466330 = a0_0x450c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x466330(0x16c)) / 0x1 + parseInt(_0x466330(0x168)) / 0x2 * (parseInt(_0x466330(0x162)) / 0x3) + -parseInt(_0x466330(0x160)) / 0x4 + -parseInt(_0x466330(0x163)) / 0x5 + -parseInt(_0x466330(0x161)) / 0x6 + -parseInt(_0x466330(0x16b)) / 0x7 + parseInt(_0x466330(0x169)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a6d, 0xbeca1));
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0x144bad(0x16d)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x8116cd = a0_0x144bad;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x8116cd(0x164)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function a0_0x450c(JdHRUA, key) {
    var stringArray = a0_0x1a6d();
    a0_0x450c = function (index, key) {
        index = index - 0x160;
        var value = stringArray[index];
        return value;
    };
    return a0_0x450c(JdHRUA, key);
}
function a0_0x1a6d() {
    var _0x4793a5 = [
        'length',
        'readFileSync',
        'utf8',
        'log',
        '23770EBdoQq',
        '32621864sTXqyW',
        'split',
        '10069458rtgoVA',
        '712079RCbBrt',
        'map',
        '1624016exKJAs',
        '4136772YIFjKO',
        '189rywnGT',
        '3994880QWtMAb'
    ];
    a0_0x1a6d = function () {
        return _0x4793a5;
    };
    return a0_0x1a6d();
}
function max() {
    var _0x1443b5 = a0_0x144bad;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x1443b5(0x164)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0x144bad(0x165)]('/dev/stdin', a0_0x144bad(0x166)));
function Main(input) {
    var _0x5ccd52 = a0_0x144bad;
    var input = input[_0x5ccd52(0x16a)]('\x0a');
    var temp = toIntArr(input[0x0]['split']('\x20'));
    var n = temp[0x0];
    var x = temp[0x1];
    var xs = toIntArr(input[0x1]['split']('\x20'));
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
    console[_0x5ccd52(0x167)](ans);
}