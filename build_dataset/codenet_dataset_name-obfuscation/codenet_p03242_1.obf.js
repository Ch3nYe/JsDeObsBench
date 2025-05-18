'use strict';
const main = _0x245413 => {
    let _0x4ccab8 = _0x245413[0x0]['split']('');
    console['log'](_0x4ccab8['map'](_0x58c41c => _0x58c41c == '9' ? 0x1 + '' : 0x9 + '')['reduce']((_0x3a05f8, _0x2644c2) => _0x3a05f8 + _0x2644c2));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));