function Main(_0x591b58) {
    _0x591b58 = _0x591b58['split']('\x0a');
    var _0x806286 = _0x591b58[0x0]['split']('\x20')['map'](Number);
    _0x591b58['shift']();
    var _0x190aee = new Array(0x23)['fill'](0x0);
    _0x591b58['forEach'](function (_0x446ad1) {
        var _0x1ca811 = _0x446ad1['split']('\x20')['map'](Number);
        _0x1ca811['shift']();
        _0x1ca811['forEach'](function (_0x33aa0e) {
            _0x190aee[_0x33aa0e]++;
        });
    });
    var _0x3bf5b5 = 0x0;
    _0x190aee['forEach'](function (_0x4110e1) {
        if (_0x4110e1 == _0x806286[0x0])
            _0x3bf5b5++;
    });
    console['log'](_0x3bf5b5);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());