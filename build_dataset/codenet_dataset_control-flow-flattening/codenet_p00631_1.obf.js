function bomb(a, b, i) {
    var ajfpVL = {
        'WBGHo': function (x, y) {
            return x - y;
        },
        'Gwpzw': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'gcrZU': function (x, y) {
            return x + y;
        },
        'wWOTo': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    if (i == n) {
        min = Math['min'](min, Math['abs'](ajfpVL['WBGHo'](a, b)));
        return;
    }
    ajfpVL['Gwpzw'](bomb, a + arr[i], b, ajfpVL['gcrZU'](i, 0x1));
    ajfpVL['wWOTo'](bomb, a, b + arr[i], ajfpVL['gcrZU'](i, 0x1));
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var min = Infinity;
    bomb(0x0, 0x0, 0x0);
    console['log'](min);
}