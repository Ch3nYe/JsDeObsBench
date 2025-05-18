process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x4e987b) {
    var _0x48de67 = _0x4e987b['toString']();
    var _0x159897 = _0x48de67['split']('\x0a');
    _0x159897['shift']();
    for (var _0x3c1152 in _0x159897) {
        var _0x5dd82d = _0x159897[_0x3c1152]['split']('\x20');
        for (var _0x3c1152 in _0x5dd82d) {
            _0x5dd82d[_0x3c1152] = new Number(_0x5dd82d[_0x3c1152]);
        }
        _0x5dd82d['sort'](function (_0x2d84cd, _0x15a3c5) {
            if (_0x2d84cd > _0x15a3c5)
                return -0x1;
            if (_0x2d84cd < _0x15a3c5)
                return 0x1;
            return 0x0;
        });
        var _0x8a5479 = new Number(_0x5dd82d[0x0]) * new Number(_0x5dd82d[0x0]);
        var _0x129054 = new Number(_0x5dd82d[0x1]) * new Number(_0x5dd82d[0x1]);
        var _0x18d970 = new Number(_0x5dd82d[0x2]) * new Number(_0x5dd82d[0x2]);
        var _0x17a201 = _0x129054 + _0x18d970;
        if (_0x8a5479 === _0x17a201) {
            console['log']('YES');
        } else {
            console['log']('NO');
        }
    }
});