function main(_0xb19531) {
    var _0x29391b = _0xb19531['split'](/\r?\n/g);
    var _0x328317 = _0x29391b[0x0]['split']('\x20');
    const _0x46c536 = _0x328317[0x0], _0x510a57 = _0x328317[0x1];
    var _0x922b50 = _0x29391b[0x1]['split']('\x20')['map'](Number);
    _0x922b50 = _0x922b50['reduce']((_0x58940a, _0x4206b1) => _0x58940a + _0x4206b1);
    console['log'](0x1 < Math['ceil'](_0x46c536 / _0x922b50) ? 'No' : 'Yes');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));