var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var tdl = arr[0x0];
    if (tdl == '0\x200\x200')
        break;
    var [t, d, l] = tdl['split']('\x20')['map'](Number);
    var cnt = 0x0;
    var time = 0x0;
    for (var i = 0x0; i < t; i++) {
        if (time != 0x0)
            cnt++;
        if (time > 0x0)
            time--;
        var x = arr[i + 0x1] - 0x0;
        if (x >= l)
            time = d;
    }
    console['log'](cnt);
    arr = arr['slice'](t + 0x1);
}