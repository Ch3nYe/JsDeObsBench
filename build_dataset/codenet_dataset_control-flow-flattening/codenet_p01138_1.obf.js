var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = [];
    while (n--) {
        var wiURQk = '3|1|5|4|0|2'['split']('|');
        var IQtQJy = 0x0;
        while (!![]) {
            switch (wiURQk[IQtQJy++]) {
            case '0':
                end = end[0x0] * 0x3c * 0x3c + end[0x1] * 0x3c + end[0x2];
                continue;
            case '1':
                var start = hms[0x0]['split'](':')['map'](Number);
                continue;
            case '2':
                ary['push']([
                    start,
                    end
                ]);
                continue;
            case '3':
                var hms = arr['shift']()['split']('\x20');
                continue;
            case '4':
                start = start[0x0] * 0x3c * 0x3c + start[0x1] * 0x3c + start[0x2];
                continue;
            case '5':
                var end = hms[0x1]['split'](':')['map'](Number);
                continue;
            }
            break;
        }
    }
    ary['sort'](function (a, b) {
        return a[0x0] - b[0x0];
    });
    var train = [];
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var WVCkqQ = {
            'ZBOvk': function (x, y) {
                return x == y;
            },
            'eczeY': function (x, y) {
                return x <= y;
            }
        };
        if (WVCkqQ['ZBOvk'](train['length'], 0x0)) {
            cnt++;
            train['push'](v[0x1]);
        } else {
            train['sort'](function (a, b) {
                return a - b;
            });
            if (WVCkqQ['eczeY'](train[0x0], v[0x0])) {
                train['shift']();
                train['push'](v[0x1]);
            } else {
                cnt++;
                train['push'](v[0x1]);
            }
        }
    });
    console['log'](cnt);
}