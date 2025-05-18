process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(_0x63656) {
    var _0x3b93e4 = _0x63656['split']('\x0a');
    var _0x50aa7a = Number(_0x3b93e4[0x0]);
    var _0x3f99d4 = 0x1;
    for (var _0x22c886 = 0x1; _0x22c886 <= _0x50aa7a; _0x22c886++) {
        _0x3f99d4 *= _0x22c886;
        _0x3f99d4 %= 0x3b9aca07;
    }
    console['log'](_0x3f99d4);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));