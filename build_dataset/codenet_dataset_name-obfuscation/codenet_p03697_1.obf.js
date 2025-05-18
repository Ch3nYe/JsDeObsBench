'use strict';
function Main(_0x11aa19) {
    const _0x22b3a3 = _0x11aa19['split']('\x0a')[0x0]['split']('\x20');
    const _0x43daad = parseInt(_0x22b3a3[0x0], 0xa);
    const _0x1659ae = parseInt(_0x22b3a3[0x1], 0xa);
    console['log'](_0x43daad + _0x1659ae >= 0xa ? 'error' : _0x43daad + _0x1659ae);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));