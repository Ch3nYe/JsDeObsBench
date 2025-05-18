function a0_0x42f8(Rjvpsu, key) {
    var stringArray = a0_0x8268();
    a0_0x42f8 = function (index, key) {
        index = index - 0x1db;
        var value = stringArray[index];
        return value;
    };
    return a0_0x42f8(Rjvpsu, key);
}
var a0_0x27089e = a0_0x42f8;
(function (stringArrayFunction, comparisonValue) {
    var _0x211a61 = a0_0x42f8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x211a61(0x1e3)) / 0x1 * (parseInt(_0x211a61(0x1de)) / 0x2) + parseInt(_0x211a61(0x1e8)) / 0x3 * (parseInt(_0x211a61(0x1e1)) / 0x4) + parseInt(_0x211a61(0x1e5)) / 0x5 * (parseInt(_0x211a61(0x1dc)) / 0x6) + parseInt(_0x211a61(0x1e9)) / 0x7 * (parseInt(_0x211a61(0x1ed)) / 0x8) + -parseInt(_0x211a61(0x1ec)) / 0x9 * (-parseInt(_0x211a61(0x1e6)) / 0xa) + -parseInt(_0x211a61(0x1e0)) / 0xb * (parseInt(_0x211a61(0x1eb)) / 0xc) + -parseInt(_0x211a61(0x1e2)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8268, 0x408c4));
function Main(s) {
    var _0x387e08 = a0_0x42f8;
    var s = s[_0x387e08(0x1dd)]('\x0a')[0x0]['split']('\x20')[_0x387e08(0x1df)](e => parseInt(e, 0xa))[_0x387e08(0x1e4)]((a, b) => b - a);
    var cnt = 0x0;
    if ((s[0x1] - s[0x2]) % 0x2 === 0x0) {
        cnt += s[0x0] - s[0x1];
        s[0x2] += cnt;
        cnt += (s[0x0] - s[0x2]) / 0x2;
    } else {
        s[0x0]++;
        s[0x1]++;
        cnt++;
        cnt += s[0x0] - s[0x1];
        s[0x2] += s[0x0] - s[0x1];
        cnt += (s[0x0] - s[0x2]) / 0x2;
    }
    console[_0x387e08(0x1ea)](cnt);
}
function a0_0x8268() {
    var _0x1e0018 = [
        '4ShIcbe',
        'sort',
        '1016300tvSzXS',
        '4280SsrUYR',
        'readFileSync',
        '3WACwAn',
        '35QegbPa',
        'log',
        '24PEQSaZ',
        '5931gykjTY',
        '220344BbQucF',
        '/dev/stdin',
        '6SENwaw',
        'split',
        '104956HaGqUT',
        'map',
        '1464562VXonHc',
        '1766764gIExNb',
        '9671454qQursb'
    ];
    a0_0x8268 = function () {
        return _0x1e0018;
    };
    return a0_0x8268();
}
Main(require('fs')[a0_0x27089e(0x1e7)](a0_0x27089e(0x1db), 'utf8'));