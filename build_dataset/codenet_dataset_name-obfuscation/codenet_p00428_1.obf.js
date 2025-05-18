var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var NM = Arr['shift']();
    if (NM == '0\x200')
        break;
    var nm = NM['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var arr = [];
    for (var i = 0x0; i < m; i++)
        arr['push']({
            'x': i + 0x1,
            'sum': 0x0
        });
    for (var i = 0x0; i < n; i++) {
        var data = Arr['shift']()['split']('\x20')['map'](Number);
        arr['forEach'](function (_0x7c9154, _0x35a01b) {
            arr[_0x35a01b]['sum'] += data[_0x35a01b];
        });
    }
    arr['sort'](function (_0x29bb6c, _0x319810) {
        _0x29bb6c = _0x29bb6c['sum'];
        _0x319810 = _0x319810['sum'];
        return _0x319810 - _0x29bb6c;
    });
    var c = [];
    arr['forEach'](function (_0x5255fe) {
        c['push'](_0x5255fe['x']);
    });
    console['log'](c['join']('\x20'));
}