function Main(_0x513f45) {
    _0x513f45 = _0x513f45['replace'](/\n/g, '\x20');
    _0x513f45 = _0x513f45['split']('\x20');
    var _0x30611a = Number(_0x513f45[0x0]);
    var _0x4b7972 = Number(_0x513f45[0x1]);
    _0x513f45 = _0x513f45['slice'](0x2);
    for (var _0x30d9e8 = 0x0; _0x30d9e8 < _0x513f45['length'] - _0x4b7972; _0x30d9e8++) {
        if (Number(_0x513f45[_0x30d9e8]) < Number(_0x513f45[_0x30d9e8 + _0x4b7972])) {
            console['log']('Yes');
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));