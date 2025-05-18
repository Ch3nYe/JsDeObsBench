var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nmp = Arr['shift']()['split']('\x20')['map'](Number);
    if (nmp[0x0] == 0x0 && nmp[0x1] == 0x0 && nmp[0x2] == 0x0)
        break;
    var n = nmp[0x0];
    var m = nmp[0x1] - 0x1;
    var p = nmp[0x2];
    var arr = [];
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr['push'](v);
        sum += v * 0x64;
    }
    sum = sum * (0x64 - p) / 0x64;
    var ans = 0x0;
    if (arr[m] != 0x0)
        ans = Math['floor'](sum / arr[m]);
    console['log'](ans);
}