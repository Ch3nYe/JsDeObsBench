var a0_0x3b0c88 = a0_0x3e72;
process[a0_0x3b0c88(0x0)][a0_0x3b0c88(0x1)]();
process[a0_0x3b0c88(0x0)][a0_0x3b0c88(0x2)](a0_0x3b0c88(0x3));
function a0_0x438e() {
    var _0x36adee = [
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
        'split',
        'map',
        'min',
        'length'
    ];
    a0_0x438e = function () {
        return _0x36adee;
    };
    return a0_0x438e();
}
var lines = [];
var reader = require(a0_0x3b0c88(0x4))[a0_0x3b0c88(0x5)]({
    'input': process[a0_0x3b0c88(0x0)],
    'output': process[a0_0x3b0c88(0x6)]
});
function a0_0x3e72(dOVkeQ, key) {
    var stringArray = a0_0x438e();
    a0_0x3e72 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e72(dOVkeQ, key);
}
reader['on'](a0_0x3b0c88(0x7), line => {
    var _0x44ee88 = a0_0x3e72;
    lines[_0x44ee88(0x8)](line);
});
reader['on'](a0_0x3b0c88(0x9), () => {
    var _0x944eb5 = a0_0x3e72;
    const list = lines[0x1][_0x944eb5(0xa)]('\x20')[_0x944eb5(0xb)](v => v - 0x0);
    let ans = 0x0;
    for (let i = 0x0; i < list['length'] - 0x1; i++) {
        ans += Math[_0x944eb5(0xc)](list[i], list[i + 0x1]);
    }
    ans += list[list[_0x944eb5(0xd)] - 0x1] + list[0x0];
    console['log'](ans);
});