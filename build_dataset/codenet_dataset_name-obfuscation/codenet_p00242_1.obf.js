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
    var f = arr['filter'](function (_0x27a2d9) {
        return _0x27a2d9[0x0] == s;
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
    F['sort'](function (_0x401e54, _0x2fe0f0) {
        if (_0x401e54[0x1] == _0x2fe0f0[0x1])
            return _0x401e54[0x0] > _0x2fe0f0[0x0];
        else
            return _0x2fe0f0[0x1] - _0x401e54[0x1];
    });
    var ans = [];
    for (var i = 0x0; i < 0x5; i++) {
        if (F['length'] > i)
            ans['push'](F[i][0x0]);
    }
    console['log'](ans['length'] > 0x0 ? ans['join']('\x20') : 'NA');
}