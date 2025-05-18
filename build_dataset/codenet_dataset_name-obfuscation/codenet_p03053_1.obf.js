'use strict';
function main(_0x355e71) {
    _0x355e71 = _0x355e71['trim']()['split']('\x0a');
    _0x355e71['shift']();
    var _0x18c348 = _0x355e71['length'];
    var _0x1ed0f2 = _0x355e71[0x0]['length'];
    var _0x423214 = [];
    for (var _0x2dd81a = 0x0; _0x2dd81a < _0x355e71['length']; _0x2dd81a++) {
        _0x423214['push'](_0x355e71[_0x2dd81a]['split'](''));
    }
    var _0x2dd81a = 0x0;
    var _0x4d7022 = [];
    for (var _0x4c6a07 = 0x0; _0x4c6a07 < _0x18c348; _0x4c6a07++)
        for (var _0x3d6d44 = 0x0; _0x3d6d44 < _0x1ed0f2; _0x3d6d44++) {
            if (_0x423214[_0x4c6a07][_0x3d6d44] === '#') {
                _0x4d7022['push']([
                    _0x4c6a07,
                    _0x3d6d44
                ]);
            }
        }
    var _0x456666 = [];
    for (var _0x4c6a07 = 0x0; _0x4c6a07 < _0x18c348; _0x4c6a07++)
        for (var _0x3d6d44 = 0x0; _0x3d6d44 < _0x1ed0f2; _0x3d6d44++) {
            if (_0x423214[_0x4c6a07][_0x3d6d44] === '.') {
                var _0x500b34 = Number['MAX_SAFE_INTEGER'];
                for (var _0x2dd81a = 0x0; _0x2dd81a < _0x4d7022['length']; _0x2dd81a++) {
                    var _0x13f090 = _0x4d7022[_0x2dd81a][0x0];
                    var _0x45904b = _0x4d7022[_0x2dd81a][0x1];
                    var _0xd3e09c = Math['abs'](_0x13f090 - _0x4c6a07) + Math['abs'](_0x45904b - _0x3d6d44);
                    if (_0xd3e09c < _0x500b34) {
                        _0x500b34 = _0xd3e09c;
                    }
                }
                _0x456666['push'](_0x500b34);
            }
        }
    console['log'](Math['max'](..._0x456666));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));