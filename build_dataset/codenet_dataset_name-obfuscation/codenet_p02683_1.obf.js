function main(_0x4eb546) {
    const _0x2d25c1 = _0x4eb546['trim']()['split']('\x0a');
    const [_0x391571, _0x23c1c9, _0x2e70a5] = splitN(_0x2d25c1[0x0]);
    const _0x163986 = [];
    const _0xa33a5d = [...Array(_0x391571)['keys']()];
    _0x19cc80(_0xa33a5d);
    function _0x19cc80(_0x3fe58d, _0x5ced5c = 0x0, _0x1ca394 = []) {
        for (let _0x2b2254 = 0x0; _0x2b2254 < _0x3fe58d['length']; _0x2b2254++) {
            const _0x5c4570 = [..._0x3fe58d], [_0x42acde] = _0x5c4570['splice'](_0x2b2254, 0x1), [_0x2e1368, ..._0xaebf93] = splitN(_0x2d25c1[_0x42acde + 0x1]), _0x2cb8ce = _0x5ced5c + _0x2e1368, _0x14e176 = _0xaebf93['map']((_0x24d3dd, _0x1c79c) => _0x24d3dd + (_0x1ca394[_0x1c79c] || 0x0));
            if (_0x14e176['every'](_0x11e2e2 => _0x11e2e2 >= _0x2e70a5)) {
                _0x163986['push'](_0x2cb8ce);
                continue;
            }
            _0x19cc80(_0x5c4570, _0x2cb8ce, _0x14e176);
        }
    }
    console['log'](_0x163986['length'] ? Math['min'](..._0x163986) : -0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function splitN(_0x20b8ce) {
    return _0x20b8ce['split']('\x20')['map'](Number);
}