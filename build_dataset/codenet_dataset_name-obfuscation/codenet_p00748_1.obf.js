var a = [0x1];
for (var i = 0x1; i < 0x186a0; i++)
    a[i] = a[i - 0x1] + i + 0x1;
var b = [0x1];
var i = 0x1;
while (!![]) {
    b[i] = b[i - 0x1] + a[i];
    if (b[i] > 0x186a0)
        break;
    i++;
}
var dpA = [];
var dpB = [];
for (var i = 0x0; i < 0x186a0; i++)
    dpA[i] = Infinity;
for (var i = 0x0; i < 0x186a0; i++)
    dpB[i] = Infinity;
dpA[0x0] = 0x0;
dpB[0x0] = 0x0;
for (var i = 0x0; i < 0x186a0; i++) {
    for (var j = 0x0; j < b['length']; j++) {
        if (i - b[j] >= 0x0)
            dpA[i] = Math['min'](dpA[i - b[j]] + 0x1, dpA[i]);
        if (b[j] % 0x2 == 0x1 && i - b[j] >= 0x0)
            dpB[i] = Math['min'](dpB[i - b[j]] + 0x1, dpB[i]);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    console['log'](dpA[n] + '\x20' + dpB[n]);
}