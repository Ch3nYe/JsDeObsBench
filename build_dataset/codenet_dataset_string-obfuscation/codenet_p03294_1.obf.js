function a0_0x469a(VHqGxF, key) {
    var stringArray = a0_0x4727();
    a0_0x469a = function (index, key) {
        index = index - 0x109;
        var value = stringArray[index];
        return value;
    };
    return a0_0x469a(VHqGxF, key);
}
var a0_0xcf9e1b = a0_0x469a;
(function (stringArrayFunction, comparisonValue) {
    var _0x130e32 = a0_0x469a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x130e32(0x10f)) / 0x1 * (parseInt(_0x130e32(0x109)) / 0x2) + parseInt(_0x130e32(0x116)) / 0x3 + parseInt(_0x130e32(0x10d)) / 0x4 * (-parseInt(_0x130e32(0x111)) / 0x5) + parseInt(_0x130e32(0x112)) / 0x6 + parseInt(_0x130e32(0x10a)) / 0x7 + parseInt(_0x130e32(0x117)) / 0x8 + -parseInt(_0x130e32(0x10e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4727, 0xa4f20));
var toInt = x => parseInt(x, 0xa);
function a0_0x4727() {
    var _0x2d3764 = [
        '2HZuNSf',
        '7560553yfniRE',
        'split',
        'log',
        '14116wTdnQi',
        '8923977JGiHpY',
        '192886YbmPLs',
        'utf8',
        '1135tDHXZP',
        '3838680iwmoII',
        'readFileSync',
        'map',
        'length',
        '962556PmHOlM',
        '1877240FECDvv'
    ];
    a0_0x4727 = function () {
        return _0x2d3764;
    };
    return a0_0x4727();
}
var toIntArr = arr => arr[a0_0xcf9e1b(0x114)](x => toInt(x));
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0xa477d6 = a0_0xcf9e1b;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0xa477d6(0x115)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest['length']; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')[a0_0xcf9e1b(0x113)]('/dev/stdin', a0_0xcf9e1b(0x110)));
function Main(input) {
    var _0x22d1d7 = a0_0xcf9e1b;
    var input = input[_0x22d1d7(0x10b)]('\x0a');
    var n = toInt(input[0x0]);
    var as = toIntArr(input[0x1][_0x22d1d7(0x10b)]('\x20'));
    as['length'] = n;
    var ans = -n;
    for (var i = 0x0; i < n; i++) {
        ans += as[i];
    }
    console[_0x22d1d7(0x10c)](ans);
}