function a0_0x3946(ifsVBc, key) {
    var stringArray = a0_0x2c6f();
    a0_0x3946 = function (index, key) {
        index = index - 0x1ea;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3946(ifsVBc, key);
}
function a0_0x2c6f() {
    var _0x33319e = [
        '673542VRemeg',
        'log',
        'toFixed',
        '80MSDGQK',
        '372276zzvOgc',
        '5BNWbGE',
        '2328954MWtXSu',
        '224791nESXiU',
        '18110SvwIos',
        '2518648UhHQRQ',
        'sqrt',
        '4598toRSwY',
        '1XCMVBK',
        '468VlAcGM',
        '254724BLsKfq',
        '120DjuTBw',
        'stdin'
    ];
    a0_0x2c6f = function () {
        return _0x33319e;
    };
    return a0_0x2c6f();
}
var a0_0x3a2ae1 = a0_0x3946;
(function (stringArrayFunction, comparisonValue) {
    var _0x53891a = a0_0x3946;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x53891a(0x1f9)) / 0x1 * (-parseInt(_0x53891a(0x1f1)) / 0x2) + -parseInt(_0x53891a(0x1f3)) / 0x3 + parseInt(_0x53891a(0x1f6)) / 0x4 * (-parseInt(_0x53891a(0x1f2)) / 0x5) + -parseInt(_0x53891a(0x1eb)) / 0x6 * (parseInt(_0x53891a(0x1f4)) / 0x7) + parseInt(_0x53891a(0x1f0)) / 0x8 * (parseInt(_0x53891a(0x1ed)) / 0x9) + -parseInt(_0x53891a(0x1f5)) / 0xa * (-parseInt(_0x53891a(0x1f8)) / 0xb) + parseInt(_0x53891a(0x1ea)) / 0xc * (parseInt(_0x53891a(0x1fa)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c6f, 0x63798));
var reader = require('readline')['createInterface']({
    'input': process[a0_0x3a2ae1(0x1ec)],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var _0x10d0bb = a0_0x3a2ae1;
    var a = line['split']('\x20');
    var b = parseInt(a[0x0], 0xa);
    var c = parseInt(a[0x1], 0xa);
    var d = parseInt(a[0x2], 0xa);
    var e = parseInt(a[0x3], 0xa);
    b = Math[_0x10d0bb(0x1f7)]((b - d) * (b - d) + (c - e) * (c - e));
    console[_0x10d0bb(0x1ee)](b[_0x10d0bb(0x1ef)](0x8));
    process['exit']();
});
process['stdin']['on']('end', function () {
});