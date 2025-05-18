function Main(_0x3276ee) {
    _0x3276ee = _0x3276ee['split']('\x20');
    tmp = parseInt(_0x3276ee[0x0]) + parseInt(_0x3276ee[0x1]) + parseInt(_0x3276ee[0x2]);
    if (tmp > 0x15) {
        console['log']('bust');
    } else {
        console['log']('win');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));