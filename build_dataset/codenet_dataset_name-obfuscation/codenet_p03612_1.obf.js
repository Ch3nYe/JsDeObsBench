'use strict';
const main = _0x245c79 => {
    _0x245c79 = _0x245c79['trim']()['split']('\x0a');
    const _0x1ce20e = parseInt(_0x245c79[0x0]);
    const _0x4faa47 = _0x245c79[0x1]['split']('\x20')['map'](_0x5da1d9 => parseInt(_0x5da1d9));
    let _0x4ef6dc = 0x0;
    for (let _0xe33da0 in _0x4faa47) {
        if (parseInt(_0xe33da0) + 0x1 === _0x4faa47[_0xe33da0]) {
            let _0x222833 = _0x4faa47[_0xe33da0];
            _0x4faa47[_0xe33da0] = _0x4faa47[parseInt(_0xe33da0) + 0x1];
            _0x4faa47[parseInt(_0xe33da0) + 0x1] = _0x222833;
            _0x4ef6dc++;
        }
    }
    console['log'](_0x4ef6dc);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));