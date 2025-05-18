'use strict';
function Main(_0x4dd0f3) {
    const _0x4c6baf = _0x4dd0f3['split']('\x0a');
    const _0x4d648a = Number(_0x4c6baf[0x0]);
    let _0x362aa9 = 0x0;
    let _0x47b8cc = Math['pow'](0xa, 0xa);
    _0x4c6baf[0x1]['split']('\x20')['forEach'](_0x35176e => {
        _0x362aa9 = Math['max'](_0x362aa9, Number(_0x35176e));
        _0x47b8cc = Math['min'](_0x47b8cc, Number(_0x35176e));
    });
    console['log'](_0x362aa9 - _0x47b8cc);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));