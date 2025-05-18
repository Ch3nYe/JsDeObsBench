var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var str = input['trim']();
var ans = '';
for (var j = 0x0; j <= 0x9; j++) {
    var nuIEmX = '6|5|2|4|1|0|3'['split']('|');
    var NEsHXH = 0x0;
    while (!![]) {
        switch (nuIEmX[NEsHXH++]) {
        case '0':
            if (sum % 0xb <= 0x1)
                p = 0x0;
            continue;
        case '1':
            var p = 0xb - sum % 0xb;
            continue;
        case '2':
            for (var i = 0x1; i <= 0x6; i++)
                sum += arr[i] * (i + 0x1);
            continue;
        case '3':
            ans += p == arr[0x0] ? j : '';
            continue;
        case '4':
            for (var i = 0x7; i <= 0xb; i++)
                sum += arr[i] * (i - 0x5);
            continue;
        case '5':
            var sum = 0x0;
            continue;
        case '6':
            var arr = str['replace'](/\?/, j)['split']('')['map'](Number)['reverse']();
            continue;
        }
        break;
    }
}
if (ans['length'] == 0x1)
    console['log'](ans[0x0]);
else
    console['log']('MULTIPLE');