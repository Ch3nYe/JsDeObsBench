'use strict';
const main = _0x36ba83 => {
    _0x36ba83 = _0x36ba83['trim']()['split']('\x0a');
    const _0x5e1e3c = parseInt(_0x36ba83[0x0]['split']('\x20')[0x0]);
    const _0xac7960 = parseInt(_0x36ba83[0x0]['split']('\x20')[0x1]);
    const _0x209460 = parseInt(_0x36ba83[0x0]['split']('\x20')[0x2]);
    let _0x252d3f = 0x0;
    for (let _0x251181 = _0x5e1e3c; _0x251181 <= _0xac7960; _0x251181++) {
        if (_0x251181 % _0x209460 === 0x0)
            _0x252d3f++;
    }
    console['log'](_0x252d3f);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));