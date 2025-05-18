'use strict';
const main = _0x55de55 => {
    _0x55de55 = _0x55de55['trim']()['split']('\x0a');
    const _0x2a4483 = parseInt(_0x55de55[0x0]['split']('\x20')[0x0]);
    const _0x380a68 = _0x55de55[0x1]['split']('');
    const _0x1b144e = new Set(_0x380a68);
    const _0x40f664 = [..._0x1b144e];
    let _0x5be935 = 0x0;
    for (let _0x10340a in _0x380a68) {
        const _0x386406 = _0x380a68['slice'](0x0, _0x10340a);
        const _0x553279 = _0x380a68['slice'](_0x10340a, _0x380a68['length']);
        let _0x3efd80 = 0x0;
        for (let _0x135fc3 in _0x40f664) {
            if (_0x386406['indexOf'](_0x40f664[_0x135fc3]) !== -0x1 && _0x553279['indexOf'](_0x40f664[_0x135fc3]) !== -0x1) {
                _0x3efd80++;
            }
        }
        _0x5be935 = Math['max'](_0x5be935, _0x3efd80);
    }
    console['log'](_0x5be935);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));