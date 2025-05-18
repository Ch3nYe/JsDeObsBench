'use strict';
const main = _0x270bb5 => {
    const _0x1daf1e = _0x270bb5['split']('\x0a')['map'](_0x1d0bbe => _0x1d0bbe['split']('\x20'));
    const _0x1e87fa = _0x1daf1e[0x0][0x0];
    const _0x4fe224 = _0x1e87fa['length'];
    let _0x3e1d1a = !![];
    let _0x2f0292 = !![];
    for (let _0x114261 = 0x0; _0x114261 < _0x4fe224; _0x114261++) {
        if (_0x114261 % 0x2 === 0x0) {
            if (![
                    'R',
                    'U',
                    'D'
                ]['includes'](_0x1e87fa[_0x114261]))
                _0x3e1d1a = ![];
        } else {
            if (![
                    'L',
                    'U',
                    'D'
                ]['includes'](_0x1e87fa[_0x114261]))
                _0x2f0292 = ![];
        }
    }
    if (_0x3e1d1a && _0x2f0292)
        console['log']('Yes');
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));