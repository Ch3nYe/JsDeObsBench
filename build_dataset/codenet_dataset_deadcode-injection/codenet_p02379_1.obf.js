function a0_0x3f4c() {
    var _0x518196 = [
        'stdin',
        'stdout',
        'line',
        'split',
        'sqrt',
        'log',
        'toFixed',
        'end'
    ];
    a0_0x3f4c = function () {
        return _0x518196;
    };
    return a0_0x3f4c();
}
var a0_0x50f447 = a0_0x1c31;
var reader = require('readline')['createInterface']({
    'input': process[a0_0x50f447(0x0)],
    'output': process[a0_0x50f447(0x1)]
});
reader['on'](a0_0x50f447(0x2), function (line) {
    var _0x13515b = a0_0x1c31;
    var a = line[_0x13515b(0x3)]('\x20');
    var b = parseInt(a[0x0], 0xa);
    var c = parseInt(a[0x1], 0xa);
    var d = parseInt(a[0x2], 0xa);
    var e = parseInt(a[0x3], 0xa);
    b = Math[_0x13515b(0x4)]((b - d) * (b - d) + (c - e) * (c - e));
    console[_0x13515b(0x5)](b[_0x13515b(0x6)](0x8));
    process['exit']();
});
function a0_0x1c31(CEQnjA, key) {
    var stringArray = a0_0x3f4c();
    a0_0x1c31 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c31(CEQnjA, key);
}
process[a0_0x50f447(0x0)]['on'](a0_0x50f447(0x7), function () {
});