process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x38d79d) {
    var _0x9a4244 = _0x38d79d['split']('\x0a');
    var _0xe5a1e8 = '';
    for (var _0x1ae8c2 = 0x0; _0x1ae8c2 < _0x9a4244['length']; _0x1ae8c2++) {
        var _0xfd1863 = _0x25a4eb(_0x9a4244[_0x1ae8c2]);
        if (_0xfd1863 !== ![]) {
            console['log'](_0xfd1863);
        }
    }
    function _0x25a4eb(_0x2cc7ed) {
        var _0x342e3b = _0x2cc7ed['split']('\x20');
        _0x342e3b[0x0] = Number(_0x342e3b[0x0]);
        _0x342e3b[0x2] = Number(_0x342e3b[0x2]);
        if (_0x342e3b[0x1] == '+') {
            return _0x342e3b[0x0] + _0x342e3b[0x2];
        } else if (_0x342e3b[0x1] == '-') {
            return _0x342e3b[0x0] - _0x342e3b[0x2];
        } else if (_0x342e3b[0x1] == '*') {
            return _0x342e3b[0x0] * _0x342e3b[0x2];
        } else if (_0x342e3b[0x1] == '/') {
            return _0x342e3b[0x0] / _0x342e3b[0x2];
        } else if (_0x342e3b[0x1] == '?') {
            return ![];
        }
    }
});