function stoneRemove() {
    yx['forEach'](function (_0x5b2243, _0x285220) {
        var _0x1c34a3 = _0x5b2243['join']('')['replace'](/([1-9])\1{2,}/, function (_0x89b868) {
            point += (_0x89b868[0x0] - 0x0) * _0x89b868['length'];
            return _0x89b868['replace'](/./g, '0');
        });
        yx[_0x285220] = _0x1c34a3['split']('')['map'](Number);
    });
    var _0x423646 = !![];
    while (_0x423646) {
        _0x423646 = ![];
        for (var _0x3ae7ca = 0x0; _0x3ae7ca < H - 0x1; _0x3ae7ca++) {
            for (var _0x25ed5d = 0x0; _0x25ed5d < 0x5; _0x25ed5d++) {
                if (yx[_0x3ae7ca][_0x25ed5d] != 0x0 && yx[_0x3ae7ca + 0x1][_0x25ed5d] == 0x0) {
                    yx[_0x3ae7ca + 0x1][_0x25ed5d] = yx[_0x3ae7ca][_0x25ed5d];
                    yx[_0x3ae7ca][_0x25ed5d] = 0x0;
                    _0x423646 = !![];
                }
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var h = arr['shift']() - 0x0;
    if (h == 0x0)
        break;
    var H = h;
    var yx = [];
    while (h--)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var point = 0x0;
    var p = point;
    while (!![]) {
        stoneRemove();
        if (p == point)
            break;
        p = point;
    }
    console['log'](point);
}