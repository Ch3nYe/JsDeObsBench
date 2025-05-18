'use strict';
const main = _0x46c35b => {
    const _0x36daf6 = _0x46c35b['trim']()['split']('\x0a')['map'](_0x5e249d => parseInt(_0x5e249d));
    let _0x4842ed = 0xa;
    let _0x58842c = 0x0;
    for (let _0x4945f2 = 0x0; _0x4945f2 < _0x36daf6['length']; _0x4945f2++) {
        let _0x28437b = String(_0x36daf6[_0x4945f2])['split']('');
        _0x28437b = parseInt(_0x28437b[_0x28437b['length'] - 0x1]);
        let _0x4c771e = 0xa - _0x28437b;
        _0x58842c += parseInt(_0x36daf6[_0x4945f2]);
        if (_0x4c771e !== 0xa) {
            _0x58842c += _0x4c771e;
        }
        if (_0x4c771e !== 0xa && _0x28437b < _0x4842ed) {
            _0x4842ed = _0x28437b;
        }
    }
    console['log'](parseInt(_0x58842c - (0xa - _0x4842ed)));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));