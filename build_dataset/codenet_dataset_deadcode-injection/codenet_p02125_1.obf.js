var a0_0x359279 = a0_0x5ee7;
function a0_0x5ee7(lMRNNe, key) {
    var stringArray = a0_0x59e2();
    a0_0x5ee7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ee7(lMRNNe, key);
}
var input = require('fs')[a0_0x359279(0x0)](a0_0x359279(0x1), 'utf8');
var arr = input[a0_0x359279(0x2)]()['split']('\x0a');
var n = arr[a0_0x359279(0x3)]() - 0x0;
var max = 0x0;
function a0_0x59e2() {
    var _0xb22417 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'toString',
        'split',
        'max'
    ];
    a0_0x59e2 = function () {
        return _0xb22417;
    };
    return a0_0x59e2();
}
for (var i = 0x1; i <= n; i++) {
    var s = (i[a0_0x359279(0x4)](0x2) + '')[a0_0x359279(0x5)]('')['map'](Number);
    var sum = s['reduce']((a, b) => a + b);
    max = Math[a0_0x359279(0x6)](max, sum);
}
console['log'](max);