var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var y = Arr['shift']() - 0x0;
    var S = [];
    var s = [];
    for (var i = 0x0; i < n; i++) {
        var brt = Arr['shift']()['split']('\x20')['map'](Number);
        var r = brt[0x1];
        var t = brt[0x2];
        var result;
        if (t == 0x1)
            result = 0x2710 * (0x1 + y * (r / 0x64));
        if (t == 0x2)
            result = 0x2710 * Math['pow'](0x1 + r / 0x64, y);
        S['push'](brt[0x0]);
        s['push'](result);
    }
    var max = Math['max']['apply'](null, s);
    console['log'](S[s['indexOf'](max)]);
}