function Main(_0x3caa11) {
    var _0x1bcd37 = _0x3caa11['split']('\x0a')[0x0]['split']('\x20')[0x0] - 0x0;
    var _0x476940 = _0x3caa11['split']('\x0a')[0x0]['split']('\x20')[0x1] - 0x0;
    if (_0x1bcd37 < _0x476940) {
        console['log'](_0x1bcd37['toString']()['repeat'](_0x476940));
    } else {
        console['log'](_0x476940['toString']()['repeat'](_0x1bcd37));
    }
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));