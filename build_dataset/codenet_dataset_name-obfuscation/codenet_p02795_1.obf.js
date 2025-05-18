'use strict';
const main = _0x3265e7 => {
    const _0xb04f9d = _0x3265e7['trim']()['split']('\x0a');
    let _0x9bcd95 = Number(_0xb04f9d[0x0]['split']('\x20'));
    let _0x434b9c = Number(_0xb04f9d[0x1]['split']('\x20'));
    let _0x94ebe0 = Number(_0xb04f9d[0x2]['split']('\x20'));
    let _0x56aee4 = 0x0;
    let _0x4e21f1 = 0x0;
    let _0x165765 = 0x0;
    while (0x1) {
        if (_0x434b9c >= _0x9bcd95) {
            _0x165765 += _0x434b9c - _0x4e21f1;
            _0x56aee4++;
        } else {
            _0x165765 += _0x9bcd95 - _0x56aee4;
            _0x4e21f1++;
        }
        if (_0x165765 >= _0x94ebe0)
            break;
    }
    console['log'](_0x4e21f1 + _0x56aee4);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));