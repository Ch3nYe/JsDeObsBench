var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var p = arr['shift']()['split']('\x20')['map'](Number);
var ans = 0x0;
for (var i = 0x1; i <= 0x64; i++) {
    var cnt = 0x0;
    p['forEach'](_0xd0103d => {
        if (_0xd0103d >= i)
            cnt++;
    });
    if (cnt >= i)
        ans = i;
}
console['log'](ans);