function Main(_0x9d840e) {
    var _0x1d1a4b = 1.08;
    var _0x339814 = ':(';
    var _0x9d840e = _0x9d840e['split']('\x0a');
    var _0xb8bcc3 = parseInt(_0x9d840e[0x0], 0xa);
    var _0x3cf200 = Math['floor'](_0xb8bcc3 / _0x1d1a4b);
    var _0x103e75 = Math['floor'](_0x3cf200 * _0x1d1a4b);
    if (_0xb8bcc3 == _0x103e75) {
        console['log'](_0x3cf200);
        return;
    }
    var _0x17b7fd = _0x3cf200 + 0x1;
    if (Math['floor'](_0x17b7fd * _0x1d1a4b) == _0xb8bcc3) {
        console['log'](_0x17b7fd);
        return;
    }
    var _0x3bfa8f = _0x3cf200 + 0x2;
    if (Math['floor'](_0x3bfa8f * _0x1d1a4b) == _0xb8bcc3) {
        console['log'](_0x3bfa8f);
        return;
    }
    var _0x55f102 = _0x3cf200 - 0x1;
    if (Math['floor'](_0x55f102 * _0x1d1a4b) == _0xb8bcc3) {
        console['log'](_0x55f102);
        return;
    }
    var _0x55f102 = _0x3cf200 - 0x2;
    if (Math['floor'](_0x55f102 * _0x1d1a4b) == _0xb8bcc3) {
        console['log'](_0x55f102);
        return;
    }
    console['log'](_0x339814);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));