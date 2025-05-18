var a0_0x380455 = a0_0x2d2f;
var input = require('fs')[a0_0x380455(0x0)](a0_0x380455(0x1), a0_0x380455(0x2));
function a0_0x2d2f(PghdIy, key) {
    var stringArray = a0_0x4b07();
    a0_0x2d2f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d2f(PghdIy, key);
}
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()[a0_0x380455(0x3)]('\x20')[a0_0x380455(0x4)](Number);
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
    console[a0_0x380455(0x5)](flag ? x + '\x20' + y : 'NA');
}
function a0_0x4b07() {
    var _0x11a3d1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'log'
    ];
    a0_0x4b07 = function () {
        return _0x11a3d1;
    };
    return a0_0x4b07();
}