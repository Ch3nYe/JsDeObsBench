var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
arr = arr['map'](v => v['replace']('.', ''))['map'](Number);
var a = [];
for (var i = 0x0; i <= 0xfa0; i++)
    a[i] = 0x0;
arr['forEach'](v => a[v]++);
var ans = [];
var s = [];
s[0x0] = a[0x0];
for (var i = 0x1; i <= 0xfa0; i++)
    s[i] = s[i - 0x1] + a[i];
arr['forEach'](v => {
    var wWmaDo = {
        'uVOoi': function (x, y) {
            return x - y;
        }
    };
    var point = 0x0;
    point += wWmaDo['uVOoi'](a[v], 0x1);
    if (v != 0x0)
        point += s[v - 0x1] * 0x3;
    ans['push'](point);
});
console['log'](ans['join']('\x0a'));