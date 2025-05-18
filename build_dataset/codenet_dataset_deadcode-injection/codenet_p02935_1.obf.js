var a0_0x3ffc34 = a0_0x3eea;
function a0_0x1078() {
    var _0x24c4a5 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'readline',
        'createInterface',
        'stdout',
        'line',
        'push',
        'close',
        'map',
        'sort',
        'length',
        'log'
    ];
    a0_0x1078 = function () {
        return _0x24c4a5;
    };
    return a0_0x1078();
}
process[a0_0x3ffc34(0x0)][a0_0x3ffc34(0x1)]();
process[a0_0x3ffc34(0x0)][a0_0x3ffc34(0x2)](a0_0x3ffc34(0x3));
function a0_0x3eea(TAzGPM, key) {
    var stringArray = a0_0x1078();
    a0_0x3eea = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3eea(TAzGPM, key);
}
var lines = [];
var reader = require(a0_0x3ffc34(0x4))[a0_0x3ffc34(0x5)]({
    'input': process['stdin'],
    'output': process[a0_0x3ffc34(0x6)]
});
reader['on'](a0_0x3ffc34(0x7), line => {
    var _0x329ab8 = a0_0x3eea;
    lines[_0x329ab8(0x8)](line);
});
reader['on'](a0_0x3ffc34(0x9), () => {
    var _0x49270a = a0_0x3eea;
    var n = Number(lines[0x0]);
    var v = lines[0x1]['split']('\x20');
    v = v[_0x49270a(0xa)](function (str) {
        return Number(str);
    });
    for (i = 0x0; i < n - 0x1; i++) {
        var min1 = v[_0x49270a(0xb)]((a, b) => a - b)[0x0];
        v['splice'](0x0, 0x1);
        var min2 = v[0x0];
        v['splice'](0x0, 0x1);
        var a = (min1 + min2) / 0x2;
        if (v[_0x49270a(0xc)] == 0x0) {
            break;
        }
        v[_0x49270a(0x8)](a);
    }
    console[_0x49270a(0xd)](a);
});