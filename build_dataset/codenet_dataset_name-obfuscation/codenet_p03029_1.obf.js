(_0x349b18 => {
    var _0xab9868 = _0x349b18['trim']()['split']('\x0a');
    var _0xccd038 = _0xab9868['shift']()['split']('\x20')['map'](Number);
    console['log'](Math['floor']((_0xccd038[0x0] * 0x3 + _0xccd038[0x1]) / 0x2));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8'));