function a0_0x2973() {
    var _0x501108 = [
        '/dev/stdin',
        'readFileSync',
        'input',
        'trim',
        'split',
        'map',
        'min'
    ];
    a0_0x2973 = function () {
        return _0x501108;
    };
    return a0_0x2973();
}
var a0_0x511776 = a0_0x3617;
function a0_0x3617(NxVQWV, key) {
    var stringArray = a0_0x2973();
    a0_0x3617 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3617(NxVQWV, key);
}
config = {
    'input': a0_0x511776(0x0),
    'newline': '\x0a'
};
M = require('fs')[a0_0x511776(0x1)](config[a0_0x511776(0x2)], 'ascii')[a0_0x511776(0x3)]()[a0_0x511776(0x4)](config['newline']);
M = M[a0_0x511776(0x5)](function (line) {
    var _0x371ab3 = a0_0x3617;
    return line[_0x371ab3(0x4)]('\x20')[_0x371ab3(0x5)](Number);
});
n = M[0x0][0x0];
min = {};
for (i = 0x1; i <= n; i++)
    min[i] = {};
for (i = 0x1; i <= n; i++)
    min[i][i] = 0x0;
for (i = 0x1; i < n; i++) {
    for (j = 0x1, k = 0x1 + i; k <= n; j++, k++) {
        min[j][k] = Number['MAX_VALUE'];
        for (l = j; l < k; l++) {
            min[j][k] = Math[a0_0x511776(0x6)](min[j][k], M[j][0x0] * M[l][0x1] * M[k][0x1] + min[j][l] + min[l + 0x1][k]);
        }
    }
}
console['log'](min[0x1][n]);