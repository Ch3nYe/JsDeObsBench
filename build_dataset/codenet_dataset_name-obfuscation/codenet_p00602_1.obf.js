var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr['forEach'](function (_0x578c59) {
    var _0x53d13f = _0x578c59['split']('\x20')['map'](Number);
    var _0x3600b9 = _0x53d13f[0x0];
    var _0x4ecbb0 = _0x53d13f[0x1];
    var _0x6c6c77 = [];
    _0x6c6c77[0x0] = 0x1;
    _0x6c6c77[0x1] = 0x2;
    for (var _0x286a1b = 0x2; _0x286a1b <= _0x3600b9; _0x286a1b++) {
        _0x6c6c77[_0x286a1b] = (_0x6c6c77[_0x286a1b - 0x1] + _0x6c6c77[_0x286a1b - 0x2]) % 0x3e9;
    }
    _0x6c6c77['shift']();
    _0x6c6c77['sort'](function (_0x561656, _0x2a5640) {
        return _0x561656 - _0x2a5640;
    });
    var _0x1792df = 0x0;
    for (var _0x286a1b = 0x1; _0x286a1b < _0x6c6c77['length']; _0x286a1b++) {
        if (_0x6c6c77[_0x286a1b] - _0x6c6c77[_0x286a1b - 0x1] < _0x4ecbb0)
            _0x1792df++;
    }
    console['log'](_0x6c6c77['length'] - _0x1792df);
});