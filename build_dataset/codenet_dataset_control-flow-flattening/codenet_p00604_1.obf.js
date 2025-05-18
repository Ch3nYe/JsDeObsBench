var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var n = Arr['shift']();
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    arr['sort'](function (a, b) {
        var MThTlb = {
            'geiQm': function (x, y) {
                return x - y;
            }
        };
        return MThTlb['geiQm'](a, b);
    });
    var sum = 0x0;
    var time = 0x0;
    arr['forEach'](function (v) {
        sum += v + time;
        time += v;
    });
    console['log'](sum);
}