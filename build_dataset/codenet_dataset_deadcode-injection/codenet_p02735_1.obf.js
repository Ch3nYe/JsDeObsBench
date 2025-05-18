function a0_0x546c(yUkeid, key) {
    var stringArray = a0_0x3d33();
    a0_0x546c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x546c(yUkeid, key);
}
var a0_0x3aafed = a0_0x546c;
inp = require('fs')[a0_0x3aafed(0x0)](a0_0x3aafed(0x1), a0_0x3aafed(0x2))[a0_0x3aafed(0x3)]()[a0_0x3aafed(0x4)]('\x0a');
l = inp[a0_0x3aafed(0x5)]()['split']('\x20');
H = l[a0_0x3aafed(0x5)]() * 0x1;
W = l[a0_0x3aafed(0x5)]() * 0x1;
l = [];
m = [];
for (i = 0x0; i < H; i++) {
    l[a0_0x3aafed(0x6)](inp[a0_0x3aafed(0x5)]()[a0_0x3aafed(0x4)](''));
    m[i] = [];
    for (j = 0x0; j < W; j++) {
        m[i][j] = 0x0;
    }
}
if (l[0x0][0x0] == '#') {
    m[0x0][0x0] = 0x1;
}
r = 0x0;
function a0_0x3d33() {
    var _0x3c438e = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'push',
        'min',
        'log',
        'ceil'
    ];
    a0_0x3d33 = function () {
        return _0x3c438e;
    };
    return a0_0x3d33();
}
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
        m[r][c] = Math[a0_0x3aafed(0x7)](s, t);
    }
    c = i;
    for (r = i; r < H; r++) {
        s = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
        t = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
        m[r][c] = Math[a0_0x3aafed(0x7)](s, t);
    }
}
console[a0_0x3aafed(0x8)](Math[a0_0x3aafed(0x9)](m[H - 0x1][W - 0x1] / 0x2));