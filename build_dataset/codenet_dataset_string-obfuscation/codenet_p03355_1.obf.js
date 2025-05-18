var a0_0xb2efe8 = a0_0x817a;
(function (stringArrayFunction, comparisonValue) {
    var _0x2677b2 = a0_0x817a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2677b2(0xff)) / 0x1 * (-parseInt(_0x2677b2(0x103)) / 0x2) + parseInt(_0x2677b2(0x102)) / 0x3 + -parseInt(_0x2677b2(0x10d)) / 0x4 * (parseInt(_0x2677b2(0x10c)) / 0x5) + -parseInt(_0x2677b2(0x108)) / 0x6 * (-parseInt(_0x2677b2(0x10f)) / 0x7) + -parseInt(_0x2677b2(0x106)) / 0x8 * (parseInt(_0x2677b2(0x10a)) / 0x9) + -parseInt(_0x2677b2(0x111)) / 0xa * (-parseInt(_0x2677b2(0x10b)) / 0xb) + -parseInt(_0x2677b2(0x107)) / 0xc * (-parseInt(_0x2677b2(0xfd)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d33, 0x9791f));
function a0_0x5d33() {
    var _0x3456d3 = [
        'log',
        '993387uCLtTg',
        '4aNofcA',
        'push',
        'sort',
        '6689272MOvEQL',
        '4545624lOyqmH',
        '1290CgOLxf',
        'split',
        '9WEwNpl',
        '1132538MTReaM',
        '9395soLitI',
        '2600rwrfWe',
        'slice',
        '27307BcKUMU',
        'length',
        '10rCxJRW',
        '52ohiHSE',
        'map',
        '54835LkDsfo',
        '/dev/stdin'
    ];
    a0_0x5d33 = function () {
        return _0x3456d3;
    };
    return a0_0x5d33();
}
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[a0_0xb2efe8(0xfe)](x => toInt(x));
function a0_0x817a(SjkcNb, key) {
    var stringArray = a0_0x5d33();
    a0_0x817a = function (index, key) {
        index = index - 0xfd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x817a(SjkcNb, key);
}
var abs = x => x > 0x0 ? x : -x;
function min() {
    var _0x37b62c = a0_0xb2efe8;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x37b62c(0x110)]; i++)
        if (rest[i] < val)
            val = rest[i];
    return val;
}
function max() {
    var _0x37ce99 = a0_0xb2efe8;
    var rest = arguments, val = rest[0x0];
    for (var i = 0x1; i < rest[_0x37ce99(0x110)]; i++)
        if (rest[i] > val)
            val = rest[i];
    return val;
}
Main(require('fs')['readFileSync'](a0_0xb2efe8(0x100), 'utf8'));
function Main(input) {
    var _0x2af318 = a0_0xb2efe8;
    var input = input[_0x2af318(0x109)]('\x0a');
    var s = input[0x0];
    var k = toInt(input[0x1]);
    var l = s['length'];
    var arr = [];
    var x;
    for (var i = 0x0; i < l; i++) {
        for (var j = i; j < i + 0x5; j++) {
            x = s[_0x2af318(0x10e)](i, j + 0x1);
            if (arr['indexOf'](x) === -0x1)
                arr[_0x2af318(0x104)](x);
        }
    }
    arr[_0x2af318(0x105)]((a, b) => a < b ? -0x1 : 0x1);
    ans = arr[k - 0x1];
    console[_0x2af318(0x101)](ans);
}