(function () {
    var _0x28ef79 = '', _0xa84046 = 0x0;
    function _0x479124() {
        var _0xe6ca95, _0x50b90b, _0x455b74, _0x3a44ee, _0x48d38f, _0x5ed71e;
        _0xe6ca95 = _0x28ef79['length'];
        for (i = 0x0; i < _0xe6ca95; i += 0x1) {
            _0x50b90b = _0x28ef79[i]['split']('\x20');
            _0x455b74 = parseInt(_0x50b90b[0x0], 0xa);
            _0x3a44ee = parseInt(_0x50b90b[0x1], 0xa);
            if (_0x455b74 === 0x0 && _0x3a44ee === 0x0) {
                break;
            } else if (_0x455b74 < _0x3a44ee) {
                _0x48d38f = _0x455b74;
                _0x455b74 = _0x3a44ee;
                _0x3a44ee = _0x48d38f;
            }
            _0x5ed71e = _0x310a19(_0x455b74, _0x3a44ee);
            _0x40bfc6(_0x5ed71e, _0xa84046);
            _0xa84046 = 0x0;
        }
    }
    function _0x310a19(_0x5dd243, _0x9bd4ac) {
        _0xa84046 += 0x1;
        return _0x5dd243 % _0x9bd4ac === 0x0 ? _0x9bd4ac : _0x310a19(_0x9bd4ac, _0x5dd243 % _0x9bd4ac);
    }
    function _0x40bfc6(_0x2fe0c7, _0x12e76a) {
        console['log'](_0x2fe0c7 + '\x20' + _0x12e76a);
    }
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', function (_0x178792) {
        _0x28ef79 += _0x178792;
    });
    process['stdin']['on']('end', function () {
        _0x28ef79 = _0x28ef79['split']('\x0a');
        _0x479124();
    });
}());