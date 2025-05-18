var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var mn = Arr['shift']()['split']('\x20')['map'](Number);
    if (mn[0x0] == 0x0 && mn[0x1] == 0x0)
        break;
    var player = [];
    for (var i = 0x0; i < mn[0x0]; i++)
        player[i] = i + 0x1;
    var arr = [];
    for (var i = 0x0; i < mn[0x1]; i++) {
        var v = Arr['shift']();
        arr['push'](v);
    }
    var i = 0x1;
    var k = 0x0;
    var len = mn[0x0];
    for (var I = 0x0; I < arr['length']; I++) {
        var v = arr[I];
        var str = '';
        if (i % 0x3 == 0x0)
            str += 'Fizz';
        if (i % 0x5 == 0x0)
            str += 'Buzz';
        if (str == '')
            str = i;
        if (v != str) {
            player[k] = ![];
            len++;
            if (len == 0x1)
                break;
        }
        i++;
        var H = 0x0;
        do {
            H++;
            if (H > 0x3e8)
                break;
            k++;
            if (k >= player['length']) {
                player = player['filter'](function (_0x434828) {
                    return _0x434828 != ![];
                });
                k = 0x0;
            }
        } while (player[k] == ![]);
    }
    player = player['filter'](function (_0x9e67d6) {
        return _0x9e67d6 != ![];
    });
    console['log'](player['join']('\x20'));
}