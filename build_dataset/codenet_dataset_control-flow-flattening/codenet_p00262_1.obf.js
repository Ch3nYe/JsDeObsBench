var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var cnt = 0x0;
    while (!![]) {
        var flag = arr['every'](function (v, i) {
            var yioKLa = {
                'wiYVw': function (x, y) {
                    return x == y;
                },
                'wjljs': function (x, y) {
                    return x + y;
                }
            };
            return yioKLa['wiYVw'](yioKLa['wjljs'](i, 0x1), v);
        });
        if (flag)
            break;
        var L = arr['length'];
        arr = arr['map'](function (v) {
            var aWBdQP = {
                'oZiig': function (x, y) {
                    return x - y;
                }
            };
            return aWBdQP['oZiig'](v, 0x1);
        });
        arr = arr['filter'](function (v) {
            var pZEPoZ = {
                'tkyFJ': function (x, y) {
                    return x != y;
                }
            };
            return pZEPoZ['tkyFJ'](v, 0x0);
        });
        arr['push'](L);
        cnt++;
        if (cnt == 0x2710) {
            cnt = -0x1;
            break;
        }
    }
    console['log'](cnt);
}