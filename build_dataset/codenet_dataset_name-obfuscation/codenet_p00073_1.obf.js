var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
while (!![]) {
    var x = +lines['shift']();
    var h = +lines['shift']();
    if (x + h == 0x0)
        break;
    console['log']((x * x + x * Math['sqrt'](0x4 * h * h + x * x))['toFixed'](0x6));
}