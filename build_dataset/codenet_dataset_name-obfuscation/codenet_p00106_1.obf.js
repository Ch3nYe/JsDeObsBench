var obj = {};
for (var i = 0x0; i <= 0x19; i++) {
    for (var j = 0x0; j <= 0x10; j++) {
        for (var k = 0x0; k <= 0xa; k++) {
            var weight = 0xc8 * i + 0x12c * j + 0x1f4 * k;
            if (weight > 0x1388)
                continue;
            var money = 0x0;
            money += 0x17c * 0x5 * 0.8 * Math['floor'](i / 0x5);
            money += 0x226 * 0x4 * 0.85 * Math['floor'](j / 0x4);
            money += 0x352 * 0x3 * 0.88 * Math['floor'](k / 0x3);
            money += 0x17c * (i % 0x5);
            money += 0x226 * (j % 0x4);
            money += 0x352 * (k % 0x3);
            if (obj['hasOwnProperty'](weight))
                obj[weight] = Math['min'](obj[weight], money);
            else
                obj[weight] = money;
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    console['log'](obj[n]);
}