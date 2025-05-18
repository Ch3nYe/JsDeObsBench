var a0_0x8b5aaa = a0_0x52c3;
process['stdin'][a0_0x8b5aaa(0x0)]();
process[a0_0x8b5aaa(0x1)][a0_0x8b5aaa(0x2)](a0_0x8b5aaa(0x3));
var lines = [];
var reader = require('readline')[a0_0x8b5aaa(0x4)]({
    'input': process[a0_0x8b5aaa(0x1)],
    'output': process[a0_0x8b5aaa(0x5)]
});
function a0_0x52c3(dAeWCq, key) {
    var stringArray = a0_0x5c21();
    a0_0x52c3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52c3(dAeWCq, key);
}
reader['on'](a0_0x8b5aaa(0x6), line => {
    var _0x248b0b = a0_0x52c3;
    lines[_0x248b0b(0x7)](line);
});
function a0_0x5c21() {
    var _0x410189 = [
        'resume',
        'stdin',
        'setEncoding',
        'utf8',
        'createInterface',
        'stdout',
        'line',
        'push',
        'split',
        'max'
    ];
    a0_0x5c21 = function () {
        return _0x410189;
    };
    return a0_0x5c21();
}
reader['on']('close', () => {
    var _0x466744 = a0_0x52c3;
    var N = parseInt(lines[0x0]);
    var sum = 0x0;
    var MaxNum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var Ai = parseInt(lines[0x1][_0x466744(0x8)]('\x20')[i]);
        MaxNum = Math[_0x466744(0x9)](MaxNum, Ai);
        sum += MaxNum - Ai;
    }
    console['log'](sum);
});