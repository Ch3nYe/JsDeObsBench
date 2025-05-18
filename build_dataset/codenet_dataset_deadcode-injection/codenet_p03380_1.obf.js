function a0_0x55b2() {
    var _0x5ee130 = [
        'split',
        'map',
        'max',
        'sort',
        'abs',
        'log',
        '%d\x20%d',
        'readFileSync',
        'utf8'
    ];
    a0_0x55b2 = function () {
        return _0x5ee130;
    };
    return a0_0x55b2();
}
function a0_0x5953(QUFTAQ, key) {
    var stringArray = a0_0x55b2();
    a0_0x5953 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5953(QUFTAQ, key);
}
var a0_0x489e3d = a0_0x5953;
function Main(s) {
    var _0x44b363 = a0_0x5953;
    s = s[_0x44b363(0x0)]('\x0a');
    var a = s[0x1]['split']('\x20')[_0x44b363(0x1)](a => +a);
    const n = +s[0x0];
    var m = Math[_0x44b363(0x2)](...a);
    var b = [...a][_0x44b363(0x3)]((a, b) => a - b);
    var c = 0x218711a00;
    for (var i = 0x0; i < n - 0x1; i++) {
        if (Math['abs'](m / 0x2 - b[i]) < c)
            c = Math[_0x44b363(0x4)](m / 0x2 - b[i]);
        else
            break;
    }
    console[_0x44b363(0x5)](_0x44b363(0x6), m, b[i - 0x1]);
}
Main(require('fs')[a0_0x489e3d(0x7)]('/dev/stdin', a0_0x489e3d(0x8)));