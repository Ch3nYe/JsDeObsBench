input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
lines = input['split']('\x0a');
N = lines['shift']() * 0x1;
A = lines['shift']()['split']('\x20');
h = 0x0;
cnt = 0x0;
for (i = 0x0; i < N; i++) {
    if (h <= A[i]) {
        cnt++;
        h = A[i];
    }
}
console['log'](cnt);