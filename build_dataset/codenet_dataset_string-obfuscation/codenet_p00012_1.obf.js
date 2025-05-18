var a0_0x417bd6 = a0_0x4bd6;
(function (stringArrayFunction, comparisonValue) {
    var _0x420d48 = a0_0x4bd6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x420d48(0x1ec)) / 0x1 * (parseInt(_0x420d48(0x1f4)) / 0x2) + parseInt(_0x420d48(0x1ef)) / 0x3 + parseInt(_0x420d48(0x1e3)) / 0x4 * (parseInt(_0x420d48(0x1e9)) / 0x5) + parseInt(_0x420d48(0x1e4)) / 0x6 * (parseInt(_0x420d48(0x1de)) / 0x7) + parseInt(_0x420d48(0x1e7)) / 0x8 + -parseInt(_0x420d48(0x1e6)) / 0x9 * (parseInt(_0x420d48(0x1f1)) / 0xa) + -parseInt(_0x420d48(0x1ed)) / 0xb * (parseInt(_0x420d48(0x1df)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31b8, 0x5d871));
function area(x1, y1, x2, y2, x3, y3) {
    var _0x1057c2 = a0_0x4bd6;
    var ab = Math['sqrt']((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)), bc = Math[_0x1057c2(0x1f2)]((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3)), ca = Math['sqrt']((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1)), s = 0.5 * (ab + bc + ca), S = Math['sqrt'](s * (s - ab) * (s - bc) * (s - ca));
    return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
    var abc = area(x1, y1, x2, y2, x3, y3), abp = area(x1, y1, x2, y2, xp, yp), bcp = area(x2, y2, x3, y3, xp, yp), cap = area(x3, y3, x1, y1, xp, yp), sub = abc - (abp + bcp + cap);
    return Math['abs'](sub) <= 0.01;
}
function main() {
    input['forEach'](function (line) {
        var _0x279f6b = a0_0x4bd6;
        if (line[_0x279f6b(0x1e1)]() === '')
            return;
        console['log'](inTriangle[_0x279f6b(0x1ea)](null, line[_0x279f6b(0x1f0)]('\x20')[_0x279f6b(0x1eb)](parseFloat)) ? 'YES' : 'NO');
    });
}
var input = '';
process['stdin'][a0_0x417bd6(0x1ee)]();
process[a0_0x417bd6(0x1e2)][a0_0x417bd6(0x1e5)](a0_0x417bd6(0x1e0));
function a0_0x4bd6(icXYio, key) {
    var stringArray = a0_0x31b8();
    a0_0x4bd6 = function (index, key) {
        index = index - 0x1de;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bd6(icXYio, key);
}
function a0_0x31b8() {
    var _0x4116ee = [
        '5cPnFWU',
        'apply',
        'map',
        '126836dJMIqg',
        '2118589kJhJon',
        'resume',
        '1955661oYZsmg',
        'split',
        '50JvLVOL',
        'sqrt',
        'end',
        '6HWkCCN',
        '1297296lOZxHw',
        '12XnpmVe',
        'utf8',
        'trim',
        'stdin',
        '881688SXXbbt',
        '6zeiKdg',
        'setEncoding',
        '781173ZcoWSs',
        '2660352wSwpCB',
        'data'
    ];
    a0_0x31b8 = function () {
        return _0x4116ee;
    };
    return a0_0x31b8();
}
process[a0_0x417bd6(0x1e2)]['on'](a0_0x417bd6(0x1e8), function (chunk) {
    input += chunk;
});
process[a0_0x417bd6(0x1e2)]['on'](a0_0x417bd6(0x1f3), function () {
    var _0x3b6ff5 = a0_0x417bd6;
    input = input[_0x3b6ff5(0x1f0)]('\x0a');
    main();
});