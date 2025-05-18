input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
lines = input['split']('\x0a');
line = lines['shift']()['split']('\x20');
N = line[0x0] * 0x1;
M = line[0x1] * 0x1;
b = [];
r = [];
for (i = 0x1; i <= N; i++) {
    b[i] = 0x1;
    r[i] = 0x0;
}
r[0x1] = 0x1;
for (i = 0x0; i < M; i++) {
    var FpubcK = '5|3|6|1|2|0|4'['split']('|');
    var nzRtiM = 0x0;
    while (!![]) {
        switch (FpubcK[nzRtiM++]) {
        case '0':
            b[x] -= 0x1;
            continue;
        case '1':
            if (r[x]) {
                r[y] += 0x1;
            }
            continue;
        case '2':
            if (r[x] && b[x] == 0x1) {
                r[x] = 0x0;
            }
            continue;
        case '3':
            x = l[0x0] * 0x1;
            continue;
        case '4':
            b[y] += 0x1;
            continue;
        case '5':
            l = lines[i]['split']('\x20');
            continue;
        case '6':
            y = l[0x1] * 0x1;
            continue;
        }
        break;
    }
}
cnt = 0x0;
for (i = 0x1; i <= N; i++) {
    if (r[i] > 0x0) {
        cnt++;
    }
}
console['log'](cnt);