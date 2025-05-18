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
    var yJrFAc = '5|1|0|2|4|3'['split']('|');
    var vZnpmP = 0x0;
    while (!![]) {
        switch (yJrFAc[vZnpmP++]) {
        case '0':
            d = a - b;
            continue;
        case '1':
            b = B[i] * 0x1;
            continue;
        case '2':
            if (d < 0x0) {
                cnt++;
                s += d;
            } else {
                t['push'](d);
            }
            continue;
        case '3':
            sumB += b;
            continue;
        case '4':
            sumA += a;
            continue;
        case '5':
            a = A[i] * 0x1;
            continue;
        }
        break;
    }
}
if (sumA >= sumB) {
    t['sort']((a, b) => b - a);
    j = 0x0;
    while (s < 0x0) {
        s += t[j];
        j++;
    }
    console['log'](cnt + j);
} else {
    console['log'](-0x1);
}