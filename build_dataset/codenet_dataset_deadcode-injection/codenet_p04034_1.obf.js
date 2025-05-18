var a0_0x20b301 = a0_0x1564;
input = require('fs')[a0_0x20b301(0x0)](a0_0x20b301(0x1), a0_0x20b301(0x2));
function a0_0x5c9a() {
    var _0x73d3f9 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'log'
    ];
    a0_0x5c9a = function () {
        return _0x73d3f9;
    };
    return a0_0x5c9a();
}
function a0_0x1564(BxgbzS, key) {
    var stringArray = a0_0x5c9a();
    a0_0x1564 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1564(BxgbzS, key);
}
lines = input[a0_0x20b301(0x3)]('\x0a');
line = lines[a0_0x20b301(0x4)]()[a0_0x20b301(0x3)]('\x20');
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
    l = lines[i][a0_0x20b301(0x3)]('\x20');
    x = l[0x0] * 0x1;
    y = l[0x1] * 0x1;
    if (r[x]) {
        r[y] += 0x1;
    }
    if (r[x] && b[x] == 0x1) {
        r[x] = 0x0;
    }
    b[x] -= 0x1;
    b[y] += 0x1;
}
cnt = 0x0;
for (i = 0x1; i <= N; i++) {
    if (r[i] > 0x0) {
        cnt++;
    }
}
console[a0_0x20b301(0x5)](cnt);