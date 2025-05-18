'use strict';
function Main(_0x33736e) {
    const _0x34e144 = Number(_0x33736e['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const _0x5776cb = Number(_0x33736e['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const _0x387de9 = _0x33736e['split']('\x0a')['slice'](0x1)['map'](_0x51a87b => _0x51a87b['split']('\x20')['map'](_0x41b23c => Number(_0x41b23c)))['filter'](_0x86b8af => _0x86b8af[0x0] <= _0x5776cb)['sort']((_0x482846, _0x3bb55f) => {
        if (_0x482846[0x1] === _0x3bb55f[0x1]) {
            return _0x3bb55f[0x0] - _0x482846[0x0];
        } else {
            return _0x3bb55f[0x1] - _0x482846[0x1];
        }
    });
    let _0x40dac6 = 0x0;
    let _0x2cae68 = 0x0;
    if (_0x387de9['length'] === 0x0) {
        console['log'](0x0);
        return;
    }
    for (let _0x3f0b5a = 0x0; _0x3f0b5a < _0x34e144; _0x3f0b5a++) {
        if (_0x2cae68 === _0x5776cb) {
            break;
        }
        if (_0x387de9[_0x3f0b5a][0x0] > _0x5776cb - _0x2cae68) {
            continue;
        }
        _0x40dac6 += _0x387de9[_0x3f0b5a][0x1];
        _0x2cae68++;
    }
    console['log'](_0x40dac6);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());