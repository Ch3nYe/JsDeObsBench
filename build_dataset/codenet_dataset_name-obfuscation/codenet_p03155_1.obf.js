function Main(_0x2686ee) {
    _0x2686ee = _0x2686ee['split']('\x0a')['map'](Number);
    console['log']((_0x2686ee[0x0] + 0x1 - _0x2686ee[0x1]) * (_0x2686ee[0x0] + 0x1 - _0x2686ee[0x2]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());