'use strict';
const main = _0x35cbee => {
    const [_0x5d3007, _0x12072f, _0x58d116] = _0x35cbee['split']('\x0a')[0x0]['split']('\x20');
    console['log'](_0x12072f - _0x5d3007 == _0x58d116 - _0x12072f ? 'YES' : 'NO');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));