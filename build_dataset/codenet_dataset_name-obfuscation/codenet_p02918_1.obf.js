'use strict';
const main = _0x2da521 => {
    _0x2da521 = _0x2da521['trim']()['split']('\x0a');
    const _0x4f8b86 = parseInt(_0x2da521[0x0]['split']('\x20')[0x0]);
    const _0x560e90 = parseInt(_0x2da521[0x0]['split']('\x20')[0x1]);
    const _0x67d241 = _0x2da521[0x1]['split']('');
    let _0x4cdb32 = 0x0;
    let _0x3c4f81;
    for (let _0x48fed9 in _0x67d241) {
        if (_0x3c4f81 === 'L' && _0x67d241[_0x48fed9] === 'L') {
            _0x4cdb32++;
        }
        if (_0x3c4f81 === 'R' && _0x67d241[_0x48fed9] === 'R') {
            _0x4cdb32++;
        }
        _0x3c4f81 = _0x67d241[_0x48fed9];
    }
    console['log'](Math['min'](_0x4f8b86 - 0x1, _0x4cdb32 + 0x2 * _0x560e90));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));