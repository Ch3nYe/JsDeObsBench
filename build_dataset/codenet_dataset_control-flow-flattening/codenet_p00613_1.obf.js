var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var K = Arr['shift']() - 0x0;
    if (K == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var sum = arr['reduce'](function (a, b) {
        var LWcwbY = {
            'ZgyYO': function (x, y) {
                return x + y;
            }
        };
        return LWcwbY['ZgyYO'](a, b);
    });
    console['log'](sum / (K - 0x1));
}