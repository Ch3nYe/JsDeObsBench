inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
l = inp['shift']()['split']('\x20');
N = l[0x0];
K = l[0x1];
A = inp['shift']()['split']('\x20');
o = {};
a = [];
for (i = 0x0; i < N; i++) {
    a[A[i]] = (a[A[i]] || 0x0) + 0x1;
    o[A[i]] = 0x1;
}
keys = Object['keys'](o);
c = keys['length'] - K;
if (c > 0x0) {
    a['sort']();
    cnt = 0x0;
    for (k of a) {
        cnt += k;
        c--;
        if (c === 0x0) {
            break;
        }
    }
    console['log'](cnt);
} else {
    console['log'](0x0);
}