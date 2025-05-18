Main(function (_0x2ea6c7) {
    _0x2ea6c7 = _0x2ea6c7['trim']()['split']('\x0a');
    _0x2ea6c7['shift']();
    _0x2ea6c7['forEach'](function (_0x2d7838) {
        var _0x184584 = _0x2d7838['split']('\x20');
        var _0x5e57dd = +_0x184584[0x0];
        var _0x92ec8d = +_0x184584[0x1];
        var _0x58a228 = +_0x184584[0x2];
        var _0x505ad4 = 0x0;
        var _0xc3a75d;
        _0xc3a75d = Math['min'](_0x5e57dd, _0x92ec8d, _0x58a228);
        _0x5e57dd -= _0xc3a75d;
        _0x92ec8d -= _0xc3a75d;
        _0x58a228 -= _0xc3a75d;
        _0x505ad4 += _0xc3a75d;
        _0xc3a75d = Math['min'](Math['floor'](_0x5e57dd / 0x2), _0x92ec8d);
        _0x5e57dd -= _0xc3a75d * 0x2;
        _0x92ec8d -= _0xc3a75d;
        _0x505ad4 += _0xc3a75d;
        _0x505ad4 += Math['floor'](_0x5e57dd / 0x3);
        console['log'](_0x505ad4);
    });
});
function Main(_0xa1165f) {
    var _0x28d624 = '';
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', function (_0x5a1a46) {
        _0x28d624 += _0x5a1a46;
    });
    process['stdin']['on']('end', function () {
        _0xa1165f(_0x28d624);
    });
}
;