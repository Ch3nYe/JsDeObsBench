var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
arr = arr['map'](_0x91795e => _0x91795e['replace']('.', ''))['map'](Number);
var a = [];
for (var i = 0x0; i <= 0xfa0; i++)
    a[i] = 0x0;
arr['forEach'](_0x39aee4 => a[_0x39aee4]++);
var ans = [];
var s = [];
s[0x0] = a[0x0];
for (var i = 0x1; i <= 0xfa0; i++)
    s[i] = s[i - 0x1] + a[i];
arr['forEach'](_0x50f84d => {
    var _0x24e194 = 0x0;
    _0x24e194 += a[_0x50f84d] - 0x1;
    if (_0x50f84d != 0x0)
        _0x24e194 += s[_0x50f84d - 0x1] * 0x3;
    ans['push'](_0x24e194);
});
console['log'](ans['join']('\x0a'));