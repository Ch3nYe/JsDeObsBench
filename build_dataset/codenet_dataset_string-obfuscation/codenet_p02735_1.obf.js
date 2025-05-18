var a0_0x51178b = a0_0x3f50;
(function (stringArrayFunction, comparisonValue) {
    var _0x4350f4 = a0_0x3f50;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4350f4(0xc2)) / 0x1 + parseInt(_0x4350f4(0xc8)) / 0x2 * (parseInt(_0x4350f4(0xc3)) / 0x3) + parseInt(_0x4350f4(0xbb)) / 0x4 + parseInt(_0x4350f4(0xcc)) / 0x5 * (-parseInt(_0x4350f4(0xc9)) / 0x6) + parseInt(_0x4350f4(0xc7)) / 0x7 * (-parseInt(_0x4350f4(0xc0)) / 0x8) + -parseInt(_0x4350f4(0xc4)) / 0x9 * (-parseInt(_0x4350f4(0xca)) / 0xa) + -parseInt(_0x4350f4(0xbe)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25b8, 0x1e072));
inp = require('fs')[a0_0x51178b(0xba)]('/dev/stdin', a0_0x51178b(0xcb))[a0_0x51178b(0xc5)]()[a0_0x51178b(0xbc)]('\x0a');
l = inp[a0_0x51178b(0xc1)]()[a0_0x51178b(0xbc)]('\x20');
H = l[a0_0x51178b(0xc1)]() * 0x1;
W = l[a0_0x51178b(0xc1)]() * 0x1;
l = [];
m = [];
for (i = 0x0; i < H; i++) {
    l['push'](inp[a0_0x51178b(0xc1)]()[a0_0x51178b(0xbc)](''));
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
function a0_0x25b8() {
    var _0x417015 = [
        'log',
        '265683IurKLN',
        'min',
        '1288344CTflFV',
        'shift',
        '95799iyhUWF',
        '6UeFPaW',
        '9jLZcjP',
        'trim',
        'ceil',
        '7ACQfqd',
        '193786JMgLod',
        '48clEskl',
        '57520OhQAog',
        'utf8',
        '145360xHcttm',
        'readFileSync',
        '981716YdfdGc',
        'split'
    ];
    a0_0x25b8 = function () {
        return _0x417015;
    };
    return a0_0x25b8();
}
function a0_0x3f50(OKwJDM, key) {
    var stringArray = a0_0x25b8();
    a0_0x3f50 = function (index, key) {
        index = index - 0xba;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f50(OKwJDM, key);
}
for (i = 0x1; i < H; i++) {
    r = i;
    for (c = i; c < W; c++) {
        s = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
        t = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
        m[r][c] = Math[a0_0x51178b(0xbf)](s, t);
    }
    c = i;
    for (r = i; r < H; r++) {
        s = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
        t = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
        m[r][c] = Math[a0_0x51178b(0xbf)](s, t);
    }
}
console[a0_0x51178b(0xbd)](Math[a0_0x51178b(0xc6)](m[H - 0x1][W - 0x1] / 0x2));