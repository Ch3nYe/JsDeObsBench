function Main(_0x28cf32) {
    _0x28cf32 = _0x28cf32['split']('\x20')['map'](_0x557471 => parseInt(_0x557471));
    var _0x34a080 = _0x28cf32[0x0];
    var _0x292671 = _0x28cf32[0x1];
    var _0x17526f = 0x0;
    if (_0x34a080 === 0x1 && _0x292671 === 0x1)
        _0x17526f = 0x1;
    else if (_0x34a080 === 0x1 || _0x292671 === 0x1)
        _0x17526f = _0x34a080 + _0x292671 - 0x3;
    else
        _0x17526f = (_0x34a080 - 0x2) * (_0x292671 - 0x2);
    if (_0x17526f > 0x1ff973cafa8000) {
        _0x17526f = Math['floor']((_0x34a080 - 0x2) / 0x2710) * (_0x292671 - 0x2);
        tmp = (_0x34a080 - 0x2) % 0x2710 * (_0x292671 - 0x2);
        _0x17526f += Math['floor'](tmp / 0x2710);
        tmp = ('0000' + tmp % 0x2710)['slice'](-0x4);
        _0x17526f += tmp;
    }
    console['log'](_0x17526f);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));