var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nab = arr['shift']();
    if (nab == '0\x200\x200')
        break;
    nab = nab['split']('\x20')['map'](Number);
    var n = nab[0x0];
    var ab = [
        nab[0x1],
        nab[0x2]
    ];
    var dp = [];
    for (var i = 0x0; i <= n; i++)
        dp[i] = ![];
    dp[0x0] = !![];
    for (var i = 0x0; i < ab['length']; i++) {
        for (var j = 0x0; j <= n; j++) {
            if (dp[j])
                dp[j + ab[i]] = !![];
        }
    }
    var cnt = 0x0;
    dp['forEach'](function (v) {
        var YBQNqT = {
            'YPzXi': function (x, y) {
                return x == y;
            }
        };
        if (YBQNqT['YPzXi'](v, ![]))
            cnt++;
    });
    console['log'](cnt);
}