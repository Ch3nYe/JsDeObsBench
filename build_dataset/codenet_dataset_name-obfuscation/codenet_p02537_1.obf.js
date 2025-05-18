const main = _0x337620 => {
    const [_0x428266, _0x4a6865] = _0x337620['split']('\x0a')[0x0]['split']('\x20')['map'](Number);
    _0x337620 = _0x337620['split']('\x0a')['slice'](0x1);
    const _0x590623 = _0x337620['map'](Number);
    let _0x5c3128 = [];
    _0x5c3128['push'](_0x590623[0x0]);
    for (let _0x27bb94 = 0x1; _0x27bb94 < _0x428266; _0x27bb94++) {
        if (Math['abs'](_0x590623[_0x27bb94] - _0x5c3128[_0x5c3128['length'] - 0x1]) <= _0x4a6865) {
            _0x5c3128['push'](_0x590623[_0x27bb94]);
        }
    }
    console['log'](_0x5c3128['length']);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));