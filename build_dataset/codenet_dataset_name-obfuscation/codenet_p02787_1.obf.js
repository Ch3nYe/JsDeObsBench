'use strict';
function Main(_0x2d2ab1) {
    _0x2d2ab1 = _0x2d2ab1['trim']()['split']('\x0a');
    const _0x105746 = _0x2d2ab1[0x0]['split']('\x20')['map'](_0x3ba784 => parseInt(_0x3ba784));
    const _0x2b187b = _0x2d2ab1['slice'](0x1);
    const _0x3f61cc = _0x105746[0x0];
    const _0x21925b = _0x105746[0x1];
    const _0x2d18c6 = [];
    for (let _0x2e7d48 = 0x0; _0x2e7d48 < _0x2b187b['length']; ++_0x2e7d48) {
        const _0x39a90e = _0x2b187b[_0x2e7d48]['split']('\x20')['map'](_0x48815b => parseInt(_0x48815b));
        _0x2d18c6['push']([
            _0x39a90e[0x0],
            _0x39a90e[0x1]
        ]);
    }
    _0x2d18c6['sort']((_0x5244e6, _0xbf415) => _0x5244e6[0x0] - _0xbf415[0x0]);
    let _0x5df720 = Array(_0x3f61cc + 0x1)['fill'](Infinity);
    _0x5df720[0x0] = 0x0;
    for (let _0x543c89 = 0x0; _0x543c89 < _0x21925b; ++_0x543c89) {
        const _0x1f6436 = _0x2d18c6[_0x543c89][0x0];
        const _0x48f58f = _0x2d18c6[_0x543c89][0x1];
        for (let _0x3d664a = 0x0; _0x3d664a <= _0x3f61cc; ++_0x3d664a) {
            const _0x5c5d18 = Math['min'](_0x3d664a + _0x1f6436, _0x3f61cc);
            _0x5df720[_0x5c5d18] = Math['min'](_0x5df720[_0x5c5d18], _0x5df720[_0x3d664a] + _0x48f58f);
        }
    }
    console['log'](_0x5df720[_0x3f61cc]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));