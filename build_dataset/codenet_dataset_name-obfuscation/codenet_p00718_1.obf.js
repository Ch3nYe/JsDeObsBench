var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('\x20');
    var sum = 0x0;
    arr['forEach'](function (_0x188b8b) {
        _0x188b8b = _0x188b8b['replace'](/(\d?)([mcxi])/g, function (_0x27b5aa, _0x1bee45, _0x347b9e) {
            _0x1bee45 = _0x1bee45 ? _0x1bee45 - 0x0 : 0x1;
            if (_0x347b9e == 'm')
                _0x347b9e = 0x3e8;
            if (_0x347b9e == 'c')
                _0x347b9e = 0x64;
            if (_0x347b9e == 'x')
                _0x347b9e = 0xa;
            if (_0x347b9e == 'i')
                _0x347b9e = 0x1;
            sum += _0x1bee45 * _0x347b9e;
            return _0x27b5aa;
        });
    });
    var str = ('000' + sum)['slice'](-0x4);
    var S = str['split']('')['map'](Number);
    var result = '';
    S['forEach'](function (_0x328017, _0x6cbea2) {
        if (_0x328017 == 0x1)
            _0x328017 = '';
        if (_0x328017 !== 0x0) {
            if (_0x6cbea2 == 0x0)
                result += _0x328017 + 'm';
            if (_0x6cbea2 == 0x1)
                result += _0x328017 + 'c';
            if (_0x6cbea2 == 0x2)
                result += _0x328017 + 'x';
            if (_0x6cbea2 == 0x3)
                result += _0x328017 + 'i';
        }
    });
    console['log'](result);
}