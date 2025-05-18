function Main(_0x585d60) {
    var _0x29fbdf = parseInt(_0x585d60['split']('\x20')[0x0]);
    var _0x46771e = parseInt(_0x585d60['split']('\x20')[0x1]);
    var _0x84b5a0 = parseInt(_0x585d60['split']('\x20')[0x2]);
    var _0x2a66ab = 0x1;
    var _0x3ec781 = 0x0;
    while (!![]) {
        _0x3ec781 = _0x2a66ab * _0x46771e + (_0x2a66ab + 0x1) * _0x84b5a0;
        if (_0x3ec781 > _0x29fbdf)
            break;
        _0x2a66ab++;
    }
    console['log'](--_0x2a66ab);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));