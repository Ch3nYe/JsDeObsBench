var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var nr = Arr['shift']()['split']('\x20')['map'](Number);
    var n = nr[0x0];
    var r = nr[0x1];
    var card = [];
    for (var i = 0x0; i < n; i++)
        card[i] = i;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    for (var i = 0x0; i < r; i++) {
        var v = arr[i];
        var a = [];
        var b = [];
        for (var j = 0x0; j < n; j++)
            Math['floor'](n / 0x2) > j ? b['push'](card[j]) : a['push'](card[j]);
        card = [];
        while (!![]) {
            if (a['length'] == 0x0 && b['length'] == 0x0)
                break;
            card = card['concat'](a['splice'](0x0, v));
            card = card['concat'](b['splice'](0x0, v));
        }
    }
    console['log'](card[card['length'] - 0x1]);
}