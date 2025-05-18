var a0_0x32c4b1 = a0_0x4fc7;
process[a0_0x32c4b1(0x0)][a0_0x32c4b1(0x1)]();
process['stdin'][a0_0x32c4b1(0x2)]('utf8');
var lines = [];
var reader = require(a0_0x32c4b1(0x3))['createInterface']({
    'input': process[a0_0x32c4b1(0x0)],
    'output': process[a0_0x32c4b1(0x4)]
});
reader['on'](a0_0x32c4b1(0x5), line => {
    var _0x238b96 = a0_0x4fc7;
    lines[_0x238b96(0x6)](line);
});
function a0_0x4fc7(oVOWoM, key) {
    var stringArray = a0_0x548e();
    a0_0x4fc7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fc7(oVOWoM, key);
}
reader['on'](a0_0x32c4b1(0x7), () => {
    var _0x4b8a69 = a0_0x4fc7;
    const a = lines[0x1][_0x4b8a69(0x8)]('\x20')[_0x4b8a69(0x9)](v => v - 0x0);
    const b = lines[0x1][_0x4b8a69(0x8)]('\x20')[_0x4b8a69(0x9)](v => v - 0x0)['sort']((a, b) => a - b);
    let ans = a[_0x4b8a69(0xa)]((v, i) => v != b[i])['length'];
    console[_0x4b8a69(0xb)](ans <= 0x2 ? _0x4b8a69(0xc) : 'NO');
});
function a0_0x548e() {
    var _0xf02cba = [
        'stdin',
        'resume',
        'setEncoding',
        'readline',
        'stdout',
        'line',
        'push',
        'close',
        'split',
        'map',
        'filter',
        'log',
        'YES',
        'reduce'
    ];
    a0_0x548e = function () {
        return _0xf02cba;
    };
    return a0_0x548e();
}
min = (...a) => {
    var _0x491017 = a0_0x4fc7;
    return a[_0x491017(0xd)]((a, b) => a < b ? a : b, a[0x0]);
};