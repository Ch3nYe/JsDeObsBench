function Main(_0x261f54) {
    const _0x4551e4 = _0x261f54['split']('\x20')['map'](_0x185a63 => Number(_0x185a63));
    const _0x32beee = _0x4551e4[0x0] + _0x4551e4[0x1];
    const _0x14d30b = _0x4551e4[0x2] + _0x4551e4[0x3];
    if (_0x32beee > _0x14d30b) {
        console['log']('Left');
    } else if (_0x32beee < _0x14d30b) {
        console['log']('Right');
    } else {
        console['log']('Balanced');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));