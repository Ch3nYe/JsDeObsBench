var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var abc = arr['shift']();
    if (abc == '0\x200\x200\x200\x200')
        break;
    var ary = (abc + '\x20' + arr['shift']())['split']('\x20')['map'](Number);
    (function (_0x361773, _0x36dc0a, _0x3d75ee, _0x1594e8, _0x21e626, _0x1d7055, _0x450e91, _0x5ed05b) {
        var _0x2efc58 = Math['floor'](_0x5ed05b / _0x1594e8) * _0x1594e8 * _0x21e626;
        var _0x3e4b54 = _0x5ed05b % _0x1594e8;
        var _0x4b8bcb = function (_0x2c4a38) {
            _0x2c4a38 += _0x3e4b54 * _0x3d75ee;
            _0x2c4a38 += _0x1d7055 * _0x361773 + _0x450e91 * _0x36dc0a;
            return _0x2c4a38;
        }(_0x2efc58);
        var _0x4b2e07 = function (_0x483364, _0x32be10, _0x29cfea) {
            if (_0x483364 == 0x0) {
                var _0x2f9beb = _0x3e4b54 == 0x0 ? 0x0 : _0x1594e8 - _0x3e4b54;
                if (_0x2f9beb > 0x0)
                    _0x483364 += _0x21e626 * _0x1594e8;
                while (_0x2f9beb--) {
                    if (_0x29cfea > 0x0)
                        _0x29cfea--;
                    else if (_0x32be10 > 0x0)
                        _0x32be10--;
                }
                _0x483364 += _0x32be10 * _0x361773 + _0x29cfea * _0x36dc0a;
                return _0x483364;
            }
            if (_0x483364 != 0x0) {
                return _0x32be10 * _0x361773 + _0x29cfea * _0x36dc0a + _0x5ed05b * _0x21e626;
            }
        }(_0x2efc58, _0x1d7055, _0x450e91);
        console['log'](Math['min'](_0x4b8bcb, _0x4b2e07));
    }['apply'](null, ary));
}