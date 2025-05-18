var a0_0x21e716 = a0_0x3613;
function a0_0x3613(QtYDSd, key) {
    var stringArray = a0_0x5c0e();
    a0_0x3613 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3613(QtYDSd, key);
}
inp = require('fs')[a0_0x21e716(0x0)]('/dev/stdin', a0_0x21e716(0x1))[a0_0x21e716(0x2)]('\x0a');
l = inp[a0_0x21e716(0x3)]()['split']('\x20');
N = l[0x0];
K = l[0x1];
A = inp[a0_0x21e716(0x3)]()[a0_0x21e716(0x2)]('\x20');
o = {};
a = [];
for (i = 0x0; i < N; i++) {
    a[A[i]] = (a[A[i]] || 0x0) + 0x1;
    o[A[i]] = 0x1;
}
keys = Object['keys'](o);
function a0_0x5c0e() {
    var _0x199a25 = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'length',
        'sort',
        'log'
    ];
    a0_0x5c0e = function () {
        return _0x199a25;
    };
    return a0_0x5c0e();
}
c = keys[a0_0x21e716(0x4)] - K;
if (c > 0x0) {
    a[a0_0x21e716(0x5)]();
    cnt = 0x0;
    for (k of a) {
        cnt += k;
        c--;
        if (c === 0x0) {
            break;
        }
    }
    console[a0_0x21e716(0x6)](cnt);
} else {
    console['log'](0x0);
}