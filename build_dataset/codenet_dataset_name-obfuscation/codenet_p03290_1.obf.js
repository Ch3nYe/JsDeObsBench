'use strict';
function main(_0x370007) {
    _0x370007 = _0x370007['trim']()['split']('\x0a');
    const _0x514794 = _0x370007['shift']()['split']('\x20')['map'](_0xdca72e => Number(_0xdca72e));
    _0x370007 = _0x370007['map'](_0x8b5cb0 => _0x8b5cb0['split']('\x20')['map'](_0x96e14e => Number(_0x96e14e)));
    const _0x396deb = (_0x25496e, _0x43de46) => {
        let _0x5f16ea = [Math['pow'](0xa, 0x8)];
        for (let _0x31aeec = 0x0; _0x31aeec < _0x514794[0x0]; _0x31aeec++) {
            const _0xf1d23d = Math['pow'](0x2, _0x31aeec);
            if ((_0x25496e & _0xf1d23d) === _0xf1d23d) {
                const _0x2c9cf8 = (_0x31aeec + 0x1) * 0x64;
                let _0x3bc474 = _0x2c9cf8 * _0x370007[_0x31aeec][0x0] + _0x370007[_0x31aeec][0x1];
                let _0x3f684f = Math['ceil'](_0x43de46 / _0x2c9cf8);
                if (_0x3bc474 < _0x43de46) {
                    _0x5f16ea['push'](_0x370007[_0x31aeec][0x0] + _0x396deb(_0x25496e - _0xf1d23d, _0x43de46 - _0x3bc474));
                } else {
                    _0x5f16ea['push'](_0x3f684f < _0x370007[_0x31aeec][0x0] ? _0x3f684f : _0x370007[_0x31aeec][0x0]);
                }
            }
        }
        return Math['min'](..._0x5f16ea);
    };
    console['log'](_0x396deb(Math['pow'](0x2, _0x514794[0x0]) - 0x1, _0x514794[0x1]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));