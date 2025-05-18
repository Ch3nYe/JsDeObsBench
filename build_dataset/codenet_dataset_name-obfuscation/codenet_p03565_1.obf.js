'use strict';
function main(_0x3189eb) {
    _0x3189eb = _0x3189eb['split'](/\n/);
    let _0x27a542 = _0x3189eb[0x0]['split']('');
    const _0x994153 = _0x3189eb[0x1]['split']('');
    const _0x3f5b1a = 'UNRESTORABLE';
    for (let _0xf8959a = _0x27a542['length'] - _0x994153['length']; _0xf8959a >= 0x0; _0xf8959a--) {
        let _0x3c4168 = 0x0;
        for (let _0x3f2d88 = 0x0; _0x3f2d88 < _0x994153['length']; _0x3f2d88++) {
            if (_0x27a542[_0xf8959a + _0x3f2d88] == _0x994153[_0x3f2d88] || _0x27a542[_0xf8959a + _0x3f2d88] == '?') {
            } else {
                _0x3c4168++;
                continue;
            }
        }
        if (_0x3c4168 > 0x0)
            continue;
        for (let _0x2b8081 = 0x0; _0x2b8081 < _0x994153['length']; _0x2b8081++) {
            _0x27a542[_0xf8959a + _0x2b8081] = _0x994153[_0x2b8081];
        }
        for (let _0x261055 = 0x0; _0x261055 < _0x27a542['length']; _0x261055++) {
            _0x27a542[_0x261055] = _0x27a542[_0x261055] == '?' ? 'a' : _0x27a542[_0x261055];
        }
        console['log'](_0x27a542 = _0x27a542['join'](''));
        return;
    }
    console['log'](_0x3f5b1a);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));