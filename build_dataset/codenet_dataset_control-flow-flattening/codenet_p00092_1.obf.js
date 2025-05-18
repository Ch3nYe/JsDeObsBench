function seach(y, x) {
    var uGCVxl = {
        'xagnE': function (x, y) {
            return x == y;
        },
        'QOOUA': function (x, y) {
            return x < y;
        },
        'JHhEE': function (x, y) {
            return x + y;
        },
        'fcZYE': function (x, y) {
            return x + y;
        },
        'gjUjS': function (x, y) {
            return x >= y;
        },
        'TjXgU': function (x, y) {
            return x + y;
        }
    };
    if (uGCVxl['xagnE'](yx[y][x], '*'))
        return 0x0;
    var dy = [
        -0x1,
        -0x1,
        0x0
    ];
    var dx = [
        -0x1,
        0x0,
        -0x1
    ];
    var min = n;
    for (var i = 0x0; uGCVxl['QOOUA'](i, 0x3); i++) {
        var yy = uGCVxl['JHhEE'](y, dy[i]);
        var xx = uGCVxl['fcZYE'](x, dx[i]);
        if (yy < 0x0 || uGCVxl['gjUjS'](yy, n) || uGCVxl['QOOUA'](xx, 0x0) || xx >= n)
            return 0x1;
        min = Math['min'](min, yx[yy][xx]);
    }
    return uGCVxl['TjXgU'](min, 0x1);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var max = 0x0;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var str = Arr['shift']();
        yx['push'](str['split'](''));
    }
    for (var y = 0x0; y < n; y++) {
        for (var x = 0x0; x < n; x++) {
            yx[y][x] = seach(y, x);
            max = Math['max'](max, yx[y][x]);
        }
    }
    console['log'](max);
}