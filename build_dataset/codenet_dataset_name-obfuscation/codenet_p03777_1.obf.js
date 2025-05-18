function Main(_0x4a16e5) {
    _0x4a16e5 = _0x4a16e5['split']('\x20');
    var _0x374511 = String(_0x4a16e5[0x0]);
    var _0x3d9849 = String(_0x4a16e5[0x1]);
    if (_0x374511 === 'H' && _0x3d9849 === 'H' || _0x374511 === 'D' && _0x3d9849 === 'D') {
        console['log']('H');
    } else {
        console['log']('D');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));