function Main(_0x1b429f) {
    var _0x10387f = _0x1b429f;
    const _0x3af104 = _0x10387f['split']('\x0a');
    var _0xdee04d = Number(_0x3af104[0x0]);
    var _0x422a74 = _0x3af104[0x1]['split']('\x20');
    var _0xad16ca = Number(_0x422a74[0x0]);
    var _0x4c8293 = Number(_0x422a74[0x1]);
    var _0x95ddd = '';
    for (var _0x18a9b0 = _0xad16ca; _0x18a9b0 <= _0x4c8293; _0x18a9b0++) {
        if (_0x18a9b0 % _0xdee04d === 0x0) {
            _0x95ddd = 'OK';
        }
    }
    if (_0x95ddd !== 'OK') {
        _0x95ddd = 'NG';
    }
    console['log'](_0x95ddd);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));