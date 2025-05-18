'use strict';
function Main(_0x1fa3dc) {
    _0x1fa3dc = _0x1fa3dc['split']('\x0a');
    const _0x2f254c = _0x1fa3dc[0x0]['split']('\x20');
    if (_0x2f254c[0x0] % 0x3 === 0x0 || _0x2f254c[0x1] % 0x3 === 0x0 || (_0x2f254c[0x0] + _0x2f254c[0x1]) % 0x3 === 0x0) {
        console['log']('Possible');
    } else {
        console['log']('Impossible');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));