var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var nt = Arr['shift']()['split']('\x20');
    var str = nt[0x0];
    var type = nt[0x1];
    if (type == 'X')
        break;
    str = str['replace'](/^./, function (_0x634d49) {
        return _0x634d49['toLowerCase']();
    });
    str = str['replace'](/[A-Z]/g, function (_0x36bd13) {
        return '_' + _0x36bd13;
    });
    var arr = str['split']('_');
    for (var i = 0x1; i < arr['length']; i++) {
        arr[i] = arr[i]['replace'](/./, function (_0x5dd70d) {
            return _0x5dd70d['toUpperCase']();
        });
    }
    if (type == 'U') {
        arr[0x0] = arr[0x0]['replace'](/^./, function (_0x3c37dd) {
            return _0x3c37dd['toUpperCase']();
        });
        console['log'](arr['join'](''));
    }
    if (type == 'L')
        console['log'](arr['join'](''));
    if (type == 'D')
        console['log'](arr['join']('_')['toLowerCase']());
}