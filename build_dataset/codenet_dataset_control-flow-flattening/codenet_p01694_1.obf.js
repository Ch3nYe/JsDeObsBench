var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['shift']()['split']('\x20');
    var L = 0x0;
    var R = 0x0;
    var UD = 0x2;
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var HgaYgk = {
            'uBEld': function (x, y) {
                return x == y;
            },
            'SNcze': function (x, y) {
                return x == y;
            },
            'ROUGp': function (x, y) {
                return x + y;
            }
        };
        if (HgaYgk['uBEld'](v, 'lu'))
            L = 0x1;
        else if (HgaYgk['SNcze'](v, 'ru'))
            R = 0x1;
        else if (v == 'ld')
            L = 0x0;
        else if (HgaYgk['SNcze'](v, 'rd'))
            R = 0x0;
        if (UD == HgaYgk['ROUGp'](L, R)) {
            cnt++;
            UD = UD == 0x2 ? 0x0 : 0x2;
        }
    });
    console['log'](cnt);
}