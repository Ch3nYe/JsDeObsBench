var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = arr['shift']()['split']('\x20')['map'](Number);
    if (ab['join']('\x20') == '0\x200')
        break;
    var a = ab[0x0];
    var b = ab[0x1];
    var A = [];
    var B = [];
    for (i = 0x1; i <= Math['sqrt'](a); i++) {
        if (a % i == 0x0)
            A['push']([
                a / i,
                i
            ]);
    }
    for (i = 0x1; i <= Math['sqrt'](b); i++) {
        if (b % i == 0x0)
            B['push']([
                b / i,
                i
            ]);
    }
    var min = Infinity;
    A['forEach'](function (_0xf6c1e8) {
        B['forEach'](function (_0x5eaaca) {
            var _0x4cc40f = [
                _0xf6c1e8[0x0],
                _0xf6c1e8[0x1],
                _0x5eaaca[0x0],
                _0x5eaaca[0x1]
            ];
            _0x4cc40f['sort'](function (_0x45584, _0x46b798) {
                return _0x45584 - _0x46b798;
            });
            min = Math['min'](min, Math['pow'](_0x4cc40f[0x0] - _0x4cc40f[0x1], 0x2) + Math['pow'](_0x4cc40f[0x1] - _0x4cc40f[0x2], 0x2) + Math['pow'](_0x4cc40f[0x2] - _0x4cc40f[0x3], 0x2));
        });
    });
    console['log'](min);
}