var a0_0x5670b0 = a0_0x6939;
(function (stringArrayFunction, comparisonValue) {
    var _0xddc0a9 = a0_0x6939;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xddc0a9(0xd9)) / 0x1 + -parseInt(_0xddc0a9(0xe0)) / 0x2 * (parseInt(_0xddc0a9(0xd4)) / 0x3) + -parseInt(_0xddc0a9(0xdc)) / 0x4 * (-parseInt(_0xddc0a9(0xcc)) / 0x5) + parseInt(_0xddc0a9(0xd7)) / 0x6 * (-parseInt(_0xddc0a9(0xd6)) / 0x7) + -parseInt(_0xddc0a9(0xde)) / 0x8 + parseInt(_0xddc0a9(0xcf)) / 0x9 * (parseInt(_0xddc0a9(0xd2)) / 0xa) + parseInt(_0xddc0a9(0xcd)) / 0xb * (parseInt(_0xddc0a9(0xd0)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39bd, 0x5f969));
function a0_0x6939(vmaWdK, key) {
    var stringArray = a0_0x39bd();
    a0_0x6939 = function (index, key) {
        index = index - 0xcb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6939(vmaWdK, key);
}
config = {
    'input': a0_0x5670b0(0xd8),
    'newline': '\x0a'
};
M = require('fs')[a0_0x5670b0(0xd3)](config[a0_0x5670b0(0xdb)], a0_0x5670b0(0xce))[a0_0x5670b0(0xcb)]()[a0_0x5670b0(0xd1)](config[a0_0x5670b0(0xdf)]);
M = M[a0_0x5670b0(0xda)](function (line) {
    var _0xfb14c1 = a0_0x5670b0;
    return line[_0xfb14c1(0xd1)]('\x20')[_0xfb14c1(0xda)](Number);
});
function a0_0x39bd() {
    var _0x4d199f = [
        'input',
        '842864TSDuDv',
        'MAX_VALUE',
        '4684232XxtyTq',
        'newline',
        '1167506fBZwpO',
        'trim',
        '10dviJdA',
        '62887fuhaYv',
        'ascii',
        '5683761wrmrJk',
        '3372swmPwO',
        'split',
        '10IPaedk',
        'readFileSync',
        '3bTjsQP',
        'log',
        '7oMqKKK',
        '2504490yrmftH',
        '/dev/stdin',
        '681212aAcVQc',
        'map'
    ];
    a0_0x39bd = function () {
        return _0x4d199f;
    };
    return a0_0x39bd();
}
n = M[0x0][0x0];
min = {};
for (i = 0x1; i <= n; i++)
    min[i] = {};
for (i = 0x1; i <= n; i++)
    min[i][i] = 0x0;
for (i = 0x1; i < n; i++) {
    for (j = 0x1, k = 0x1 + i; k <= n; j++, k++) {
        min[j][k] = Number[a0_0x5670b0(0xdd)];
        for (l = j; l < k; l++) {
            min[j][k] = Math['min'](min[j][k], M[j][0x0] * M[l][0x1] * M[k][0x1] + min[j][l] + min[l + 0x1][k]);
        }
    }
}
console[a0_0x5670b0(0xd5)](min[0x1][n]);