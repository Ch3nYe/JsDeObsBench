function a0_0x5a56(oSZVYp, key) {
    var stringArray = a0_0x49fa();
    a0_0x5a56 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a56(oSZVYp, key);
}
var a0_0x290d95 = a0_0x5a56;
input = require('fs')[a0_0x290d95(0x0)](a0_0x290d95(0x1), 'utf8');
lines = input[a0_0x290d95(0x2)]('\x0a');
S = lines[a0_0x290d95(0x3)]();
function a0_0x49fa() {
    var _0x24b271 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'shift',
        'length',
        'test'
    ];
    a0_0x49fa = function () {
        return _0x24b271;
    };
    return a0_0x49fa();
}
max = 0x0;
cnt = 0x0;
for (i = 0x0; i < S[a0_0x290d95(0x4)]; i++) {
    if (/[AGCT]/[a0_0x290d95(0x5)](S[i])) {
        cnt++;
    } else {
        if (max < cnt) {
            max = cnt;
        }
        cnt = 0x0;
    }
}
console['log'](max);