line = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
n = parseInt(line[0x0]);
v = line[0x1]['split']('\x20');
var odds = {};
var even = {};
for (var i = 0x0; i < v['length']; i++) {
    di = i & 0x1 ? even : odds;
    di[v[i]] = !di[v[i]] ? 0x1 : di[v[i]] + 0x1;
}
var a = [];
var b = [];
for (var k in odds)
    a['push']({
        'v': k,
        'n': odds[k]
    });
for (var k in even)
    b['push']({
        'v': k,
        'n': even[k]
    });
a['sort']((_0x51f170, _0xd91c6a) => _0xd91c6a['n'] - _0x51f170['n']);
b['sort']((_0x461c64, _0x342e27) => _0x342e27['n'] - _0x461c64['n']);
va = a[0x0];
vb = b[0x0];
if (va['v'] === vb['v']) {
    if (va['n'] > vb['n'])
        vb = !b[0x1] ? { 'n': 0x0 } : b[0x1];
    else
        va = !a[0x1] ? { 'n': 0x0 } : a[0x1];
}
log = console['log'];
log(n / 0x2 - va['n'] + n / 0x2 - vb['n']);