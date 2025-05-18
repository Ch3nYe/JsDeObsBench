'use strict';
const main = _0x141acf => {
    const _0x15065d = _0x141acf['split']('\x0a')[0x0];
    const [_0x21050b, _0x514011, _0x1e8b5d] = _0x15065d['split']('\x20')['map'](_0x3aa218 => Number(_0x3aa218));
    if (_0x514011 - _0x1e8b5d >= 0x0) {
        console['log']('delicious');
    } else if (_0x514011 - _0x1e8b5d < 0x0 && Math['abs'](_0x514011 - _0x1e8b5d) <= _0x21050b) {
        console['log']('safe');
    } else {
        console['log']('dangerous');
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));