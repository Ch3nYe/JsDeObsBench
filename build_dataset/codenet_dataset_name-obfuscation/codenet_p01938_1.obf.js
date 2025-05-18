var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var s = input['trim']()['split']('');
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'['split']('');
s = s['map'](_0x496a08 => abc['indexOf'](_0x496a08));
var cnt = 0x0;
var memo = 0x0;
s['forEach'](_0x5db882 => {
    if (memo >= _0x5db882)
        cnt++;
    memo = _0x5db882;
});
console['log'](cnt);