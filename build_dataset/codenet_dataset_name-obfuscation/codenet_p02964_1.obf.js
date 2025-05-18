function Main(_0xff3a3f) {
    _0xff3a3f = _0xff3a3f['split']('\x0a');
    input1 = _0xff3a3f[0x0]['split']('\x20');
    const _0x7c5feb = parseInt(input1[0x0]);
    const _0x54fc2c = parseInt(input1[0x1]);
    const _0x5f1b4d = _0xff3a3f[0x1]['split']('\x20');
    var _0x3552e1 = [];
    var _0x521e29 = [''];
    for (i = 0x0; i < _0x54fc2c; i++) {
        for (j = 0x0; j < _0x7c5feb; j++) {
            if (_0x3552e1['indexOf'](_0x5f1b4d[j]) != -0x1) {
                var _0x4e1b3c = _0x3552e1['indexOf'](_0x5f1b4d[j]);
                _0x3552e1 = _0x3552e1['slice'](0x0, _0x4e1b3c);
            } else {
                _0x3552e1['push'](_0x5f1b4d[j]);
            }
        }
        if (_0x521e29['indexOf'](_0x3552e1['join']('\x20')) == -0x1) {
            _0x521e29['push'](_0x3552e1['join']('\x20'));
        } else {
            break;
        }
    }
    const _0x30bba2 = _0x521e29['indexOf'](_0x3552e1['join']('\x20'));
    if (_0x30bba2 == _0x54fc2c) {
        console['log'](_0x521e29[_0x30bba2]);
    } else {
        const _0x5a7581 = (_0x54fc2c - _0x30bba2) % (_0x521e29['length'] - _0x30bba2);
        console['log'](_0x521e29[_0x30bba2 + _0x5a7581]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));