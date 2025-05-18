var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var e = Arr['shift']() - 0x0;
    if (e == 0x0)
        break;
    var min = Infinity;
    for (var z = 0x0; z <= 0x64; z++) {
        for (var y = 0x0; y <= 0x3e8; y++) {
            var x = e - (Math['pow'](z, 0x3) + Math['pow'](y, 0x2));
            if (x < 0x0)
                break;
            min = Math['min'](min, z + y + x);
        }
    }
    console['log'](min);
}