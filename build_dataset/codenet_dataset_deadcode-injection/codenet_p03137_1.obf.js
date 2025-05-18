function a0_0x59c2() {
    var _0x23b94f = [
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'push',
        'close',
        'split',
        'sort',
        'fill',
        'log'
    ];
    a0_0x59c2 = function () {
        return _0x23b94f;
    };
    return a0_0x59c2();
}
function a0_0x15f1(DFdThm, key) {
    var stringArray = a0_0x59c2();
    a0_0x15f1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15f1(DFdThm, key);
}
var a0_0x2a731d = a0_0x15f1;
var readline = require(a0_0x2a731d(0x0));
var lines = [];
var result = 0x0;
var rl = readline[a0_0x2a731d(0x1)]({
    'input': process[a0_0x2a731d(0x2)],
    'output': process[a0_0x2a731d(0x3)]
});
rl['on'](a0_0x2a731d(0x4), function (x) {
    var _0x206914 = a0_0x15f1;
    lines[_0x206914(0x5)](x);
});
rl['on'](a0_0x2a731d(0x6), function () {
    var _0x401759 = a0_0x15f1;
    var N = Number(lines[0x0][_0x401759(0x7)]('\x20')[0x0]);
    var M = Number(lines[0x0][_0x401759(0x7)]('\x20')[0x1]);
    var X = lines[0x1][_0x401759(0x7)]('\x20')['map'](value => Number(value));
    X[_0x401759(0x8)]((a, b) => a - b);
    var sum = Array(M)[_0x401759(0x9)](0x0);
    for (var i = 0x1; i < M; i++) {
        sum[i] = X[i] - X[i - 0x1];
    }
    sum[_0x401759(0x8)]((a, b) => b - a);
    for (var i = N - 0x1; i < M; i++) {
        result += sum[i];
    }
    console[_0x401759(0xa)](result);
});