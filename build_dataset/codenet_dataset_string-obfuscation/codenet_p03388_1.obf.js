var a0_0x53313b = a0_0x74ba;
function a0_0x74ba(CuDlgy, key) {
    var stringArray = a0_0x2f8f();
    a0_0x74ba = function (index, key) {
        index = index - 0xd5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x74ba(CuDlgy, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1f89f2 = a0_0x74ba;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1f89f2(0xe4)) / 0x1 * (parseInt(_0x1f89f2(0xda)) / 0x2) + parseInt(_0x1f89f2(0xd5)) / 0x3 * (-parseInt(_0x1f89f2(0xe3)) / 0x4) + parseInt(_0x1f89f2(0xd7)) / 0x5 * (parseInt(_0x1f89f2(0xdc)) / 0x6) + parseInt(_0x1f89f2(0xe7)) / 0x7 * (-parseInt(_0x1f89f2(0xe5)) / 0x8) + -parseInt(_0x1f89f2(0xde)) / 0x9 + -parseInt(_0x1f89f2(0xdb)) / 0xa * (-parseInt(_0x1f89f2(0xe6)) / 0xb) + parseInt(_0x1f89f2(0xdd)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f8f, 0x283ae));
function a0_0x2f8f() {
    var _0x58832f = [
        '44RTIulF',
        '316696aYHpiy',
        '11UoINag',
        '56vLHkkn',
        'ceil',
        'readFileSync',
        '51dSrmVX',
        'split',
        '380zcTxBC',
        '/dev/stdin',
        'log',
        '4234ZnSowD',
        '2040680VbbQub',
        '9966HGBSpN',
        '6289044VRSrTi',
        '1604322DrBpxI',
        'max',
        'utf8',
        'map',
        'sqrt',
        '23884qYkBkz'
    ];
    a0_0x2f8f = function () {
        return _0x58832f;
    };
    return a0_0x2f8f();
}
function Main(s) {
    var _0x22371d = a0_0x74ba;
    s = s[_0x22371d(0xd6)]('\x0a');
    const q = +s[0x0];
    for (var i = 0x0; i < q; i++) {
        var a = s[i + 0x1]['split']('\x20')[_0x22371d(0xe1)](a => +a);
        var b = Math[_0x22371d(0xdf)](a[0x0], a[0x1]);
        a = Math['min'](a[0x0], a[0x1]);
        var c = Math[_0x22371d(0xe8)](Math[_0x22371d(0xe2)](a * b));
        var ans = (a - 0x1) * 0x2;
        if (a < b - 0x1)
            ans++;
        for (var j = a + 0x1; j < c; j++) {
            if (Math['floor'](a / j * b) === j)
                ans++;
            else
                ans += 0x2;
        }
        console[_0x22371d(0xd9)](ans);
    }
}
Main(require('fs')[a0_0x53313b(0xe9)](a0_0x53313b(0xd8), a0_0x53313b(0xe0)));