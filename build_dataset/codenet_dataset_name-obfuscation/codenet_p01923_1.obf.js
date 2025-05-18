var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (arr[0x0] == '0\x200')
        break;
    var nm = arr['shift']()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var max = [];
    for (var i = 0x0; i < m; i++)
        max[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var dv = arr['shift']()['split']('\x20')['map'](Number);
        var d = dv[0x0] - 0x1;
        var v = dv[0x1];
        if (max[d] < v)
            max[d] = v;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++)
        sum += max[i];
    console['log'](sum);
}