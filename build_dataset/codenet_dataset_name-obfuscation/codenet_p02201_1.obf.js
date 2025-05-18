var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var cnt = 0x0;
arr['forEach'](_0x302e9a => {
    if (_0x302e9a == 'E869120')
        cnt++;
});
console['log'](cnt);