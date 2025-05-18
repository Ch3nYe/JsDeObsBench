'use strict';
const Main = _0x5be5d0 => {
    let _0x3b238b = _0x5be5d0['split']('\x0a');
    let _0x19298c = _0x3b238b[0x0]['split']('\x20')['map'](Number)[0x0];
    let _0x495727 = _0x3b238b[0x0]['split']('\x20')['map'](Number)[0x1];
    let _0x2ea018 = _0x3b238b[0x1]['trim']();
    let _0x5a8f4d = _0x2ea018[_0x495727 - 0x1];
    switch (_0x5a8f4d) {
    case 'A':
        _0x5a8f4d = 'a';
        break;
    case 'B':
        _0x5a8f4d = 'b';
        break;
    case 'C':
        _0x5a8f4d = 'c';
        break;
    }
    let _0x96f695 = _0x2ea018['split']('');
    _0x96f695[_0x495727 - 0x1] = _0x5a8f4d;
    _0x2ea018 = _0x96f695['join']('');
    console['log'](_0x2ea018);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));