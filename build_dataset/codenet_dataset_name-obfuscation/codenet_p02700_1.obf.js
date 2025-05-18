function Main(_0x13b924) {
    const _0x10ecf8 = _0x13b924['split']('\x20');
    let _0x2ee31a = Number(_0x10ecf8[0x0]);
    let _0x473810 = Number(_0x10ecf8[0x2]);
    let _0x4f67bd = 0x0;
    let _0x4db7bf = !![];
    while (_0x4db7bf) {
        if (_0x4f67bd % 0x2 === 0x0) {
            _0x473810 = _0x473810 - Number(_0x10ecf8[0x1]);
            if (_0x473810 <= 0x0) {
                console['log']('Yes');
                _0x4db7bf = ![];
            }
        } else {
            _0x2ee31a = _0x2ee31a - Number(_0x10ecf8[0x3]);
            if (_0x2ee31a <= 0x0) {
                console['log']('No');
                _0x4db7bf = ![];
            }
        }
        _0x4f67bd++;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));