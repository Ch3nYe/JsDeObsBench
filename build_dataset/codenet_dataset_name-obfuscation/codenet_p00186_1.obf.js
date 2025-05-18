var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr[0x0] == 0x0)
        break;
    var q1 = arr[0x0];
    var b = arr[0x1];
    var c1 = arr[0x2];
    var c2 = arr[0x3];
    var q2 = arr[0x4];
    var x = 0x0;
    var y = 0x0;
    var flag = !![];
    while (!![]) {
        if (b >= c1 * (x + 0x1) && x + 0x1 <= q2)
            x++;
        else
            break;
    }
    while (!![]) {
        if (b >= c1 * x + c2 * (y + 0x1))
            y++;
        else
            break;
    }
    while (!![]) {
        if (x == 0x0) {
            flag = ![];
            break;
        }
        if (c1 * x + c2 * y > b) {
            flag = ![];
            break;
        }
        if (q1 > x + y) {
            x--;
            while (!![]) {
                if (b >= c1 * x + c2 * (y + 0x1))
                    y++;
                else
                    break;
            }
        } else {
            break;
        }
    }
    console['log'](flag ? x + '\x20' + y : 'NA');
}