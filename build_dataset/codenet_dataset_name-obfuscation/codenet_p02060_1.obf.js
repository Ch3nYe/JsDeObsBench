var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var p = arr['shift']()['split']('\x20')['map'](Number);
var t = arr['shift']()['split']('\x20')['map'](Number);
var s = [];
for (var i = 0x0; i <= 0xc8; i++)
    s[i] = Infinity;
s[0x0] = 0x0;
for (var i = 0x0; i <= 0x64; i++) {
    if (s[i] == Infinity)
        continue;
    s[i + t[0x0]] = Math['min'](s[i] + p[0x0], s[i + t[0x0]]);
    s[i + t[0x1]] = Math['min'](s[i] + p[0x1], s[i + t[0x1]]);
    s[i + t[0x2]] = Math['min'](s[i] + p[0x2], s[i + t[0x2]]);
    s[i + t[0x3]] = Math['min'](s[i] + p[0x3], s[i + t[0x3]]);
}
var min = Infinity;
for (var i = n; i <= 0xc8; i++)
    min = Math['min'](min, s[i]);
console['log'](min);