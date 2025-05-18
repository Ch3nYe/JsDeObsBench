function Main(_0x42266a) {
    const _0x445913 = _0x42266a['split']('\x0a');
    let _0xc34668 = parseInt(_0x445913[0x0]);
    let _0x3d0d1f = _0x445913[0x1]['split']('\x20')['map'](function (_0x1a3f90) {
        return parseInt(_0x1a3f90);
    });
    let _0x7fcd0e = _0x3d0d1f['slice']()['sort'](function (_0x502ac0, _0x4e533f) {
        return _0x502ac0 - _0x4e533f;
    });
    const _0x1fa385 = _0x7fcd0e[_0xc34668 / 0x2 - 0x1];
    const _0x22aac3 = _0x7fcd0e[_0xc34668 / 0x2];
    _0x3d0d1f['forEach'](function (_0x23fd74) {
        console['log'](_0x23fd74 <= _0x1fa385 ? _0x22aac3 : _0x1fa385);
    });
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));