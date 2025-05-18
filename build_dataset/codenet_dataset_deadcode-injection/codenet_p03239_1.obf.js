function a0_0x2343(OHiYQP, key) {
    var stringArray = a0_0x436e();
    a0_0x2343 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2343(OHiYQP, key);
}
var a0_0x4f6cf9 = a0_0x2343;
var lines = [];
var result = Infinity;
var readline = require(a0_0x4f6cf9(0x0));
function a0_0x436e() {
    var _0x5147ab = [
        'readline',
        'stdout',
        'line',
        'push',
        'close',
        'split',
        'shift',
        'map',
        'min',
        'log',
        'TLE'
    ];
    a0_0x436e = function () {
        return _0x5147ab;
    };
    return a0_0x436e();
}
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process[a0_0x4f6cf9(0x1)]
});
rl['on'](a0_0x4f6cf9(0x2), function (x) {
    var _0x118cb1 = a0_0x2343;
    lines[_0x118cb1(0x3)](x);
});
rl['on'](a0_0x4f6cf9(0x4), function () {
    var _0x146dae = a0_0x2343;
    var N = Number(lines[0x0][_0x146dae(0x5)]('\x20')[0x0]);
    var T = Number(lines[0x0][_0x146dae(0x5)]('\x20')[0x1]);
    lines[_0x146dae(0x6)]();
    var array = lines[_0x146dae(0x7)](value => value[_0x146dae(0x5)]('\x20')[_0x146dae(0x7)](value => Number(value)));
    for (var i of array) {
        if (i[0x1] <= T) {
            result = Math[_0x146dae(0x8)](result, i[0x0]);
        }
    }
    result !== Infinity ? console[_0x146dae(0x9)](result) : console[_0x146dae(0x9)](_0x146dae(0xa));
});