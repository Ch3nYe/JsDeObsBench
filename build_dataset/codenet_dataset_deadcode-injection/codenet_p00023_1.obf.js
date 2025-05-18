var a0_0x2b0e94 = a0_0x233e;
function a0_0x233e(YySxJk, key) {
    var stringArray = a0_0x12c1();
    a0_0x233e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x233e(YySxJk, key);
}
function a0_0x12c1() {
    var _0x1a088f = [
        'replace',
        'split',
        'shift',
        'map',
        'sqrt',
        'pow',
        'log',
        'readFileSync'
    ];
    a0_0x12c1 = function () {
        return _0x1a088f;
    };
    return a0_0x12c1();
}
(function (input) {
    var _0x16e0b5 = a0_0x233e;
    var p = input[_0x16e0b5(0x0)](/\n$/, '')[_0x16e0b5(0x1)]('\x0a');
    var n = Number(p['shift']());
    for (var i = 0x0; i < n; i++) {
        var args = p[_0x16e0b5(0x2)]()['split']('\x20')[_0x16e0b5(0x3)](Number);
        var xa = args[_0x16e0b5(0x2)]();
        var ya = args[_0x16e0b5(0x2)]();
        var ra = args['shift']();
        var xb = args[_0x16e0b5(0x2)]();
        var yb = args['shift']();
        var rb = args[_0x16e0b5(0x2)]();
        var d = Math[_0x16e0b5(0x4)](Math['pow'](xb - xa, 0x2) + Math[_0x16e0b5(0x5)](yb - ya, 0x2));
        if (ra > d + rb) {
            console[_0x16e0b5(0x6)](0x2);
        } else if (rb > d + ra) {
            console['log'](-0x2);
        } else if (d < ra + rb) {
            console[_0x16e0b5(0x6)](0x1);
        } else {
            console['log'](0x0);
        }
    }
}(require('fs')[a0_0x2b0e94(0x7)]('/dev/stdin', 'utf8')));