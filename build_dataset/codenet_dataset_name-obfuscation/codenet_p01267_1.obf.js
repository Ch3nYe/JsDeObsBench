var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr['join']('') == '00000')
        break;
    var y = Arr['shift']()['split']('\x20')['map'](Number);
    (function (_0x347604, _0x3713bd, _0x2e2672, _0x4bd16a, _0x30478d) {
        var _0x3142cb = 0x0;
        while (!![]) {
            if (y[0x0] == _0x30478d)
                y['shift']();
            if (y['length'] == 0x0) {
                console['log'](_0x3142cb);
                break;
            }
            _0x30478d = (_0x3713bd * _0x30478d + _0x2e2672) % _0x4bd16a;
            _0x3142cb++;
            if (_0x3142cb == 0x2711) {
                console['log'](-0x1);
                break;
            }
        }
    }['apply'](null, arr));
}