function Main(_0x256db5) {
    _0x256db5 = _0x256db5['split']('\x0a');
    var _0x1e682f = parseInt(_0x256db5[0x0], 0xa);
    if (parseInt(_0x1e682f / 0xa) === 0x0) {
        console['log']('Yes');
        return;
    }
    var _0x3db013 = 0x0;
    var _0x2de42d = _0x1e682f;
    for (var _0x37313b = 0x5f5e100; _0x37313b >= 0xa; _0x37313b = _0x37313b / 0xa) {
        _0x3db013 += parseInt(_0x2de42d / _0x37313b);
        _0x2de42d = _0x2de42d % _0x37313b;
    }
    _0x3db013 += _0x2de42d;
    if (_0x1e682f % _0x3db013 === 0x0) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));