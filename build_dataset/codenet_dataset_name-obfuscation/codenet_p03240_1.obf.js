'use strict';
const main = _0x300557 => {
    _0x300557 = _0x300557['split']('\x0a');
    const _0x147ecb = parseInt(_0x300557[0x0]);
    let _0x4aed15 = [];
    let _0x117b80 = [];
    let _0x39ce0b = [];
    _0x300557['slice'](0x1, _0x147ecb + 0x1)['forEach'](_0x5d18de => {
        let _0x567e9d = _0x5d18de['split']('\x20')['map'](_0x36c059 => parseInt(_0x36c059));
        _0x4aed15['push'](_0x567e9d[0x0]);
        _0x117b80['push'](_0x567e9d[0x1]);
        _0x39ce0b['push'](_0x567e9d[0x2]);
    });
    const _0x110826 = 0x64;
    for (let _0x2eca8b = 0x0; _0x2eca8b <= _0x110826; _0x2eca8b++) {
        for (let _0x2cae85 = 0x0; _0x2cae85 <= _0x110826; _0x2cae85++) {
            let _0x4c5116 = -0x1;
            for (let _0x5952ea = 0x0; _0x5952ea < _0x147ecb; _0x5952ea++) {
                let _0x16ba37 = _0x39ce0b[_0x5952ea] + Math['abs'](_0x117b80[_0x5952ea] - _0x2eca8b) + Math['abs'](_0x4aed15[_0x5952ea] - _0x2cae85);
                if (_0x4c5116 === -0x1) {
                    _0x4c5116 = _0x16ba37;
                } else if (_0x4c5116 !== _0x16ba37) {
                    _0x4c5116 = -0x2;
                    break;
                }
            }
            if (_0x4c5116 === -0x2)
                continue;
            console['log']('%d\x20%d\x20%d', _0x2cae85, _0x2eca8b, _0x4c5116);
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));