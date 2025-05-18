function Main(_0x505a59) {
    _0x505a59 = _0x505a59['split']('');
    let _0x7d0e4f = _0x505a59['includes']('N');
    let _0x48c293 = _0x505a59['includes']('S');
    let _0x40dbb6 = _0x505a59['includes']('E');
    let _0x3dec43 = _0x505a59['includes']('W');
    let _0x3c1a79 = _0x7d0e4f && _0x48c293 || !_0x7d0e4f && !_0x48c293;
    let _0x67547f = _0x40dbb6 && _0x3dec43 || !_0x40dbb6 && !_0x3dec43;
    if (_0x3c1a79 && _0x67547f) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));