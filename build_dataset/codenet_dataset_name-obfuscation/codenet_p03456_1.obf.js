function Main(_0x58af27) {
    var _0x345af7 = _0x58af27['split']('\x20');
    var _0xbd758b = _0x345af7[0x0];
    var _0x5dd716 = _0x345af7[0x1];
    var _0x3d10be = parseInt(_0xbd758b + _0x5dd716);
    var _0x4937fb = Math['floor'](Math['sqrt'](_0x3d10be));
    _0x4937fb * _0x4937fb === _0x3d10be ? console['log']('Yes') : console['log']('No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));