process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x25191a => {
    lines['push'](_0x25191a);
});
reader['on']('close', () => {
    var _0x2644fe = Number(lines[0x0]);
    var _0x1ffb53 = lines[0x1]['split']('\x20');
    _0x1ffb53 = _0x1ffb53['map'](function (_0x12c90a) {
        return Number(_0x12c90a);
    });
    for (i = 0x0; i < _0x2644fe - 0x1; i++) {
        var _0x1009cb = _0x1ffb53['sort']((_0x47ce62, _0x36324d) => _0x47ce62 - _0x36324d)[0x0];
        _0x1ffb53['splice'](0x0, 0x1);
        var _0xef6c92 = _0x1ffb53[0x0];
        _0x1ffb53['splice'](0x0, 0x1);
        var _0x3d8d43 = (_0x1009cb + _0xef6c92) / 0x2;
        if (_0x1ffb53['length'] == 0x0) {
            break;
        }
        _0x1ffb53['push'](_0x3d8d43);
    }
    console['log'](_0x3d8d43);
});