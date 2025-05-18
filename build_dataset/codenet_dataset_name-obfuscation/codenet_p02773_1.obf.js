'use strict';
const main = _0x3c52ab => {
    const _0x55c6c2 = _0x3c52ab['trim']()['split']('\x0a');
    const _0x13b348 = _0x55c6c2['shift']();
    let _0x8a6cc5 = {};
    _0x55c6c2['forEach'](_0x2f7795 => {
        if (_0x8a6cc5[_0x2f7795]) {
            _0x8a6cc5[_0x2f7795]++;
        } else {
            _0x8a6cc5[_0x2f7795] = 0x1;
        }
    });
    let _0x230439 = [];
    let _0xd43aaf = 0x0;
    let _0x980bc3 = _0x1fc676 => {
        console['log'](_0x1fc676);
    };
    for (let _0x489a13 = 0x0; _0x489a13 < Object['keys'](_0x8a6cc5)['length']; _0x489a13++) {
        if (_0x8a6cc5[Object['keys'](_0x8a6cc5)[_0x489a13]] < _0xd43aaf) {
            continue;
        } else if (_0x8a6cc5[Object['keys'](_0x8a6cc5)[_0x489a13]] > _0xd43aaf) {
            _0x230439 = [];
            _0x230439['push'](Object['keys'](_0x8a6cc5)[_0x489a13]);
            _0xd43aaf = _0x8a6cc5[Object['keys'](_0x8a6cc5)[_0x489a13]];
        } else if (_0x8a6cc5[Object['keys'](_0x8a6cc5)[_0x489a13]] * 0x1 == _0xd43aaf) {
            _0x230439['push'](Object['keys'](_0x8a6cc5)[_0x489a13]);
        }
    }
    _0x230439['sort']();
    _0x230439['forEach'](_0x980bc3);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));