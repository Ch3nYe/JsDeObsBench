(function (_0x1a5e09) {
    var _0x3ca8a2 = _0x1a5e09['replace'](/\r/g, '')['split']('\x0a');
    while (!![]) {
        var _0x285d0d = [], _0x325af2 = _0x3ca8a2['shift']()['split']('\x20'), _0x104c8e = parseInt(_0x325af2[0x0]), _0x49c32f = parseInt(_0x325af2[0x1]);
        if (_0x104c8e === 0x0 && _0x49c32f === 0x0)
            break;
        for (var _0x28f5b1 = _0x104c8e; _0x28f5b1 > 0x0; _0x28f5b1--) {
            _0x285d0d['push'](_0x28f5b1);
        }
        while (_0x49c32f--) {
            var _0x325af2 = _0x3ca8a2['shift']()['split']('\x20'), _0x3bc392 = parseInt(_0x325af2[0x0]) - 0x1, _0x3be197 = parseInt(_0x325af2[0x1]), _0x213f5f;
            _0x213f5f = _0x285d0d['splice'](_0x3bc392, _0x3be197);
            _0x285d0d = _0x213f5f['concat'](_0x285d0d);
        }
        console['log'](_0x285d0d['shift']());
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));