function Main(_0x19d371) {
    var _0x22d359, _0x3c17f1, _0x4def14;
    _0x4def14 = _0x19d371['split']('\x0a'), _0x22d359 = _0x4def14[0x0], _0x3c17f1 = parseInt(_0x4def14[0x1]);
    console['log'](Array['from'](_0x22d359)['map']((_0x2325d6, _0x5d90f, _0x581b6c) => {
        var _0x26fec9 = _0x2325d6['charCodeAt']();
        if (_0x5d90f === _0x581b6c['length'] - 0x1) {
            _0x26fec9 += _0x3c17f1 % 0x1a;
            _0x26fec9 -= _0x26fec9 > 0x7a ? 0x1a : 0x0;
            return String['fromCharCode'](_0x26fec9);
        } else {
            if (_0x2325d6 === 'a')
                return _0x2325d6;
            return 0x7b - _0x26fec9 <= _0x3c17f1 ? (_0x3c17f1 -= 0x7b - _0x26fec9, 'a') : _0x2325d6;
        }
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));