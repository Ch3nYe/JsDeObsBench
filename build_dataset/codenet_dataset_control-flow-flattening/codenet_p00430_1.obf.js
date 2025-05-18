function bomb(arr) {
    var uQkwpO = {
        'XqzvL': function (x, y) {
            return x === y;
        },
        'RQGRY': function (x, y) {
            return x - y;
        },
        'cgqQS': function (x, y) {
            return x !== y;
        },
        'xawmt': function (x, y) {
            return x === y;
        },
        'rGHOJ': function (x, y) {
            return x - y;
        },
        'cGXza': function (x, y) {
            return x + y;
        }
    };
    console['log'](arr['join']('\x20'));
    if (uQkwpO['XqzvL'](arr[0x0], 0x1))
        return;
    var i = uQkwpO['RQGRY'](arr['length'], 0x1);
    while (!![]) {
        if (uQkwpO['cgqQS'](arr[i], 0x1)) {
            if (uQkwpO['xawmt'](arr[i], 0x2) || i === uQkwpO['rGHOJ'](arr['length'], 0x1)) {
                arr[i]--;
                arr['push'](0x1);
            } else {
                arr[i]--;
                arr[uQkwpO['cGXza'](i, 0x1)]++;
            }
            break;
        }
        i--;
    }
    bomb(arr);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    bomb([n]);
}