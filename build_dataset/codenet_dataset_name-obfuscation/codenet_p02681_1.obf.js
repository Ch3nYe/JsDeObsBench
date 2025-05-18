'use strict';
const Main = _0x31bc75 => {
    const _0x4aef74 = _0x31bc75['trim']()['split']('\x0a');
    const _0x421b76 = _0x4aef74[0x0];
    const _0x5af60d = _0x4aef74[0x1];
    let _0x336121 = 'Yes';
    const _0x24961a = _0x5af60d['replace'](_0x421b76, '');
    if (_0x5af60d['slice'](-0x1) === _0x24961a && _0x24961a['length'] === 0x1) {
        _0x336121 = 'Yes';
    } else {
        _0x336121 = 'No';
    }
    console['log'](_0x336121);
    return _0x336121;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));