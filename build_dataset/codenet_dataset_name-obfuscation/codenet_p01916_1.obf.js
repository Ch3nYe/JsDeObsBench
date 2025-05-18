var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var s = arr[0x0]['split']('');
for (var i = 0x0; i < s['length']; i++) {
    for (var j = i + 0x1; j < s['length']; j++) {
        if (s[i] == s[j]) {
            s[i] = '';
            s[j] = '';
            break;
        }
    }
}
var n = s['join']('')['length'];
if (n == 0x0 || n == 0x1)
    console['log'](0x0);
else if (n % 0x2 == 0x0)
    console['log'](n / 0x2);
else
    console['log']((n - 0x1) / 0x2);