var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var n = arr['shift']();
var a = arr['shift']();
var cnt = 0x1;
var max = 0x1;
var memo = 0x0;
arr['forEach'](_0x58f2c9 => {
    if (a > _0x58f2c9) {
        if (memo == 0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = -0x1;
    } else if (a < _0x58f2c9) {
        if (memo == -0x1)
            cnt = 0x2;
        else
            cnt++;
        memo = 0x1;
    }
    max = Math['max'](max, cnt);
    a = _0x58f2c9;
});
console['log'](max);