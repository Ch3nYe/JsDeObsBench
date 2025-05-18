'use strict';
function main(_0x27ef89) {
    _0x27ef89 = _0x27ef89['split']('\x0a');
    const _0x1b9dd2 = Number(_0x27ef89[0x0]['split']('\x20')[0x1]);
    const _0x38d947 = _0x27ef89[0x1]['split']('\x20')['map'](_0x585967 => Number(_0x585967));
    const _0x51b489 = [...Array(0x30d41)]['fill'](0x0);
    for (const _0x32f7c of _0x38d947) {
        _0x51b489[_0x32f7c] += 0x1;
    }
    _0x51b489['sort']((_0x53d44f, _0x2091a5) => _0x2091a5 - _0x53d44f);
    const _0x297502 = _0x51b489['slice'](_0x1b9dd2)['reduce']((_0x124514, _0x512a23) => _0x124514 + _0x512a23);
    console['log'](_0x297502);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));