config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['split'](config['newline'], 0x2);
w = line[0x1]['split']('\x20')['map'](Number);
sorted = []['concat'](w);
sorted['sort'](function (_0x78be0e, _0x3d86ff) {
    return _0x78be0e - _0x3d86ff;
});
cost = 0x0;
for (i = w['length'] - 0x1; i >= 0x0; i--) {
    idx = w['indexOf'](sorted[i]);
    if (idx === i)
        continue;
    cost += w[i] + w[idx];
    tmp = w[i];
    w[i] = w[idx];
    w[idx] = tmp;
}
console['log'](cost);