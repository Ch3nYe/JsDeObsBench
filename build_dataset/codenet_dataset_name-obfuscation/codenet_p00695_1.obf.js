var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['push']('');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var yx = [];
    var dp = [];
    for (var i = 0x0; i < 0x5; i++) {
        var v = Arr['shift']()['split']('\x20')['map'](Number);
        yx['push'](v);
        dp['push']([]);
    }
    for (var y = 0x0; y < 0x5; y++) {
        for (var x = 0x0; x < 0x5; x++) {
            if (y == 0x0)
                dp[y][x] = yx[y][x] == 0x1 ? 0x1 : 0x0;
            else
                dp[y][x] = yx[y][x] == 0x1 ? dp[y - 0x1][x] + 0x1 : 0x0;
        }
    }
    var max = 0x0;
    for (var y = 0x0; y < 0x5; y++) {
        for (var i = 0x0; i < 0x5; i++) {
            for (var j = i; j < 0x5; j++) {
                var min = Infinity;
                for (var k = i; k <= j; k++)
                    min = Math['min'](min, dp[y][k]);
                max = Math['max'](max, min * (j - i + 0x1));
            }
        }
    }
    console['log'](max);
    Arr['shift']();
}