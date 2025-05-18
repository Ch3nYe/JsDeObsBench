function Main(_0x1d8187) {
    let _0x22f884 = 0x0;
    let _0x51efe0 = 0x0;
    for (let _0x5d5e84 = 0x0; _0x5d5e84 < _0x1d8187['length']; _0x5d5e84++) {
        if (_0x1d8187[_0x5d5e84] === '1') {
            _0x51efe0++;
        } else if (_0x1d8187[_0x5d5e84] === '0') {
            _0x22f884++;
        }
    }
    console['log'](Math['abs'](_0x51efe0 - _0x22f884));
}
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
Main(input);