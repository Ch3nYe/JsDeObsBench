var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var xyz = [];
for (var i = 0x0; i <= n; i++)
    xyz[i] = [
        0x0,
        0x0,
        0x0
    ];
var x = arr['shift']()['split']('\x20')['map'](Number);
var y = arr['shift']()['split']('\x20')['map'](Number);
var z = arr['shift']()['split']('\x20')['map'](Number);
x['shift']();
y['shift']();
z['shift']();
x['forEach'](_0x5cc652 => {
    xyz[_0x5cc652][0x0] = 0x1;
});
y['forEach'](_0x15d498 => {
    xyz[_0x15d498][0x1] = 0x1;
});
z['forEach'](_0x66334e => {
    xyz[_0x66334e][0x2] = 0x1;
});
xyz['shift']();
var cnt = 0x0;
xyz['forEach'](_0x16eaf3 => {
    if (_0x16eaf3[0x0] == 0x0 && _0x16eaf3[0x2] == 0x1)
        cnt++;
    else if (_0x16eaf3[0x1] == 0x1 && _0x16eaf3[0x2] == 0x1)
        cnt++;
});
console['log'](cnt);