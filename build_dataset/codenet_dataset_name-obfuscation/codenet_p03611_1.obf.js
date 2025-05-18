'use strict';
const main = _0x31688d => {
    _0x31688d = _0x31688d['trim']()['split']('\x0a');
    const _0x285905 = parseInt(_0x31688d[0x0]);
    const _0x47b570 = _0x31688d[0x1]['split']('\x20')['map'](_0x5e54b7 => parseInt(_0x5e54b7))['sort']((_0x7630ed, _0x2adfce) => _0x7630ed - _0x2adfce);
    const _0x16867d = new Set();
    let _0x4aa037 = 0x0;
    for (let _0x422e6b = 0x0; _0x422e6b < _0x285905; _0x422e6b++) {
        let _0x588eff = 0x0;
        if (_0x16867d['has'](_0x47b570[_0x422e6b])) {
            continue;
        }
        _0x16867d['add'](_0x47b570[_0x422e6b]);
        for (let _0xae803f = 0x0; _0xae803f < _0x285905; _0xae803f++) {
            if (Math['abs'](_0x47b570[_0xae803f] - _0x47b570[_0x422e6b]) <= 0x1) {
                _0x588eff++;
            }
        }
        if (_0x588eff > _0x4aa037) {
            _0x4aa037 = _0x588eff;
        }
    }
    console['log'](_0x4aa037);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));