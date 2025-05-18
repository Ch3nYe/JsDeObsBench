var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split'](',')['map'](Number);
    (function (_0x31e047, _0xc85a08, _0x21d1aa, _0xca2a08, _0x4e2968, _0x5f4019) {
        var _0xfdd576 = _0x21d1aa - _0x31e047 == 0x0 ? Infinity : (_0xca2a08 - _0xc85a08) / (_0x21d1aa - _0x31e047);
        var _0x1938d6;
        if (_0xfdd576 == 0x0)
            _0x1938d6 = [
                _0x4e2968,
                _0xc85a08 - (_0x5f4019 - _0xc85a08)
            ];
        else if (_0xfdd576 == Infinity)
            _0x1938d6 = [
                _0x31e047 - (_0x4e2968 - _0x31e047),
                _0x5f4019
            ];
        else {
            var _0x4551f3 = (_0xca2a08 - _0xc85a08) / (_0x21d1aa - _0x31e047);
            var _0x3c9f24 = -0x1 / _0x4551f3;
            var _0x2086be = _0xc85a08 - _0x4551f3 * _0x31e047;
            var _0x2fe534 = _0x5f4019 - _0x3c9f24 * _0x4e2968;
            var _0x186d0a = (_0x2fe534 - _0x2086be) / (_0x4551f3 - _0x3c9f24);
            var _0x2eaa18 = 0x2 * _0x186d0a - _0x4e2968;
            var _0x2a7eb7 = _0x3c9f24 * _0x2eaa18 + _0x2fe534;
            _0x1938d6 = [
                _0x2eaa18,
                _0x2a7eb7
            ];
        }
        console['log'](_0x1938d6[0x0]['toFixed'](0x6) + '\x20' + _0x1938d6[0x1]['toFixed'](0x6));
    }['apply'](null, arr));
}