function Main(_0x3218b9) {
    var _0x3218b9 = _0x3218b9['split']('\x20');
    var _0x4122f0 = Number(_0x3218b9[0x0]);
    var _0x5bc108 = Number(_0x3218b9[0x1]);
    if (_0x4122f0 > 0x9 || _0x5bc108 > 0x9) {
        console['log'](-0x1);
        return;
    }
    var _0x38ee0b = _0x4122f0 * _0x5bc108;
    console['log'](_0x38ee0b);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));