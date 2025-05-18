var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var x = Arr['shift']()['split']('');
    if (x[0x0] == '0')
        break;
    var y = Arr['shift']()['split']('');
    var z = Arr['shift']()['split']('');
    var ans = 'NA';
    for (var i = 0x0; i < 0x2; i++) {
        var YSyxxd = '3|8|1|4|6|7|2|0|5'['split']('|');
        var uDKRiB = 0x0;
        while (!![]) {
            switch (YSyxxd[uDKRiB++]) {
            case '0':
                if (x[0x0] + y[0x1] + z[0x2] == s + s + s)
                    ans = s;
                continue;
            case '1':
                if (y[0x0] + y[0x1] + y[0x2] == s + s + s)
                    ans = s;
                continue;
            case '2':
                if (x[0x2] + y[0x2] + z[0x2] == s + s + s)
                    ans = s;
                continue;
            case '3':
                var s = [
                    'b',
                    'w'
                ][i];
                continue;
            case '4':
                if (z[0x0] + z[0x1] + z[0x2] == s + s + s)
                    ans = s;
                continue;
            case '5':
                if (x[0x2] + y[0x1] + z[0x0] == s + s + s)
                    ans = s;
                continue;
            case '6':
                if (x[0x0] + y[0x0] + z[0x0] == s + s + s)
                    ans = s;
                continue;
            case '7':
                if (x[0x1] + y[0x1] + z[0x1] == s + s + s)
                    ans = s;
                continue;
            case '8':
                if (x[0x0] + x[0x1] + x[0x2] == s + s + s)
                    ans = s;
                continue;
            }
            break;
        }
    }
    console['log'](ans);
}