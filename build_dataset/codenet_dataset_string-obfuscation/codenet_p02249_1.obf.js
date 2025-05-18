var a0_0x1d2920 = a0_0x2c58;
(function (stringArrayFunction, comparisonValue) {
    var _0x225e2a = a0_0x2c58;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x225e2a(0xc6)) / 0x1 + parseInt(_0x225e2a(0xb7)) / 0x2 * (parseInt(_0x225e2a(0xb9)) / 0x3) + parseInt(_0x225e2a(0xca)) / 0x4 * (-parseInt(_0x225e2a(0xc7)) / 0x5) + -parseInt(_0x225e2a(0xc8)) / 0x6 + parseInt(_0x225e2a(0xc9)) / 0x7 + -parseInt(_0x225e2a(0xb8)) / 0x8 + parseInt(_0x225e2a(0xbb)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x33b5, 0xbf4b2));
config = {
    'input': a0_0x1d2920(0xba),
    'newline': '\x0a'
};
line = require('fs')[a0_0x1d2920(0xc2)](config[a0_0x1d2920(0xc1)], a0_0x1d2920(0xbc))[a0_0x1d2920(0xbe)](config[a0_0x1d2920(0xc5)]);
line[0x0] = line[0x0]['split']('\x20')[a0_0x1d2920(0xc3)](Number);
H = line[0x0][0x0];
function a0_0x33b5() {
    var _0x1cfc6f = [
        '6702912JIHZOP',
        'ascii',
        'indexOf',
        'split',
        '%d\x20%d',
        'slice',
        'input',
        'readFileSync',
        'map',
        'hasOwnProperty',
        'newline',
        '1321970FflwvT',
        '4055hPBBOy',
        '8682984ahZKst',
        '1850366XhsCRB',
        '2204zOSYjL',
        '891142gpornp',
        '792672vvksLx',
        '3sVBpKs',
        '/dev/stdin'
    ];
    a0_0x33b5 = function () {
        return _0x1cfc6f;
    };
    return a0_0x33b5();
}
W = line[0x0][0x1];
function a0_0x2c58(OvufkI, key) {
    var stringArray = a0_0x33b5();
    a0_0x2c58 = function (index, key) {
        index = index - 0xb7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c58(OvufkI, key);
}
field = line[a0_0x1d2920(0xc0)](0x1, 0x1 + H);
line[0x1 + H] = line[0x1 + H][a0_0x1d2920(0xbe)]('\x20')[a0_0x1d2920(0xc3)](Number);
R = line[0x1 + H][0x0];
C = line[0x1 + H][0x1];
pat = line['slice'](0x1 + H + 0x1, 0x1 + H + 0x1 + R);
mem = new Array(H);
for (i = 0x0; i < H; i++) {
    mem[i] = new Array(R);
    for (j = 0x0; j < R; j++) {
        mem[i][j] = {};
        k = field[i][a0_0x1d2920(0xbd)](pat[j]);
        while (k !== -0x1) {
            mem[i][j][k] = !![];
            k = field[i]['indexOf'](pat[j], k + 0x1);
        }
    }
}
for (i = 0x0; i <= H - R; i++) {
    for (j = 0x0; j <= W - C; j++) {
        flag = !![];
        for (k = 0x0; k < R; k++) {
            if (!mem[i + k][k][a0_0x1d2920(0xc4)](j)) {
                flag = ![];
                break;
            }
        }
        if (flag)
            console['log'](a0_0x1d2920(0xbf), i, j);
    }
}