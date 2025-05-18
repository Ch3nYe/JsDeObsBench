inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
N = inp['shift']() * 0x1;
A = inp['shift']()['split']('\x20');
B = inp['shift']()['split']('\x20');
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
        t['push'](d);
    }
    sumA += a;
    sumB += b;
}
if (sumA >= sumB) {
    t['sort']((_0x10a54b, _0x1d93f1) => _0x1d93f1 - _0x10a54b);
    j = 0x0;
    while (s < 0x0) {
        s += t[j];
        j++;
    }
    console['log'](cnt + j);
} else {
    console['log'](-0x1);
}