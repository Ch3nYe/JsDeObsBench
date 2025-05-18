'use strict';
const main = _0x3eee85 => {
    _0x3eee85 = _0x3eee85['split']('\x20')['map'](_0x2e728d => parseInt(_0x2e728d));
    const _0x26b24e = _0x3eee85[0x0];
    const _0x24d702 = _0x3eee85[0x1];
    const _0x35751d = _0x3eee85[0x2];
    const _0x4e5b9b = _0x24d702 + _0x26b24e;
    const _0x5a5b12 = _0x35751d + _0x26b24e;
    let _0xdc84d4 = [];
    if (_0x24d702 <= _0x35751d) {
        _0xdc84d4 = [
            _0x24d702,
            _0x4e5b9b,
            _0x35751d,
            _0x5a5b12
        ];
    } else {
        _0xdc84d4 = [
            _0x35751d,
            _0x5a5b12,
            _0x24d702,
            _0x4e5b9b
        ];
    }
    if (_0xdc84d4[0x1] < _0xdc84d4[0x2]) {
        console['log'](_0xdc84d4[0x2] - _0xdc84d4[0x1]);
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));