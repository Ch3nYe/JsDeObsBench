var a0_0x2f77a1 = a0_0x46b5;
config = {
    'input': a0_0x2f77a1(0x0),
    'newline': '\x0a'
};
function a0_0x46b5(dlxGpc, key) {
    var stringArray = a0_0x34b8();
    a0_0x46b5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x46b5(dlxGpc, key);
}
A = require('fs')[a0_0x2f77a1(0x1)](config[a0_0x2f77a1(0x2)], a0_0x2f77a1(0x3))[a0_0x2f77a1(0x4)]()[a0_0x2f77a1(0x5)](config['newline'])[a0_0x2f77a1(0x6)](function (line) {
    var _0x143464 = a0_0x46b5;
    return line[_0x143464(0x4)]()[_0x143464(0x5)]('\x20')[_0x143464(0x6)](Number);
});
n = Number(A[a0_0x2f77a1(0x7)]()[0x0]);
cnt = 0x1;
cost = 0x0;
conn = new Array(n);
conn[0x0] = !![];
function a0_0x34b8() {
    var _0x5ad5dd = [
        '/dev/stdin',
        'readFileSync',
        'input',
        'ascii',
        'trim',
        'split',
        'map',
        'shift',
        'log'
    ];
    a0_0x34b8 = function () {
        return _0x5ad5dd;
    };
    return a0_0x34b8();
}
for (i = 0x1; i < n; i++)
    conn[i] = ![];
while (cnt < n) {
    min = Number['MAX_SAFE_INTEGER'];
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
console[a0_0x2f77a1(0x8)](cost);