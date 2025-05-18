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
        arr['forEach'](function (v, j) {
            arr[j]['sum'] += data[j];
        });
    }
    arr['sort'](function (a, b) {
        var RuOWHG = {
            'CWxYx': function (x, y) {
                return x - y;
            }
        };
        a = a['sum'];
        b = b['sum'];
        return RuOWHG['CWxYx'](b, a);
    });
    var c = [];
    arr['forEach'](function (v) {
        c['push'](v['x']);
    });
    console['log'](c['join']('\x20'));
}