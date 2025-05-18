var a0_0x3859e2 = a0_0x8e90;
config = {
    'input': a0_0x3859e2(0x0),
    'newline': '\x0a'
};
function a0_0x8e90(CxccaP, key) {
    var stringArray = a0_0x1a11();
    a0_0x8e90 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8e90(CxccaP, key);
}
line = require('fs')['readFileSync'](config['input'], 'ascii')[a0_0x3859e2(0x1)]()[a0_0x3859e2(0x2)](config[a0_0x3859e2(0x3)])[a0_0x3859e2(0x4)](function (line) {
    var _0x1de156 = a0_0x8e90;
    return line[_0x1de156(0x2)]('\x20')['map'](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
adj = new Array(n);
for (i = 0x0; i < n; i++)
    adj[i] = null;
function a0_0x1a11() {
    var _0x28bf94 = [
        '/dev/stdin',
        'trim',
        'split',
        'newline',
        'map',
        'slice',
        'sort',
        'yes'
    ];
    a0_0x1a11 = function () {
        return _0x28bf94;
    };
    return a0_0x1a11();
}
conn = line[a0_0x3859e2(0x5)](0x1, m + 0x1);
conn[a0_0x3859e2(0x6)](function (a, b) {
    if (a[0x0] === b[0x0])
        return a[0x1] - b[0x1];
    return a[0x0] - b[0x0];
});
for (i in conn) {
    min0 = id0 = conn[i][0x0];
    min1 = id1 = conn[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    min = Math['min'](min0, min1);
    if (id0 !== min)
        adj[id0] = min;
    if (id1 !== min)
        adj[id1] = min;
}
q = line['slice'](m + 0x2, m + 0x2 + q);
for (i in q) {
    min0 = q[i][0x0];
    min1 = q[i][0x1];
    while (adj[min0] !== null)
        min0 = adj[min0];
    while (adj[min1] !== null)
        min1 = adj[min1];
    console['log'](min0 === min1 ? a0_0x3859e2(0x7) : 'no');
}