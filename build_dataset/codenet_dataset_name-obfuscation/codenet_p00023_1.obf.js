(function (_0x28d12d) {
    var _0x5b7875 = _0x28d12d['replace'](/\n$/, '')['split']('\x0a');
    var _0x4d7ee0 = Number(_0x5b7875['shift']());
    for (var _0x5a9ed1 = 0x0; _0x5a9ed1 < _0x4d7ee0; _0x5a9ed1++) {
        var _0x4fce1a = _0x5b7875['shift']()['split']('\x20')['map'](Number);
        var _0xb904bf = _0x4fce1a['shift']();
        var _0x5c3fad = _0x4fce1a['shift']();
        var _0xe4fb71 = _0x4fce1a['shift']();
        var _0xf97368 = _0x4fce1a['shift']();
        var _0x47b4a7 = _0x4fce1a['shift']();
        var _0x53d8c4 = _0x4fce1a['shift']();
        var _0x46ff00 = Math['sqrt'](Math['pow'](_0xf97368 - _0xb904bf, 0x2) + Math['pow'](_0x47b4a7 - _0x5c3fad, 0x2));
        if (_0xe4fb71 > _0x46ff00 + _0x53d8c4) {
            console['log'](0x2);
        } else if (_0x53d8c4 > _0x46ff00 + _0xe4fb71) {
            console['log'](-0x2);
        } else if (_0x46ff00 < _0xe4fb71 + _0x53d8c4) {
            console['log'](0x1);
        } else {
            console['log'](0x0);
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));