var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    var obj = {};
    var max = 0x0;
    Arr['forEach'](function (_0x2b7d45) {
        var _0x14cc70 = _0x2b7d45;
        var _0x55e2bd = _0x14cc70[0x0];
        var _0x21d354 = ![];
        for (var _0x5a171c = 0x0; _0x5a171c < _0x14cc70['length']; _0x5a171c++) {
            if (_0x21d354)
                _0x55e2bd += _0x14cc70[_0x5a171c];
            _0x21d354 = /[aiueo]/['test'](_0x14cc70[_0x5a171c]) ? !![] : ![];
        }
        obj[_0x55e2bd] = !![];
        max = Math['max'](max, _0x55e2bd['length']);
    });
    for (var i = 0x1; i <= max; i++) {
        var Obj = {};
        for (var key in obj) {
            Obj[key['slice'](0x0, i)] = !![];
        }
        if (Object['keys'](Obj)['length'] == n) {
            console['log'](i);
            break;
        }
        if (i == max)
            console['log'](-0x1);
    }
}