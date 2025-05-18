var readable = process['stdin'];
readable['resume']();
readable['setEncoding']('utf-8');
readable['on']('data', function (_0xb790de) {
    var _0x5e4eb1 = parseInt(_0xb790de);
    var _0x273227 = 0x1;
    var _0x4fd0e4 = [];
    do {
        var _0x113a6a = _0x273227;
        if (0x0 == _0x113a6a % 0x3) {
            _0x4fd0e4['push']('\x20' + _0x273227);
        } else {
            do {
                if (0x3 == _0x113a6a % 0xa) {
                    _0x4fd0e4['push']('\x20' + _0x273227);
                    break;
                } else {
                    _0x113a6a /= 0xa;
                }
            } while (_0x113a6a);
        }
    } while (++_0x273227 <= _0x5e4eb1);
    console['log'](_0x4fd0e4['join'](''));
});