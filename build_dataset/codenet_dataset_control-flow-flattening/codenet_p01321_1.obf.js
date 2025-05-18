var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var S = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr['shift']()['split']('\x20')['map'](Number);
        var sum = arr['reduce'](function (a, b) {
            var DZTWgy = {
                'XxSYx': function (x, y) {
                    return x + y;
                }
            };
            return DZTWgy['XxSYx'](a, b);
        });
        S['push'](sum);
    }
    S['sort'](function (a, b) {
        return b - a;
    });
    console['log'](S[0x0] + '\x20' + S[S['length'] - 0x1]);
}