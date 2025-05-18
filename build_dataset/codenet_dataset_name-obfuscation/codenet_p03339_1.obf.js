function main(_0x11ec77) {
    const _0x391801 = _0x11ec77['split']('\x0a');
    const _0x3c7f01 = parseInt(_0x391801[0x0]);
    const _0x465fcb = _0x391801[0x1]['split']('');
    var _0x254ec1 = Math['pow'](0xa, 0x8);
    var _0x3650f7 = 0x0;
    for (var _0x50df71 = 0x0; _0x50df71 < _0x3c7f01; _0x50df71++) {
        if (_0x465fcb[_0x50df71] == 'E') {
            _0x3650f7++;
        }
    }
    _0x254ec1 = _0x3650f7;
    for (var _0x50df71 = 0x1; _0x50df71 < _0x3c7f01; _0x50df71++) {
        if (_0x465fcb[_0x50df71] == 'E') {
            _0x3650f7--;
        }
        if (_0x465fcb[_0x50df71 - 0x1] == 'W') {
            _0x3650f7++;
        }
        _0x254ec1 = Math['min'](_0x254ec1, _0x3650f7);
    }
    console['log'](_0x254ec1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));