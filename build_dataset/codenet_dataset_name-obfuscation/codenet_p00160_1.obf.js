var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20')['map'](Number);
        var L = arr[0x0] + arr[0x1] + arr[0x2];
        var W = arr[0x3];
        var x;
        if (L > 0xa0)
            x = 0x0;
        if (L <= 0xa0)
            x = 0x640;
        if (L <= 0x8c)
            x = 0x578;
        if (L <= 0x78)
            x = 0x4b0;
        if (L <= 0x64)
            x = 0x3e8;
        if (L <= 0x50)
            x = 0x320;
        if (L <= 0x3c)
            x = 0x258;
        var y;
        if (W > 0x19)
            y = 0x0;
        if (W <= 0x19)
            y = 0x640;
        if (W <= 0x14)
            y = 0x578;
        if (W <= 0xf)
            y = 0x4b0;
        if (W <= 0xa)
            y = 0x3e8;
        if (W <= 0x5)
            y = 0x320;
        if (W <= 0x2)
            y = 0x258;
        if (x != 0x0 && y != 0x0)
            sum += Math['max'](x, y);
    }
    console['log'](sum);
}