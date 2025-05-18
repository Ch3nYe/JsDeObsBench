var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr['push'](v);
    }
    arr['sort'](function (a, b) {
        var VfDqWT = {
            'wVTWt': function (x, y) {
                return x - y;
            }
        };
        return VfDqWT['wVTWt'](a, b);
    });
    var wait = [];
    var time = 0x0;
    for (var i = 0x0; i < n; i++) {
        wait['push'](time);
        time += arr[i];
    }
    var sum = wait['reduce'](function (a, b) {
        var nLmyhG = {
            'JZEtR': function (x, y) {
                return x + y;
            }
        };
        return nLmyhG['JZEtR'](a, b);
    });
    console['log'](sum);
}