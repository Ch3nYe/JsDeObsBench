function a0_0x2168() {
    var _0x477411 = [
        'readFileSync',
        'input',
        'ascii',
        'split',
        'map',
        'slice',
        'indexOf',
        'hasOwnProperty',
        'log',
        '%d\x20%d'
    ];
    a0_0x2168 = function () {
        return _0x477411;
    };
    return a0_0x2168();
}
var a0_0xe84782 = a0_0x1a21;
function a0_0x1a21(LGYGPk, key) {
    var stringArray = a0_0x2168();
    a0_0x1a21 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a21(LGYGPk, key);
}
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')[a0_0xe84782(0x0)](config[a0_0xe84782(0x1)], a0_0xe84782(0x2))['split'](config['newline']);
line[0x0] = line[0x0][a0_0xe84782(0x3)]('\x20')[a0_0xe84782(0x4)](Number);
H = line[0x0][0x0];
W = line[0x0][0x1];
field = line['slice'](0x1, 0x1 + H);
line[0x1 + H] = line[0x1 + H][a0_0xe84782(0x3)]('\x20')[a0_0xe84782(0x4)](Number);
R = line[0x1 + H][0x0];
C = line[0x1 + H][0x1];
pat = line[a0_0xe84782(0x5)](0x1 + H + 0x1, 0x1 + H + 0x1 + R);
mem = new Array(H);
for (i = 0x0; i < H; i++) {
    mem[i] = new Array(R);
    for (j = 0x0; j < R; j++) {
        mem[i][j] = {};
        k = field[i][a0_0xe84782(0x6)](pat[j]);
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
            if (!mem[i + k][k][a0_0xe84782(0x7)](j)) {
                flag = ![];
                break;
            }
        }
        if (flag)
            console[a0_0xe84782(0x8)](a0_0xe84782(0x9), i, j);
    }
}