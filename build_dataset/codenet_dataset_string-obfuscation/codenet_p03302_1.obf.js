var a0_0x21059c = a0_0x2ad4;
(function (stringArrayFunction, comparisonValue) {
    var _0xf257f6 = a0_0x2ad4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xf257f6(0x1a6)) / 0x1 + -parseInt(_0xf257f6(0x1a9)) / 0x2 * (parseInt(_0xf257f6(0x1a0)) / 0x3) + parseInt(_0xf257f6(0x19c)) / 0x4 + parseInt(_0xf257f6(0x1a4)) / 0x5 * (-parseInt(_0xf257f6(0x1a7)) / 0x6) + parseInt(_0xf257f6(0x1a3)) / 0x7 + parseInt(_0xf257f6(0x1a2)) / 0x8 * (parseInt(_0xf257f6(0x1aa)) / 0x9) + -parseInt(_0xf257f6(0x19d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x153f, 0x2b8ee));
function Main(s) {
    var _0x5ac9a7 = a0_0x2ad4;
    s = s[_0x5ac9a7(0x19e)]('\x20')[_0x5ac9a7(0x19b)](a => +a);
    var ans = 'x';
    if (s[0x0] + s[0x1] === 0xf)
        ans = '+';
    if (s[0x0] * s[0x1] === 0xf)
        ans = '*';
    console[_0x5ac9a7(0x1a1)](ans);
}
function a0_0x153f() {
    var _0x49bd9d = [
        '72qytgjq',
        'log',
        '24rKIZVY',
        '959063RpmFWG',
        '207925NFlrAS',
        '/dev/stdin',
        '121370KknPCr',
        '48YZkqtS',
        'utf8',
        '12860eOqVHC',
        '869499SaYutw',
        'map',
        '1105208DfaVzC',
        '1591000KLuULL',
        'split',
        'readFileSync'
    ];
    a0_0x153f = function () {
        return _0x49bd9d;
    };
    return a0_0x153f();
}
function a0_0x2ad4(vYViih, key) {
    var stringArray = a0_0x153f();
    a0_0x2ad4 = function (index, key) {
        index = index - 0x19b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ad4(vYViih, key);
}
Main(require('fs')[a0_0x21059c(0x19f)](a0_0x21059c(0x1a5), a0_0x21059c(0x1a8)));