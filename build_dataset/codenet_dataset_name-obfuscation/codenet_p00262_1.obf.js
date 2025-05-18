var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var cnt = 0x0;
    while (!![]) {
        var flag = arr['every'](function (_0x5486b3, _0x12e8d0) {
            return _0x12e8d0 + 0x1 == _0x5486b3;
        });
        if (flag)
            break;
        var L = arr['length'];
        arr = arr['map'](function (_0x39df2e) {
            return _0x39df2e - 0x1;
        });
        arr = arr['filter'](function (_0x53adf5) {
            return _0x53adf5 != 0x0;
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