function Main(_0x331357) {
    _0x331357 = _0x331357['split']('\x0a');
    if (_0x331357[_0x331357['length'] - 0x1] === '') {
        _0x331357['pop']();
    }
    const _0x52be6d = _0x331357[0x0]['split']('\x20')[0x0] - 0x0;
    const _0x140c9f = _0x331357[0x0]['split']('\x20')[0x1] - 0x0;
    const _0x35921e = _0x331357[0x0]['split']('\x20')[0x2] - 0x0;
    const _0x27d241 = _0x331357[0x1]['split']('\x20')['map'](_0x3023a4 => {
        return _0x3023a4 - 0x0;
    });
    if (_0x27d241['length'] === 0x1) {
        console['log'](Math['abs'](_0x35921e - _0x27d241[0x0]));
        return;
    }
    var _0x478850, _0x416b87;
    _0x478850 = new Array(_0x52be6d);
    _0x416b87 = new Array(_0x52be6d);
    for (var _0x2a4a36 = _0x52be6d - 0x1; _0x2a4a36 >= 0x0; _0x2a4a36--) {
        if (_0x2a4a36 === _0x52be6d - 0x1) {
            _0x416b87[_0x2a4a36] = Math['abs'](_0x27d241[_0x52be6d - 0x1] - _0x27d241[_0x52be6d - 0x2]);
            _0x478850[_0x2a4a36] = Math['abs'](_0x27d241[_0x52be6d - 0x1] - _0x27d241[_0x52be6d - 0x2]);
            continue;
        }
        _0x416b87[_0x2a4a36] = Math['min'](..._0x478850['slice'](_0x2a4a36 + 0x1), _0x2a4a36 !== 0x0 ? Math['abs'](_0x27d241[_0x2a4a36 - 0x1] - _0x27d241[_0x52be6d - 0x1]) : Math['abs'](_0x140c9f - _0x27d241[_0x52be6d - 0x1]));
        _0x478850[_0x2a4a36] = Math['max'](..._0x416b87['slice'](_0x2a4a36 + 0x1), _0x2a4a36 !== 0x0 ? Math['abs'](_0x27d241[_0x2a4a36 - 0x1] - _0x27d241[_0x52be6d - 0x1]) : Math['abs'](_0x35921e - _0x27d241[_0x52be6d - 0x1]));
    }
    console['log'](Math['max'](..._0x478850));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));