var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var str = '';
    for (var i = 0x0; i < n; i++)
        str += Arr['shift']() + '\x20';
    var arr = str['trim']()['split']('\x20');
    var s = Arr['shift']();
    var f = arr['filter'](function (v) {
        var jNrIPi = {
            'MElWZ': function (x, y) {
                return x == y;
            }
        };
        return jNrIPi['MElWZ'](v[0x0], s);
    });
    f['sort']();
    var F = [];
    var memo = '';
    for (var i = 0x0; i < f['length']; i++) {
        if (memo == f[i]) {
            F[F['length'] - 0x1] = [
                f[i],
                F[F['length'] - 0x1][0x1] + 0x1
            ];
        } else {
            F['push']([
                f[i],
                0x1
            ]);
            memo = f[i];
        }
    }
    F['sort'](function (a, b) {
        var ToWqva = {
            'hPHON': function (x, y) {
                return x == y;
            },
            'fMbRt': function (x, y) {
                return x - y;
            }
        };
        if (ToWqva['hPHON'](a[0x1], b[0x1]))
            return a[0x0] > b[0x0];
        else
            return ToWqva['fMbRt'](b[0x1], a[0x1]);
    });
    var ans = [];
    for (var i = 0x0; i < 0x5; i++) {
        if (F['length'] > i)
            ans['push'](F[i][0x0]);
    }
    console['log'](ans['length'] > 0x0 ? ans['join']('\x20') : 'NA');
}