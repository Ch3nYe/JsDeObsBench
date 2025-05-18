function Main(_0x1d9a7d) {
    var _0x491c4f = _0x1d9a7d;
    var _0x3d6285 = _0x491c4f['split']('\x20')['map'](Number);
    if (_0x3d6285[0x0] == _0x3d6285[0x1] && _0x3d6285[0x1] == _0x3d6285[0x2]) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));