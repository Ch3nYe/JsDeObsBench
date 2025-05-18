var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('')['reverse']();
    var str = Arr['shift']();
    var x = str['length'];
    arr['forEach'](function (_0x107126) {
        if (_0x107126 == 'J')
            str = str['slice'](-0x1) + str['slice'](0x0, -0x1);
        else if (_0x107126 == 'C')
            str = str['slice'](0x1) + str['slice'](0x0, 0x1);
        else if (_0x107126 == 'E' && x % 0x2 == 0x0)
            str = str['slice'](x / 0x2, x) + str['slice'](0x0, x / 0x2);
        else if (_0x107126 == 'E' && x % 0x2 == 0x1)
            str = str['slice'](~~(x / 0x2) + 0x1, x) + str[~~(x / 0x2)] + str['slice'](0x0, ~~(x / 0x2));
        else if (_0x107126 == 'A')
            str = str['split']('')['reverse']()['join']('');
        else if (_0x107126 == 'P')
            str = str['replace'](/\d/g, function (_0x1f0dae) {
                return _0x1f0dae == '0' ? '9' : _0x1f0dae - 0x0 - 0x1;
            });
        else if (_0x107126 == 'M')
            str = str['replace'](/\d/g, function (_0x45734b) {
                return _0x45734b == '9' ? '0' : _0x45734b - 0x0 + 0x1;
            });
    });
    console['log'](str);
}