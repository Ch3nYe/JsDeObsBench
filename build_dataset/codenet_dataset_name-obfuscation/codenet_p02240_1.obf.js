config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['map'](function (_0x3f8f06) {
    return _0x3f8f06['split']('\x20')['map'](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
adj = new Array(n);
for (i = 0x0; i < n; i++)
    adj[i] = null;
conn = line['slice'](0x1, m + 0x1);
conn['sort'](function (_0x48bcd0, _0x5391af) {
    if (_0x48bcd0[0x0] === _0x5391af[0x0])
        return _0x48bcd0[0x1] - _0x5391af[0x1];
    return _0x48bcd0[0x0] - _0x5391af[0x0];
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
    console['log'](min0 === min1 ? 'yes' : 'no');
}