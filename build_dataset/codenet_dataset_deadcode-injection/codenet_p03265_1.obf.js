function a0_0x130f(FMqqJy, key) {
    var stringArray = a0_0x19d5();
    a0_0x130f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x130f(FMqqJy, key);
}
var a0_0x1e2ef1 = a0_0x130f;
process[a0_0x1e2ef1(0x0)][a0_0x1e2ef1(0x1)]();
process['stdin'][a0_0x1e2ef1(0x2)]('utf8');
var lines = [];
var reader = require('readline')[a0_0x1e2ef1(0x3)]({
    'input': process[a0_0x1e2ef1(0x0)],
    'output': process[a0_0x1e2ef1(0x4)]
});
function a0_0x19d5() {
    var _0x3a1dd = [
        'stdin',
        'resume',
        'setEncoding',
        'createInterface',
        'stdout',
        'line',
        'close',
        'split',
        'push',
        'log',
        'join'
    ];
    a0_0x19d5 = function () {
        return _0x3a1dd;
    };
    return a0_0x19d5();
}
reader['on'](a0_0x1e2ef1(0x5), line => {
    lines['push'](line);
});
reader['on'](a0_0x1e2ef1(0x6), () => {
    var _0x397a14 = a0_0x130f;
    var abcd = lines[0x0][_0x397a14(0x7)]('\x20');
    var one = Number(abcd[0x0]);
    var two = Number(abcd[0x1]);
    var three = Number(abcd[0x2]);
    var four = Number(abcd[0x3]);
    var ans = [];
    ans[_0x397a14(0x8)](three + (two - four));
    ans[_0x397a14(0x8)](three + four - one);
    ans['push'](one + two - four);
    ans[_0x397a14(0x8)](three + two - one);
    console[_0x397a14(0x9)](ans[_0x397a14(0xa)]('\x20'));
});