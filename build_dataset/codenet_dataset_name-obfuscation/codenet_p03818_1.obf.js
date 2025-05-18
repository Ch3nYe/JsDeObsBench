function Main(_0x2842c5) {
    var _0x4746a3 = _0x2842c5['split']('\x0a')[0x0];
    var _0x56b9b1 = _0x2842c5['split']('\x0a')[0x1]['split']('\x20');
    _0x56b9b1['sort'](function (_0x394840, _0x13c5f2) {
        return parseInt(_0x394840) - parseInt(_0x13c5f2);
    });
    var _0x49adb3 = _0x56b9b1['filter'](function (_0x13225a, _0x1d2d34, _0x274ec8) {
        return _0x274ec8['indexOf'](_0x13225a) === _0x1d2d34;
    });
    if (_0x49adb3['length'] % 0x2 == 0x1) {
        console['log'](_0x49adb3['length']);
    } else {
        console['log'](_0x49adb3['length'] - 0x1);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));