var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var Q = Arr['shift']() - 0x0;
    if (Q == -0x1)
        break;
    var x = Q / 0x2;
    while (Math['abs'](Math['pow'](x, 0x3) - Q) >= 0.00001 * Q) {
        x = x - (Math['pow'](x, 0x3) - Q) / (0x3 * Math['pow'](x, 0x2));
    }
    console['log'](x['toFixed'](0x6));
}