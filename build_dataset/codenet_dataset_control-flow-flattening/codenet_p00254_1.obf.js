var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']();
    if (n == '0000')
        break;
    if (n == '1111' || n == '2222' || n == '3333' || n == '4444' || n == '5555') {
        console['log']('NA');
        continue;
    }
    if (n == '6666' || n == '7777' || n == '8888' || n == '9999') {
        console['log']('NA');
        continue;
    }
    var i = 0x0;
    while (!![]) {
        if (n == '6174')
            break;
        i++;
        var arr = n['split']('')['map'](Number);
        arr['sort'](function (a, b) {
            var cBgbtC = {
                'wmPwL': function (x, y) {
                    return x - y;
                }
            };
            return cBgbtC['wmPwL'](b, a);
        });
        var L = parseInt('' + arr[0x0] + arr[0x1] + arr[0x2] + arr[0x3], 0xa);
        var S = parseInt('' + arr[0x3] + arr[0x2] + arr[0x1] + arr[0x0], 0xa);
        n = ('0000' + (L - S))['slice'](-0x4);
    }
    console['log'](i);
}