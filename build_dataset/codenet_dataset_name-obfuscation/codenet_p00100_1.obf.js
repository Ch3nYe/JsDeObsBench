var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var obj = {};
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    if (i != 0x0 && arr['length'] == 0x1) {
        var keys = [];
        for (var k in obj)
            keys['push'](k - 0x0);
        var cnt = 0x0;
        for (var j = 0x0; j < keys['length']; j++) {
            if (obj[keys[j + '']] >= 0xf4240) {
                console['log'](keys[j + '']);
                cnt++;
            }
        }
        if (cnt == 0x0)
            console['log']('NA');
        if (arr[0x0] == 0x0)
            break;
        obj = {};
    } else if (arr['length'] == 0x3) {
        if (!obj['hasOwnProperty'](arr[0x0]))
            obj[arr[0x0]] = arr[0x1] * arr[0x2];
        else
            obj[arr[0x0]] += arr[0x1] * arr[0x2];
    }
}