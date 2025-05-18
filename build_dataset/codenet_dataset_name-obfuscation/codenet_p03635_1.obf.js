function Main(_0x290f67) {
    _0x290f67 = _0x290f67['split']('\x0a');
    var _0x349ef7 = _0x290f67[0x0]['split']('\x20');
    var _0x2a0288 = parseInt(_0x349ef7[0x0]);
    var _0x159f22 = parseInt(_0x349ef7[0x1]);
    var _0x3a2bd5 = (_0x2a0288 - 0x1) * (_0x159f22 - 0x1);
    console['log'](_0x3a2bd5);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));