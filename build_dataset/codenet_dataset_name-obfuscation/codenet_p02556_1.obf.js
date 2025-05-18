function Main(_0x267063) {
    _0x267063 = _0x267063['split']('\x0a');
    _0x267063['shift']();
    let _0x40446a = _0x267063['map'](_0x5c52eb => _0x5c52eb['split']('\x20')['map'](Number));
    let _0x5c19bb = _0x40446a['map'](_0x3e06a7 => _0x3e06a7[0x0] + _0x3e06a7[0x1]);
    let _0x3429c9 = _0x40446a['map'](_0x109fa1 => _0x109fa1[0x0] - _0x109fa1[0x1]);
    let _0x2a1042 = Math['max'](..._0x5c19bb) - Math['min'](..._0x5c19bb);
    let _0x2664df = Math['max'](..._0x3429c9) - Math['min'](..._0x3429c9);
    console['log'](Math['max'](_0x2a1042, _0x2664df));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));