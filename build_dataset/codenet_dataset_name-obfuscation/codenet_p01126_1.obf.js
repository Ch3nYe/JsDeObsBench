var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var A = Arr['shift']();
    if (A == '0\x200\x200')
        break;
    var arr = A['split']('\x20')['map'](Number);
    var m = arr[0x1];
    var start = arr[0x2];
    var hpq = [];
    for (var i = 0x0; i < m; i++)
        hpq['push'](Arr['shift']());
    hpq['sort'](function (_0x20ad51, _0x5b8366) {
        _0x20ad51 = _0x20ad51['split']('\x20')[0x0] - 0x0;
        _0x5b8366 = _0x5b8366['split']('\x20')[0x0] - 0x0;
        if (_0x20ad51 >= _0x5b8366)
            return -0x1;
        else
            return 0x1;
    });
    var H = 0x3e9;
    for (var i = 0x0; i < hpq['length']; i++) {
        var HPQ = hpq[i]['split']('\x20')['map'](Number);
        var h = HPQ[0x0];
        var p = HPQ[0x1];
        var q = HPQ[0x2];
        if (H == h)
            continue;
        if (start == p || start == q) {
            H = h;
            start = start == p ? q : p;
        }
    }
    console['log'](start);
}