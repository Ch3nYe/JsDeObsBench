var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = arr['shift']()['split']('\x20')['map'](Number);
    if (ab['join']('\x20') == '0\x200')
        break;
    var a = ab[0x0];
    var b = ab[0x1];
    var A = [];
    var B = [];
    for (i = 0x1; i <= Math['sqrt'](a); i++) {
        if (a % i == 0x0)
            A['push']([
                a / i,
                i
            ]);
    }
    for (i = 0x1; i <= Math['sqrt'](b); i++) {
        if (b % i == 0x0)
            B['push']([
                b / i,
                i
            ]);
    }
    var min = Infinity;
    A['forEach'](function (va) {
        var QyMadp = {
            'ZGyUs': function (x, y) {
                return x + y;
            },
            'HnyVn': function (x, y) {
                return x - y;
            }
        };
        B['forEach'](function (vb) {
            var c = [
                va[0x0],
                va[0x1],
                vb[0x0],
                vb[0x1]
            ];
            c['sort'](function (a, b) {
                return a - b;
            });
            min = Math['min'](min, QyMadp['ZGyUs'](Math['pow'](c[0x0] - c[0x1], 0x2) + Math['pow'](QyMadp['HnyVn'](c[0x1], c[0x2]), 0x2), Math['pow'](c[0x2] - c[0x3], 0x2)));
        });
    });
    console['log'](min);
}