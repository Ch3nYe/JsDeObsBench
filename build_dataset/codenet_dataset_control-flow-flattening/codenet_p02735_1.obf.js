inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
H = l['shift']() * 0x1;
W = l['shift']() * 0x1;
l = [];
m = [];
for (i = 0x0; i < H; i++) {
    l['push'](inp['shift']()['split'](''));
    m[i] = [];
    for (j = 0x0; j < W; j++) {
        m[i][j] = 0x0;
    }
}
if (l[0x0][0x0] == '#') {
    m[0x0][0x0] = 0x1;
}
r = 0x0;
for (c = 0x1; c < W; c++) {
    m[r][c] = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
}
c = 0x0;
for (r = 0x1; r < H; r++) {
    m[r][c] = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
}
for (i = 0x1; i < H; i++) {
    r = i;
    for (c = i; c < W; c++) {
        s = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
        t = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
        m[r][c] = Math['min'](s, t);
    }
    c = i;
    for (r = i; r < H; r++) {
        s = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
        t = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
        m[r][c] = Math['min'](s, t);
    }
}
console['log'](Math['ceil'](m[H - 0x1][W - 0x1] / 0x2));