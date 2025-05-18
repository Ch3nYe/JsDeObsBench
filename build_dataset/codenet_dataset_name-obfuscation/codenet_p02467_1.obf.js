function Main(_0x345906) {
    _0x345906 = _0x345906['trim']()['split']('\x0a')['map'](function (_0x588941) {
        return _0x588941['split']('\x20');
    });
    var _0x31fd7d = parseInt(_0x345906[0x0][0x0], 0xa);
    var _0x230c4e = _0x31fd7d;
    var _0xff9553 = [];
    var _0x1db1d3 = 0x2;
    _0x1cf1bf:
        while (!![]) {
            for (var _0x2976dd = _0x1db1d3; _0x2976dd <= Math['sqrt'](_0x31fd7d); _0x2976dd++) {
                if (_0x31fd7d % _0x2976dd === 0x0) {
                    _0xff9553['push'](_0x2976dd);
                    _0x31fd7d /= _0x2976dd;
                    _0x1db1d3 = _0x2976dd;
                    continue _0x1cf1bf;
                }
            }
            _0xff9553['push'](_0x31fd7d);
            break;
        }
    console['log'](_0x230c4e['toString']() + ':\x20' + _0xff9553['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));