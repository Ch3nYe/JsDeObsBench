function initOfficialHouse(_0x43deec, _0x2a5a97, _0x1fb015) {
    var _0x44d2b4 = Array(_0x43deec);
    for (var _0x44b9b6 = 0x0; _0x44b9b6 < _0x43deec; _0x44b9b6++) {
        _0x44d2b4[_0x44b9b6] = Array(_0x2a5a97);
        for (var _0x34f4d3 = 0x0; _0x34f4d3 < _0x2a5a97; _0x34f4d3++) {
            _0x44d2b4[_0x44b9b6][_0x34f4d3] = Array(_0x1fb015);
            for (var _0xb45c90 = 0x0; _0xb45c90 < _0x1fb015; _0xb45c90++) {
                _0x44d2b4[_0x44b9b6][_0x34f4d3][_0xb45c90] = 0x0;
            }
        }
    }
    return _0x44d2b4;
}
function toString(_0x556e61) {
    return _0x556e61['map'](function (_0x950fb9) {
        return _0x950fb9['map'](function (_0x571a7c) {
            return '\x20' + _0x571a7c['join']('\x20');
        })['join']('\x0a');
    })['join']('\x0a####################\x0a');
}
const chunk = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = chunk['trim']()['split']('\x0a');
lines['shift']();
var o = initOfficialHouse(0x4, 0x3, 0xa);
lines['forEach'](function (_0x198f08) {
    var _0x3d9e3b = _0x198f08['split']('\x20')['map'](Number);
    var _0x51255d = _0x3d9e3b[0x0], _0x3c80d0 = _0x3d9e3b[0x1], _0x1c3e05 = _0x3d9e3b[0x2], _0x3af177 = _0x3d9e3b[0x3];
    o[_0x51255d - 0x1][_0x3c80d0 - 0x1][_0x1c3e05 - 0x1] += _0x3af177;
});
console['log'](toString(o));