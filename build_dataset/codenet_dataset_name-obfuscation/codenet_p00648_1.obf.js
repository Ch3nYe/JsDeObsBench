var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var obj = {};
    var ary = [];
    for (var i = 0x0; i < N; i++) {
        var nws = arr['shift']()['split']('\x20');
        var name = nws[0x0];
        var w = nws[0x1] - 0x0;
        var s = nws[0x2]['split']('')['map'](Number);
        s = s['length'] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
        obj[name] = w * 0x5a0 + s;
        ary['push'](w * 0x5a0 + s);
    }
    var P = arr['shift']() - 0x0;
    for (var i = 0x0; i < P; i++) {
        var f = arr['shift']();
        ary['push'](obj[f] - 29.5);
    }
    ary['sort'](function (_0x2bdf4e, _0x18ce37) {
        return _0x2bdf4e - _0x18ce37;
    });
    var cnt = 0x0;
    var i = 0x0;
    var p = 0x0;
    ary['forEach'](function (_0x2f3d07) {
        if (_0x2f3d07 % 0x1 == 0.5) {
            cnt++;
            p++;
            i = _0x2f3d07 + 29.5 + 0x1e;
        } else if (i <= _0x2f3d07) {
            cnt++;
            i = _0x2f3d07 + 0x1e;
        }
    });
    if (p != P)
        cnt = -0x1;
    console['log'](cnt);
}