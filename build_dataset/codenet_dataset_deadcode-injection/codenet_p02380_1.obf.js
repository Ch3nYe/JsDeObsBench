function a0_0x1c3d(jTdcpN, key) {
    var stringArray = a0_0x4dad();
    a0_0x1c3d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c3d(jTdcpN, key);
}
var a0_0x5a89fe = a0_0x1c3d;
function a0_0x4dad() {
    var _0x5719ff = [
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'split',
        'sqrt',
        'sin',
        'log',
        'toFixed',
        'end'
    ];
    a0_0x4dad = function () {
        return _0x5719ff;
    };
    return a0_0x4dad();
}
var reader = require(a0_0x5a89fe(0x0))[a0_0x5a89fe(0x1)]({
    'input': process[a0_0x5a89fe(0x2)],
    'output': process[a0_0x5a89fe(0x3)]
});
reader['on'](a0_0x5a89fe(0x4), function (line) {
    var _0x3a54e2 = a0_0x1c3d;
    var rad, a, S, L, h;
    var e = line[_0x3a54e2(0x5)]('\x20');
    var b = Number(e[0x0]);
    var c = Number(e[0x1]);
    var d = Number(e[0x2]);
    rad = d / 0xb4 * Math['PI'];
    a = Math[_0x3a54e2(0x6)](b * b + c * c - 0x2 * b * c * Math['cos'](rad));
    S = b * c * Math[_0x3a54e2(0x7)](rad) / 0x2;
    L = a + b + c;
    h = b * c * Math[_0x3a54e2(0x7)](rad) / b;
    console[_0x3a54e2(0x8)](S[_0x3a54e2(0x9)](0x8));
    console[_0x3a54e2(0x8)](L['toFixed'](0x8));
    console[_0x3a54e2(0x8)](h['toFixed'](0x8));
    process['exit']();
});
process[a0_0x5a89fe(0x2)]['on'](a0_0x5a89fe(0xa), function () {
});