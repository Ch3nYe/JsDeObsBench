function bomb(name) {
    var wToHGd = {
        'AmhNA': function (x, y) {
            return x == y;
        }
    };
    var min = obj[name];
    M['forEach'](function (v) {
        if (wToHGd['AmhNA'](name, v[0x0])) {
            var sum = 0x0;
            v[0x1]['forEach'](function (value) {
                sum += bomb(value);
            });
            min = Math['min'](min, sum);
        }
    });
    return min;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var data = arr['shift']()['split']('\x20');
        obj[data[0x0]] = data[0x1] - 0x0;
    }
    var m = arr['shift']() - 0x0;
    var M = [];
    for (var i = 0x0; i < m; i++) {
        var data = arr['shift']()['split']('\x20');
        var name = data['shift']();
        data['shift']();
        M['push']([
            name,
            data
        ]);
    }
    var item = arr['shift']();
    console['log'](bomb(item));
}