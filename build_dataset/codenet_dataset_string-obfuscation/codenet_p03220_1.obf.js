var a0_0xbc5f9 = a0_0x52db;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b85ef = a0_0x52db;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b85ef(0x1ee)) / 0x1 + parseInt(_0x5b85ef(0x1fa)) / 0x2 + -parseInt(_0x5b85ef(0x1f6)) / 0x3 * (parseInt(_0x5b85ef(0x1ed)) / 0x4) + -parseInt(_0x5b85ef(0x1f8)) / 0x5 + parseInt(_0x5b85ef(0x1f1)) / 0x6 + -parseInt(_0x5b85ef(0x1f5)) / 0x7 * (parseInt(_0x5b85ef(0x1f3)) / 0x8) + parseInt(_0x5b85ef(0x1f0)) / 0x9 * (parseInt(_0x5b85ef(0x1f2)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4d5e, 0x973e0));
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0xbc5f9(0x1f4)](x => toInt(x));
function a0_0x4d5e() {
    var _0x16572b = [
        '3vkWYol',
        'log',
        '1000lyXVyf',
        'length',
        '1091614ZXGfBi',
        '3384636MyCHMX',
        '693774VEceSx',
        'split',
        '9DJWHIz',
        '6915180HOzmOP',
        '10507880iMYgoF',
        '589504OpffmH',
        'map',
        '56qQvPSY'
    ];
    a0_0x4d5e = function () {
        return _0x16572b;
    };
    return a0_0x4d5e();
}
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x589d85 = a0_0xbc5f9;
    var rest = arguments, v = rest[0x0];
    for (var i = 0x1; i < rest[_0x589d85(0x1f9)]; i++)
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
function a0_0x52db(BrsPLc, key) {
    var stringArray = a0_0x4d5e();
    a0_0x52db = function (index, key) {
        index = index - 0x1ed;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52db(BrsPLc, key);
}
function gcd() {
    var _0x52199e = a0_0xbc5f9;
    var rest = arguments, v = rest[0x0], temp = (a, b) => b ? temp(b, a % b) : a;
    for (var i = 0x1; i < rest[_0x52199e(0x1f9)]; i++)
        v = temp(v, rest[i]);
    return v;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var _0x1c6829 = a0_0xbc5f9;
    var input = input['split']('\x0a');
    var n = toInt(input[0x0]);
    var ta = toIntArr(input[0x1]['split']('\x20'));
    var hs = toIntArr(input[0x2][_0x1c6829(0x1ef)]('\x20'));
    var t = ta[0x0];
    var a = ta[0x1];
    var ans = 0x1;
    var x = abs(t - a - 0.006 * hs[0x0]), y;
    for (var i = 0x1; i < n; i++) {
        y = abs(t - a - 0.006 * hs[i]);
        if (y < x) {
            ans = i + 0x1;
            x = y;
        }
    }
    console[_0x1c6829(0x1f7)](ans);
}