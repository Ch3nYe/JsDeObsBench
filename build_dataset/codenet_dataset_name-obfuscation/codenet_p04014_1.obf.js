function Main(_0x5b6c78) {
    _0x5b6c78 = _0x5b6c78['split']('\x0a')['map'](_0x2a386f => parseInt(_0x2a386f));
    const _0x30b838 = _0x5b6c78[0x0];
    _0x5b6c78 = _0x5b6c78[0x1];
    const _0x247418 = Math['ceil'](Math['sqrt'](_0x30b838));
    if (_0x5b6c78 === _0x30b838) {
        console['log'](_0x30b838 + 0x1);
        return;
    }
    for (var _0x5ddcf9 = 0x2; _0x5ddcf9 < _0x247418; _0x5ddcf9++) {
        if (_0x5b6c78 === f(_0x5ddcf9, _0x30b838)) {
            console['log'](_0x5ddcf9);
            return;
        }
    }
    var _0x303c46 = Math['floor']((_0x30b838 - _0x5b6c78) / (_0x247418 - 0x1));
    for (; _0x303c46 > 0x0; _0x303c46--) {
        _0x5ddcf9 = Math['floor']((_0x30b838 - _0x5b6c78) / _0x303c46 + 0x1);
        if (_0x5b6c78 === f(_0x5ddcf9, _0x30b838)) {
            console['log'](_0x5ddcf9);
            return;
        }
    }
    console['log'](-0x1);
}
function f(_0x476b41, _0x21858b) {
    if (_0x21858b < _0x476b41)
        return _0x21858b;
    return f(_0x476b41, Math['floor'](_0x21858b / _0x476b41)) + _0x21858b % _0x476b41;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());