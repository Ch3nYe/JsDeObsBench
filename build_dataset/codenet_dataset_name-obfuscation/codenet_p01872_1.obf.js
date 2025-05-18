var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var str = input['trim']();
var ans = '';
for (var j = 0x0; j <= 0x9; j++) {
    var arr = str['replace'](/\?/, j)['split']('')['map'](Number)['reverse']();
    var sum = 0x0;
    for (var i = 0x1; i <= 0x6; i++)
        sum += arr[i] * (i + 0x1);
    for (var i = 0x7; i <= 0xb; i++)
        sum += arr[i] * (i - 0x5);
    var p = 0xb - sum % 0xb;
    if (sum % 0xb <= 0x1)
        p = 0x0;
    ans += p == arr[0x0] ? j : '';
}
if (ans['length'] == 0x1)
    console['log'](ans[0x0]);
else
    console['log']('MULTIPLE');