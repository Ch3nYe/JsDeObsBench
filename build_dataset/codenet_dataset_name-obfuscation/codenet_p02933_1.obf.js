const Main = _0x5985ca => {
    _0x5985ca = _0x5985ca['split']('\x0a');
    const _0x226ae5 = _0x5985ca[0x0];
    const _0x2d7ef5 = _0x5985ca[0x1];
    if (_0x226ae5 >= 0xc80) {
        console['log'](_0x2d7ef5);
    } else {
        console['log']('red');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));