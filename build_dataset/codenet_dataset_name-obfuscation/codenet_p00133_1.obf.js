function move(_0x51f386) {
    var _0x14b413 = [];
    for (var _0x29b9d0 = 0x0; _0x29b9d0 < 0x8; _0x29b9d0++)
        _0x14b413[_0x29b9d0] = [];
    for (var _0x29b9d0 = 0x0; _0x29b9d0 < 0x8; _0x29b9d0++) {
        for (var _0x294be1 = 0x0; _0x294be1 < 0x8; _0x294be1++) {
            _0x14b413[_0x29b9d0][_0x294be1] = _0x51f386[0x7 - _0x294be1][_0x29b9d0];
        }
    }
    return _0x14b413;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
for (var i = 0x0; i < 0x8; i++)
    yx['push'](Arr[i]['split'](''));
yx = move(yx);
console['log']('90\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('180\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('270\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));