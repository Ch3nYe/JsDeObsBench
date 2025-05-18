var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']();
    if (n == '0')
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var k = 0x0;
    var S = [];
    while (!![]) {
        for (var i = 0x0; i < arr['length']; i++) {
            var cnt = 0x0;
            for (var j = 0x0; j < arr['length']; j++) {
                if (arr[i] == arr[j])
                    cnt++;
            }
            S['push'](cnt);
        }
        if (S['join']('\x20') == arr['join']('\x20'))
            break;
        arr = S['slice']();
        S = [];
        k++;
    }
    console['log'](k);
    console['log'](S['join']('\x20'));
}