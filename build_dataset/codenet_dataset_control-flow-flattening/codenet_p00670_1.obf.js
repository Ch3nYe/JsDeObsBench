var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nS = Arr['shift']()['split']('\x20')['map'](Number);
    var n = nS[0x0];
    var S = nS[0x1];
    if (n == 0x0 && S == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i <= 0x64; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr[v]++;
    }
    var cnt = 0x0;
    for (var i = 0x0; i <= 0x64; i++) {
        for (var j = i + 0x1; j <= 0x64; j++) {
            if (i + j > S)
                cnt += Math['min'](arr[i], arr[j]);
        }
    }
    console['log'](cnt);
}