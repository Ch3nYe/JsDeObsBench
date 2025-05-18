var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = [];
    while (n--) {
        var hms = arr['shift']()['split']('\x20');
        var start = hms[0x0]['split'](':')['map'](Number);
        var end = hms[0x1]['split'](':')['map'](Number);
        start = start[0x0] * 0x3c * 0x3c + start[0x1] * 0x3c + start[0x2];
        end = end[0x0] * 0x3c * 0x3c + end[0x1] * 0x3c + end[0x2];
        ary['push']([
            start,
            end
        ]);
    }
    ary['sort'](function (_0x1b72d3, _0x39b4a1) {
        return _0x1b72d3[0x0] - _0x39b4a1[0x0];
    });
    var train = [];
    var cnt = 0x0;
    ary['forEach'](function (_0x440f0b) {
        if (train['length'] == 0x0) {
            cnt++;
            train['push'](_0x440f0b[0x1]);
        } else {
            train['sort'](function (_0x244331, _0x305cc1) {
                return _0x244331 - _0x305cc1;
            });
            if (train[0x0] <= _0x440f0b[0x0]) {
                train['shift']();
                train['push'](_0x440f0b[0x1]);
            } else {
                cnt++;
                train['push'](_0x440f0b[0x1]);
            }
        }
    });
    console['log'](cnt);
}