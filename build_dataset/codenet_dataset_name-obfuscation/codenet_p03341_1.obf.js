'use strict';
const main = _0x3f873b => {
    _0x3f873b = _0x3f873b['trim']()['split']('\x0a');
    const _0x3dc86a = parseInt(_0x3f873b[0x0]['split']('\x20')[0x0]);
    const _0x595eb1 = _0x3f873b[0x1]['split']('');
    const _0x1ced04 = _0x595eb1['filter'](_0x70ff8a => _0x70ff8a === 'E')['length'];
    const _0x31bc1e = _0x3dc86a - _0x1ced04;
    let _0x395814 = 0x0;
    let _0x236a66 = 0x0;
    let _0x22e6e6 = Infinity;
    for (let _0x142c4e = 0x0; _0x142c4e < _0x3dc86a; _0x142c4e++) {
        const _0x59fff9 = _0x236a66;
        let _0x2e8119 = _0x1ced04 - _0x395814;
        if (_0x595eb1[_0x142c4e] === 'E') {
            _0x2e8119--;
        }
        _0x22e6e6 = Math['min'](_0x22e6e6, _0x59fff9 + _0x2e8119);
        if (_0x595eb1[_0x142c4e] === 'W') {
            _0x236a66++;
        } else {
            _0x395814++;
        }
    }
    console['log'](_0x22e6e6);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));