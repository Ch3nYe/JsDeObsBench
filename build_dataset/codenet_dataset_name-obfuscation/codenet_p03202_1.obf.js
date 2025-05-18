'use strict';
function main(_0x4eb5ec) {
    const _0x58ce2c = _0x4eb5ec['split']('\x0a')['filter'](_0x2deda2 => _0x2deda2 !== '');
    const _0x4b177c = _0x58ce2c[0x0];
    const _0x11495e = _0x58ce2c[0x1]['split']('\x20')['map'](_0x307ffb => Number(_0x307ffb));
    let _0x311af9 = 0x1;
    while (_0x3a28e5(_0x311af9, _0x11495e) === ![]) {
        _0x311af9 = _0x311af9 + 0x1;
    }
    console['log'](_0x311af9);
    function _0x3a28e5(_0x492df9, _0x25c3b9) {
        let _0x134593 = '0'['repeat'](_0x25c3b9[0x0]);
        for (let _0x560a56 = 0x1; _0x560a56 < _0x25c3b9['length']; _0x560a56++) {
            if (_0x25c3b9[_0x560a56 - 0x1] < _0x25c3b9[_0x560a56]) {
                _0x134593 = _0x134593 + '0'['repeat'](_0x25c3b9[_0x560a56] - _0x25c3b9[_0x560a56 - 0x1]);
            } else {
                _0x134593 = parseInt(_0x134593['substring'](0x0, _0x25c3b9[_0x560a56]), _0x492df9) + 0x1;
                if (isNaN(_0x134593)) {
                    return ![];
                }
                _0x134593 = '' + _0x134593;
                if (_0x134593['length'] > _0x25c3b9[_0x560a56]) {
                    return ![];
                } else {
                    _0x134593 = '0'['repeat'](_0x25c3b9[_0x560a56] - _0x134593['length']) + _0x134593;
                }
            }
        }
        return !![];
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));