var a0_0x58db16 = a0_0x4075;
(function (stringArrayFunction, comparisonValue) {
    var _0x7ca9d1 = a0_0x4075;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x7ca9d1(0xc1)) / 0x1 + -parseInt(_0x7ca9d1(0xc3)) / 0x2 + parseInt(_0x7ca9d1(0xc0)) / 0x3 * (-parseInt(_0x7ca9d1(0xbb)) / 0x4) + -parseInt(_0x7ca9d1(0xc5)) / 0x5 + parseInt(_0x7ca9d1(0xbc)) / 0x6 + parseInt(_0x7ca9d1(0xc4)) / 0x7 + parseInt(_0x7ca9d1(0xc2)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1bde, 0x23fc3));
config = {
    'input': a0_0x58db16(0xbd),
    'newline': '\x0a'
};
A = require('fs')[a0_0x58db16(0xb7)](config['input'], a0_0x58db16(0xbe))['trim']()[a0_0x58db16(0xb6)](config['newline'])[a0_0x58db16(0xbf)](function (line) {
    var _0x57f27a = a0_0x58db16;
    return line[_0x57f27a(0xb8)]()[_0x57f27a(0xb6)]('\x20')[_0x57f27a(0xbf)](Number);
});
n = Number(A[a0_0x58db16(0xc6)]()[0x0]);
cnt = 0x1;
cost = 0x0;
conn = new Array(n);
function a0_0x4075(Nhtncc, key) {
    var stringArray = a0_0x1bde();
    a0_0x4075 = function (index, key) {
        index = index - 0xb6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4075(Nhtncc, key);
}
conn[0x0] = !![];
for (i = 0x1; i < n; i++)
    conn[i] = ![];
while (cnt < n) {
    min = Number[a0_0x58db16(0xb9)];
    for (i in conn) {
        if (!conn[i])
            continue;
        Ai = A[i];
        for (j in conn) {
            if (conn[j])
                continue;
            if (Ai[j] !== -0x1 && Ai[j] < min) {
                min = Ai[j];
                min_j = j;
            }
        }
    }
    conn[min_j] = !![];
    cost += min;
    cnt++;
}
console[a0_0x58db16(0xba)](cost);
function a0_0x1bde() {
    var _0x1f7ff3 = [
        '758469BsOPlF',
        '11361pJxdaZ',
        '4472144yHVjKG',
        '556122ueQTCx',
        '975429byvvFE',
        '197465FDbxtU',
        'shift',
        'split',
        'readFileSync',
        'trim',
        'MAX_SAFE_INTEGER',
        'log',
        '4xIiXeW',
        '48276VSfeja',
        '/dev/stdin',
        'ascii',
        'map'
    ];
    a0_0x1bde = function () {
        return _0x1f7ff3;
    };
    return a0_0x1bde();
}