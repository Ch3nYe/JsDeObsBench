function Main(_0x26d01d) {
    var _0x38c5a9 = 0x0;
    _0x38c5a9 += Math['floor'](_0x26d01d / 0x1f4) * 0x3e8;
    _0x38c5a9 += Math['floor'](_0x26d01d % 0x1f4 / 0x5) * 0x5;
    console['log'](_0x38c5a9);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));