function Main(_0x28d83e) {
    _0x28d83e = _0x28d83e['split']('\x0a');
    var _0x5ed4f1 = parseInt(_0x28d83e[0x0]['split']('\x20')[0x0]);
    var _0x6d8c22 = parseInt(_0x28d83e[0x0]['split']('\x20')[0x1]);
    bans = new Array(0x32);
    all = new Array(0x32);
    bans[0x0] = 0x1;
    all[0x0] = 0x1;
    var _0x378d4a = 0x0;
    for (i = 0x1; i <= 0x32; i++) {
        bans[i] = bans[i - 0x1] * 0x2 + 0x1;
        all[i] = all[i - 0x1] * 0x2 + 0x3;
    }
    var _0x1c436e = all[_0x5ed4f1];
    var _0xd76fe3 = bans[_0x5ed4f1];
    var _0x3a45da = 0x0;
    if (_0x6d8c22 % 0x2 == 0x0) {
        _0x6d8c22 = all[_0x5ed4f1] - _0x6d8c22;
        _0x3a45da = 0x1;
    }
    while (_0x6d8c22 > 0x0) {
        if (_0x6d8c22 > (_0x1c436e - 0x1) / 0x2) {
            _0x6d8c22 = _0x6d8c22 - (_0x1c436e - 0x1) / 0x2 - 0x1;
            _0x378d4a = _0x378d4a + (_0xd76fe3 - 0x1) / 0x2 + 0x1;
            _0x1c436e = (_0x1c436e - 0x1) / 0x2 - 0x1;
            _0xd76fe3 = (_0xd76fe3 - 0x1) / 0x2;
        } else {
            _0x6d8c22 = _0x6d8c22 - 0x1;
            _0x1c436e = (_0x1c436e - 0x1) / 0x2 - 0x1;
            _0xd76fe3 = (_0xd76fe3 - 0x1) / 0x2;
        }
    }
    if (_0x3a45da == 0x1) {
        _0x378d4a = bans[_0x5ed4f1] - _0x378d4a;
    }
    console['log']('%s', _0x378d4a);
}
function debug() {
    var _0x5bc21f = document['getElementById']('input')['value'];
    Main(_0x5bc21f);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));