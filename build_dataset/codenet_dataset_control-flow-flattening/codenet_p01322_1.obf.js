var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = Arr['shift']()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20');
        var v = arr[0x0]['replace'](/\*/g, '');
        obj[v] = arr[0x1] - 0x0;
    }
    var sum = 0x0;
    for (var i = 0x0; i < m; i++) {
        var v = Arr['shift']();
        for (var k in obj) {
            if (k == v['slice'](-0x1 * k['length']))
                sum += obj[k];
        }
    }
    console['log'](sum);
}