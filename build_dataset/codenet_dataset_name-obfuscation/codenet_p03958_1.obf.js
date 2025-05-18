'use strict';
const main = _0x4d03b0 => {
    _0x4d03b0 = _0x4d03b0['trim']()['split']('\x0a');
    const _0x468476 = parseInt(_0x4d03b0[0x0]['split']('\x20')[0x0]);
    const _0x3ef01e = parseInt(_0x4d03b0[0x0]['split']('\x20')[0x1]);
    let _0x162bcc = _0x4d03b0[0x1]['split']('\x20')['map'](_0x2d7466 => {
        return parseInt(_0x2d7466);
    });
    let _0x197f5d = _0x162bcc['reduce'](function (_0x131ada, _0x309fe6) {
        return _0x131ada > _0x309fe6 ? _0x131ada : _0x309fe6;
    });
    if (_0x197f5d - 0x1 - (_0x468476 - _0x197f5d) > 0x0) {
        console['log'](_0x197f5d - 0x1 - (_0x468476 - _0x197f5d));
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));