function Main(_0x26cd35) {
    const [_0x2eb6a9] = _0x26cd35['split']('\x0a');
    const [_0x5cf2c9, _0x308a80, _0x2259cf] = toNumArray(_0x2eb6a9);
    let _0x1dac39 = _0x308a80 * _0x2259cf >= _0x5cf2c9;
    console['log'](_0x1dac39 ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function toNumArray(_0x1cb399, _0xbe8472 = '\x20') {
    return _0x1cb399['split'](_0xbe8472)['map'](_0xe752b5 => parseInt(_0xe752b5, 0xa));
}
function toBitIntArray(_0xc1fe3, _0x118944 = '\x20') {
    return _0xc1fe3['split'](_0x118944)['map'](_0x55cf18 => BigInt(_0x55cf18));
}
function toMatrix(_0x5a7bc6, _0x14f52f = '\x20') {
    const _0x41c8a0 = _0x5a7bc6['map'](_0x462c60 => _0x462c60['split'](_0x14f52f));
    return _0x41c8a0;
}
function sum(_0x3ac3ef) {
    return _0x3ac3ef['reduce']((_0x14f8a4, _0x251090) => _0x14f8a4 + _0x251090);
}