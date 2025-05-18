var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var cnt = 0x0;
arr['forEach'](v => {
    var VbFjAY = { 'UndjS': 'E869120' };
    if (v == VbFjAY['UndjS'])
        cnt++;
});
console['log'](cnt);