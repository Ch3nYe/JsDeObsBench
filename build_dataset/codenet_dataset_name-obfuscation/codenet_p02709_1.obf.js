'use strict';
const main = _0x6ba700 => {
    const _0x266250 = _0x6ba700['trim']()['split']('\x0a');
    const _0x1eb6c6 = parseInt(_0x266250[0x0]);
    const _0x151da5 = _0x266250[0x1]['split']('\x20')['map'](_0x3fc46f => parseInt(_0x3fc46f));
    function _0x6c4eaa(_0x406d93, _0x467ed7) {
        if (_0x406d93 === -0x1)
            return 0x0;
        const _0x135ccf = [];
        for (const _0x1e4671 of _0x467ed7) {
            const _0xafa2d2 = _0x467ed7['filter'](_0x2a2ff5 => _0x2a2ff5 !== _0x1e4671);
            const _0x1ef4d4 = _0x406d93 > _0x1e4671 ? _0x406d93 - _0x1e4671 : _0x1e4671 - _0x406d93;
            const _0x40f65e = _0x151da5[_0x406d93] * _0x1ef4d4 + _0x6c4eaa(_0x406d93 - 0x1, _0xafa2d2);
            _0x135ccf['push'](_0x40f65e);
        }
        return Math['max'](..._0x135ccf);
    }
    console['log'](_0x6c4eaa(_0x1eb6c6 - 0x1, [...Array(_0x1eb6c6)['keys']()]));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));