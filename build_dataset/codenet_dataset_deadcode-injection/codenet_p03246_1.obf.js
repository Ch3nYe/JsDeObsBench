var a0_0x326c6a = a0_0x3dcd;
line = require('fs')[a0_0x326c6a(0x0)](a0_0x326c6a(0x1), 'utf8')[a0_0x326c6a(0x2)]('\x0a');
n = parseInt(line[0x0]);
v = line[0x1][a0_0x326c6a(0x2)]('\x20');
var odds = {};
function a0_0x3dcd(WJsOKq, key) {
    var stringArray = a0_0x5cbe();
    a0_0x3dcd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3dcd(WJsOKq, key);
}
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
    b[a0_0x326c6a(0x3)]({
        'v': k,
        'n': even[k]
    });
a[a0_0x326c6a(0x4)]((x, y) => y['n'] - x['n']);
b[a0_0x326c6a(0x4)]((x, y) => y['n'] - x['n']);
va = a[0x0];
vb = b[0x0];
if (va['v'] === vb['v']) {
    if (va['n'] > vb['n'])
        vb = !b[0x1] ? { 'n': 0x0 } : b[0x1];
    else
        va = !a[0x1] ? { 'n': 0x0 } : a[0x1];
}
log = console[a0_0x326c6a(0x5)];
log(n / 0x2 - va['n'] + n / 0x2 - vb['n']);
function a0_0x5cbe() {
    var _0x2cd2a1 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'push',
        'sort',
        'log'
    ];
    a0_0x5cbe = function () {
        return _0x2cd2a1;
    };
    return a0_0x5cbe();
}