var a0_0x3c0e29 = a0_0x4741;
inp = require('fs')[a0_0x3c0e29(0x0)](a0_0x3c0e29(0x1), a0_0x3c0e29(0x2))['split']('\x0a');
N = inp[a0_0x3c0e29(0x3)]() * 0x1;
function a0_0x46d5() {
    var _0x21a5e4 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'split',
        'push',
        'sort',
        'log'
    ];
    a0_0x46d5 = function () {
        return _0x21a5e4;
    };
    return a0_0x46d5();
}
function a0_0x4741(iMxOgF, key) {
    var stringArray = a0_0x46d5();
    a0_0x4741 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4741(iMxOgF, key);
}
A = inp['shift']()[a0_0x3c0e29(0x4)]('\x20');
B = inp[a0_0x3c0e29(0x3)]()[a0_0x3c0e29(0x4)]('\x20');
sumA = 0x0;
sumB = 0x0;
s = 0x0;
t = [];
cnt = 0x0;
for (i = 0x0; i < N; i++) {
    a = A[i] * 0x1;
    b = B[i] * 0x1;
    d = a - b;
    if (d < 0x0) {
        cnt++;
        s += d;
    } else {
        t[a0_0x3c0e29(0x5)](d);
    }
    sumA += a;
    sumB += b;
}
if (sumA >= sumB) {
    t[a0_0x3c0e29(0x6)]((a, b) => b - a);
    j = 0x0;
    while (s < 0x0) {
        s += t[j];
        j++;
    }
    console[a0_0x3c0e29(0x7)](cnt + j);
} else {
    console['log'](-0x1);
}