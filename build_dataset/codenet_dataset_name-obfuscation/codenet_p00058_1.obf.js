var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    (function (_0x19186d, _0x3f32ae, _0x462aa4, _0x485bee, _0x4de06a, _0x3233eb, _0x58e6eb, _0xc9c9d7) {
        var _0x30764a;
        var _0x2ceb83;
        if (_0x462aa4 - _0x19186d !== 0x0)
            _0x30764a = ((_0x485bee - _0x3f32ae) / (_0x462aa4 - _0x19186d))['toFixed'](0xb);
        else
            _0x30764a = Infinity;
        if (_0x58e6eb - _0x4de06a !== 0x0)
            _0x2ceb83 = (_0xc9c9d7 - _0x3233eb) / (_0x58e6eb - _0x4de06a)['toFixed'](0xb);
        else
            _0x2ceb83 = Infinity;
        var _0x542a02 = 'NO';
        if (_0x30764a == 0x0 && _0x2ceb83 == Infinity)
            _0x542a02 = 'YES';
        if (_0x2ceb83 == 0x0 && _0x30764a == Infinity)
            _0x542a02 = 'YES';
        if (_0x30764a == -0x1 * _0x2ceb83 && (_0x30764a != 0x0 && _0x2ceb83 != 0x0))
            _0x542a02 = 'YES';
        console['log'](_0x542a02);
    }['apply'](null, arr));
}