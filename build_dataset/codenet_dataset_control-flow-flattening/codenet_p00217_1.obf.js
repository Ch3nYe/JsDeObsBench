var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var AL = Arr['shift']();
    if (AL == 0x0)
        break;
    var pd = [];
    for (var i = 0x0; i < AL; i++) {
        var arr = Arr['shift']()['split']('\x20')['map'](Number);
        var p = arr[0x0];
        var d = arr[0x1] + arr[0x2];
        pd['push']([
            p,
            d
        ]);
    }
    pd['sort'](function (a, b) {
        var ryWnZI = {
            'WLLIl': function (x, y) {
                return x <= y;
            }
        };
        if (ryWnZI['WLLIl'](a[0x1], b[0x1]))
            return 0x1;
        else
            return -0x1;
    });
    console['log'](pd[0x0]['join']('\x20'));
}