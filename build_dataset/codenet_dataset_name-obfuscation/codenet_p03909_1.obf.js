'use strict';
const main = _0x4abbba => {
    _0x4abbba = _0x4abbba['trim']()['split']('\x0a');
    const _0x28a8df = parseInt(_0x4abbba[0x0]['split']('\x20')[0x0]);
    const _0x53ca0a = parseInt(_0x4abbba[0x0]['split']('\x20')[0x1]);
    const _0x5a86aa = _0x4abbba['slice'](0x1, _0x28a8df + 0x1)['map'](_0x5b7711 => _0x5b7711['split']('\x20'));
    const _0x1fb466 = 'ABCDEFGHIJ'['split']('');
    for (let _0x550bef = 0x0; _0x550bef < _0x28a8df; _0x550bef++) {
        for (let _0x4a8403 = 0x0; _0x4a8403 < _0x53ca0a; _0x4a8403++) {
            if (_0x5a86aa[_0x550bef][_0x4a8403] === 'snuke') {
                console['log'](_0x1fb466[_0x4a8403] + (_0x550bef + 0x1));
                return;
            }
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));