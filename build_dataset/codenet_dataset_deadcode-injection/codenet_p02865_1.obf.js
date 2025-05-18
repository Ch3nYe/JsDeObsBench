function a0_0x2119(gfdrnZ, key) {
    var stringArray = a0_0x2281();
    a0_0x2119 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2119(gfdrnZ, key);
}
var a0_0xf5fc5f = a0_0x2119;
process[a0_0xf5fc5f(0x0)][a0_0xf5fc5f(0x1)]();
process[a0_0xf5fc5f(0x0)]['setEncoding'](a0_0xf5fc5f(0x2));
var lines = [];
var reader = require(a0_0xf5fc5f(0x3))[a0_0xf5fc5f(0x4)]({
    'input': process[a0_0xf5fc5f(0x0)],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
function a0_0x2281() {
    var _0x59da23 = [
        'stdin',
        'resume',
        'utf8',
        'readline',
        'createInterface',
        'log'
    ];
    a0_0x2281 = function () {
        return _0x59da23;
    };
    return a0_0x2281();
}
reader['on']('close', () => {
    var _0x144dab = a0_0x2119;
    const N = +lines[0x0];
    console[_0x144dab(0x5)](N % 0x2 ? (N - 0x1) / 0x2 : N / 0x2 - 0x1);
});