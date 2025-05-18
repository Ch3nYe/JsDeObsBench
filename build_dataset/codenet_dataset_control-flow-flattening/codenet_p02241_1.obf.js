config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
A = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['map'](function (line) {
    return line['trim']()['split']('\x20')['map'](Number);
});
n = Number(A['shift']()[0x0]);
cnt = 0x1;
cost = 0x0;
conn = new Array(n);
conn[0x0] = !![];
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
console['log'](cost);