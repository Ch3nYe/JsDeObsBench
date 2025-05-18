var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, d] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && d == 0x0)
        break;
    var S = [];
    var C = [];
    for (var i = 0x0; i < n; i++) {
        var fAnJxF = '5|2|0|4|3|1'['split']('|');
        var AcTozK = 0x0;
        while (!![]) {
            switch (fAnJxF[AcTozK++]) {
            case '0':
                var c = mc['map'](Number)['reverse']();
                continue;
            case '1':
                C[i] = c;
                continue;
            case '2':
                mc['shift']();
                continue;
            case '3':
                S[i] = sum;
                continue;
            case '4':
                var sum = c['length'] != 0x0 ? c['reduce']((a, b) => a + b) : 0x0;
                continue;
            case '5':
                var mc = arr[i]['split']('\x20');
                continue;
            }
            break;
        }
    }
    while (!![]) {
        var f = ![];
        for (var i = 0x0; i < S['length']; i++) {
            if (S[i] == 0x0)
                continue;
            S[i] -= C[i][0x0];
            if (Math['max'](...S) - Math['min'](...S) <= d) {
                C[i]['shift']();
                f = !![];
                break;
            } else {
                S[i] += C[i][0x0];
            }
        }
        if (f == ![])
            break;
    }
    var sum = S['reduce']((a, b) => a + b);
    if (sum == 0x0)
        console['log']('Yes');
    else
        console['log']('No');
    arr = arr['slice'](n);
}