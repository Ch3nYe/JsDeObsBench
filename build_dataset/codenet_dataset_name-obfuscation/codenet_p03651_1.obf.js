'use strict';
const getGcd = (_0x3d4bf5, _0x2a4a89) => {
    return _0x3d4bf5 ? getGcd(_0x2a4a89 % _0x3d4bf5, _0x3d4bf5) : _0x2a4a89;
};
const main = _0x46fe90 => {
    _0x46fe90 = _0x46fe90['trim']()['split']('\x0a');
    const _0x8a39c3 = parseInt(_0x46fe90[0x0]['split']('\x20')[0x0]);
    const _0x3d053f = parseInt(_0x46fe90[0x0]['split']('\x20')[0x1]);
    let _0x1e5f1e = _0x46fe90[0x1]['split']('\x20')['map'](_0x1f761a => parseInt(_0x1f761a))['sort']((_0x3a80da, _0x887b45) => _0x887b45 - _0x3a80da);
    const _0x4b3a03 = _0x1e5f1e[0x0];
    let _0x2d405c = Infinity;
    if (_0x4b3a03 < _0x3d053f) {
        console['log']('IMPOSSIBLE');
        return;
    }
    for (let _0x208f7c = 0x0; _0x208f7c < _0x8a39c3; _0x208f7c++) {
        for (let _0x4c6c0b = _0x208f7c + 0x1; _0x4c6c0b < _0x8a39c3; _0x4c6c0b++) {
            _0x2d405c = Math['min'](_0x2d405c, getGcd(_0x1e5f1e[_0x208f7c], _0x1e5f1e[_0x4c6c0b]));
        }
    }
    console['log'](_0x3d053f % _0x2d405c === 0x0 ? 'POSSIBLE' : 'IMPOSSIBLE');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));