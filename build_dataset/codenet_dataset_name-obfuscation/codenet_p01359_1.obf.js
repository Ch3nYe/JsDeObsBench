var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, q] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && q == 0x0)
        break;
    var g = [];
    for (var i = 0x0; i < n; i++) {
        var [e, ey, wy] = arr['shift']()['split']('\x20');
        [ey, wy] = [
            ey - 0x0,
            wy - 0x0
        ];
        g['push']([
            e,
            wy - ey,
            wy
        ]);
    }
    for (var i = 0x0; i < q; i++) {
        var n = arr['shift']() - 0x0;
        var ans = 'Unknown';
        for (var j = 0x0; j < g['length']; j++) {
            var a = g[j][0x1];
            var b = g[j][0x2];
            if (a < n && n <= b) {
                ans = [
                    g[j][0x0],
                    n - a
                ]['join']('\x20');
            }
        }
        console['log'](ans);
    }
}