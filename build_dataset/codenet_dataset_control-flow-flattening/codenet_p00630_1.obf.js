var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var nt = Arr['shift']()['split']('\x20');
    var str = nt[0x0];
    var type = nt[0x1];
    if (type == 'X')
        break;
    str = str['replace'](/^./, function (s) {
        return s['toLowerCase']();
    });
    str = str['replace'](/[A-Z]/g, function (s) {
        var lHtJmq = {
            'ntADc': function (x, y) {
                return x + y;
            }
        };
        return lHtJmq['ntADc']('_', s);
    });
    var arr = str['split']('_');
    for (var i = 0x1; i < arr['length']; i++) {
        arr[i] = arr[i]['replace'](/./, function (s) {
            return s['toUpperCase']();
        });
    }
    if (type == 'U') {
        arr[0x0] = arr[0x0]['replace'](/^./, function (s) {
            return s['toUpperCase']();
        });
        console['log'](arr['join'](''));
    }
    if (type == 'L')
        console['log'](arr['join'](''));
    if (type == 'D')
        console['log'](arr['join']('_')['toLowerCase']());
}