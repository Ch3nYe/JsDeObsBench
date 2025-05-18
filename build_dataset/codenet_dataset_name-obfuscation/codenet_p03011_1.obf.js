'use strict';
function Main(_0x35579c) {
    const _0x39eaa0 = Number(_0x35579c['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const _0x44ed18 = Number(_0x35579c['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const _0x123a03 = Number(_0x35579c['split']('\x0a')[0x0]['split']('\x20')[0x2]);
    const _0x48e9aa = Math['max'](_0x39eaa0, _0x44ed18, _0x123a03);
    console['log'](_0x39eaa0 + _0x44ed18 + _0x123a03 - _0x48e9aa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());