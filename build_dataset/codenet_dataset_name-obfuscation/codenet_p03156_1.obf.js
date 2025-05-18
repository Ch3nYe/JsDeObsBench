'use strict';
const Main = _0x4ae317 => {
    let _0x4f1ec3 = _0x4ae317['trim']()['split']('\x0a');
    let _0x799864 = Number(_0x4f1ec3[0x0]);
    let _0x341442 = Number(_0x4f1ec3[0x1]['split']('\x20')[0x0]);
    let _0x38b3d2 = Number(_0x4f1ec3[0x1]['split']('\x20')[0x1]);
    let _0x26bf90 = [];
    let _0x28d30a = [];
    let _0x129e10 = [];
    let _0x4460c2 = _0x4f1ec3[0x2]['split']('\x20')['map'](_0x24e6bd => parseInt(_0x24e6bd, 0xa));
    for (let _0x178e91 = 0x0; _0x178e91 < _0x799864; _0x178e91++) {
        if (_0x4460c2[_0x178e91] <= _0x341442) {
            _0x26bf90['push'](_0x4460c2[_0x178e91]);
        } else if (_0x4460c2[_0x178e91] <= _0x38b3d2) {
            _0x28d30a['push'](_0x4460c2[_0x178e91]);
        } else {
            _0x129e10['push'](_0x4460c2[_0x178e91]);
        }
    }
    let _0x3ea192 = Math['min'](_0x26bf90['length'], _0x28d30a['length'], _0x129e10['length']);
    console['log'](_0x3ea192);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));