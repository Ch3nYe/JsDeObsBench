'use strict';
function Main(_0x1438c0) {
    const _0x5c64cf = [
        'dream',
        'dreamer',
        'erase',
        'eraser'
    ];
    for (let _0x3245c8 in _0x5c64cf) {
        _0x5c64cf[_0x3245c8] = reverse(_0x5c64cf[_0x3245c8]);
    }
    _0x1438c0 = reverse(_0x1438c0);
    while (_0x1438c0['length'] > 0x0) {
        let _0xa83dc9 = ![];
        for (let _0x42dd3f of _0x5c64cf) {
            if (_0x1438c0['slice'](0x0, _0x42dd3f['length']) == _0x42dd3f) {
                _0x1438c0 = _0x1438c0['substr'](_0x42dd3f['length']);
                _0xa83dc9 = !![];
            }
        }
        if (_0xa83dc9 == ![])
            break;
    }
    if (_0x1438c0['length'] <= 0x0) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
function reverse(_0x44625a) {
    return _0x44625a['split']('')['reverse']()['join']('');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));