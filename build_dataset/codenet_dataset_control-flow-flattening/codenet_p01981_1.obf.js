var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var gymd = arr['shift']();
    if (gymd == '#')
        break;
    var [g, y, m, d] = gymd['split']('\x20');
    [y, m, d] = [
        y - 0x0,
        m - 0x0,
        d - 0x0
    ];
    if (y <= 0x1e || y == 0x1f && m <= 0x4)
        console['log'](gymd);
    else {
        y = y - 0x1e;
        console['log']('?\x20' + y + '\x20' + m + '\x20' + d);
    }
}