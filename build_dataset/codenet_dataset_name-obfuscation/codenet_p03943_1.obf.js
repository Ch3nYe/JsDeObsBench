function Main(_0x5f0617) {
    _0x5f0617 = _0x5f0617['split']('\x20');
    _0x5f0617 = _0x5f0617['map'](Number);
    children = 0x2;
    var _0x25462f = function (_0x225ccf, _0x13340b) {
        var _0x44ca45 = 0x0;
        _0x225ccf['forEach'](_0x5d9b9c => {
            _0x44ca45 += _0x5d9b9c;
        });
        return _0x225ccf['includes'](_0x44ca45 / _0x13340b);
    };
    if (_0x25462f(_0x5f0617, children)) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));