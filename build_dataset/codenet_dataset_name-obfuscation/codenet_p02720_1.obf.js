'use strict';
function main(_0x1c0120) {
    const _0x472b19 = parseInt(_0x1c0120[0x0]);
    let _0x916f4f = 0x1;
    let _0x1b6991 = 0x0;
    while (!![]) {
        const _0xc9e4a3 = (_0x916f4f + '')['split']('')['map'](_0x39071c => parseInt(_0x39071c));
        let _0x435752 = !![];
        for (let _0x1d64b2 = 0x1; _0x1d64b2 < _0xc9e4a3['length']; _0x1d64b2++) {
            if (Math['abs'](_0xc9e4a3[_0x1d64b2] - _0xc9e4a3[_0x1d64b2 - 0x1]) > 0x1) {
                _0x435752 = ![];
                if (_0xc9e4a3[_0x1d64b2] === 0x9) {
                    _0xc9e4a3[_0x1d64b2 - 0x1] += 0x1;
                    _0xc9e4a3[_0x1d64b2] = 0x0;
                } else {
                    _0xc9e4a3[_0x1d64b2] += 0x1;
                }
                _0x916f4f = parseInt(_0xc9e4a3['join'](''));
                break;
            }
        }
        if (_0x435752) {
            _0x1b6991++;
            if (_0x1b6991 === _0x472b19) {
                console['log'](_0x916f4f);
                break;
            }
            _0x916f4f++;
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));