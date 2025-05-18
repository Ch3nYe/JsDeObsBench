var a0_0x4e4b01 = a0_0x5c99;
var lines = [];
var reader = require('readline')[a0_0x4e4b01(0x0)]({
    'input': process[a0_0x4e4b01(0x1)],
    'output': process[a0_0x4e4b01(0x2)]
});
function a0_0x5c99(GQQQkD, key) {
    var stringArray = a0_0x39ff();
    a0_0x5c99 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c99(GQQQkD, key);
}
reader['on']('line', function (line) {
    var _0x3e3602 = a0_0x5c99;
    var a = line[_0x3e3602(0x3)]('\x20');
    var b = parseInt(a[0x0], 0xa);
    var c = b * b * Math['PI'];
    var d = b * 0x2 * Math['PI'];
    console[_0x3e3602(0x4)](c[_0x3e3602(0x5)](0x6) + '\x20' + d['toFixed'](0x6));
    process['exit']();
});
function a0_0x39ff() {
    var _0x5bc7e0 = [
        'createInterface',
        'stdin',
        'stdout',
        'split',
        'log',
        'toFixed',
        'end'
    ];
    a0_0x39ff = function () {
        return _0x5bc7e0;
    };
    return a0_0x39ff();
}
process[a0_0x4e4b01(0x1)]['on'](a0_0x4e4b01(0x6), function () {
});