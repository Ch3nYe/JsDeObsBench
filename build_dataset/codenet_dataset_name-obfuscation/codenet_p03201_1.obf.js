'use strict';
function getPair(_0x49b27e) {
    return parseInt(_0x49b27e['toString'](0x2)['split']('')['map'](_0x50f3e5 => _0x50f3e5 === '1' ? '0' : '1')['reduce']((_0x4a07cc, _0x542d02) => _0x4a07cc + _0x542d02, ''), 0x2) + 0x1;
}
function main(_0x45fc99) {
    const _0x27985a = _0x45fc99['split']('\x0a')['filter'](_0x43e067 => _0x43e067 !== '');
    const _0x410e94 = _0x27985a[0x1]['split']('\x20')['map'](Number);
    let _0x2eb778 = _0x410e94['sort']((_0x9d0d73, _0x310724) => _0x310724 - _0x9d0d73);
    let _0x4c1391 = 0x0;
    while (_0x2eb778['length'] > 0x0) {
        let _0x45ba49 = _0x2eb778[0x0];
        _0x2eb778['splice'](0x0, 0x1);
        let _0x39ec55 = getPair(_0x45ba49);
        let _0x35c83a = _0x2eb778['findIndex'](_0x8c4c76 => _0x8c4c76 === _0x39ec55);
        if (_0x35c83a >= 0x0) {
            _0x2eb778['splice'](_0x35c83a, 0x1);
            _0x4c1391++;
        }
    }
    console['log'](_0x4c1391);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));