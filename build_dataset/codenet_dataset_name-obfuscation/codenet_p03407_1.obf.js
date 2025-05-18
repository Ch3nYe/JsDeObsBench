function Main(_0x410711) {
    _0x410711 = _0x410711['split']('\x20')['map'](_0x29fa8d => parseInt(_0x29fa8d));
    console['log'](_0x410711[0x0] + _0x410711[0x1] >= _0x410711[0x2] ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());