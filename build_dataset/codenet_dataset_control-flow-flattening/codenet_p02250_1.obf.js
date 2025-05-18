var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var str = arr[0x0];
var n = arr[0x1] - 0x0 + 0x2;
var ans = '';
for (var i = 0x2; i < n; i++) {
    ans += (str['includes'](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
console['log'](ans['trim']());