function Main(_0x452d0a) {
    var _0x3c4948 = _0x452d0a['split']('\x0a');
    var _0x3b3648 = _0x3c4948[0x0]['split']('\x20');
    var _0x52fd10 = _0x3b3648[0x0];
    var _0x132adb = _0x3b3648[0x1];
    var _0x21534f = _0x132adb * 0x2 + 0x1;
    var _0x1b5681 = Math['floor'](_0x52fd10 / _0x21534f);
    var _0x30ca8c = _0x52fd10 % _0x21534f;
    if (_0x30ca8c > 0x0)
        _0x1b5681 += 0x1;
    console['log'](_0x1b5681);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));