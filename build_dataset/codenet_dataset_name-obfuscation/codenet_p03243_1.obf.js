function myout(_0x14914d) {
    console['log'](_0x14914d);
}
function Main(_0x168ac0) {
    _0x168ac0 = parseInt(_0x168ac0['trim']());
    var _0x32fe10 = [
        0x0,
        0x6f,
        0xde,
        0x14d,
        0x1bc,
        0x22b,
        0x29a,
        0x309,
        0x378,
        0x3e7
    ];
    for (var _0x4544c0 = 0x0; _0x4544c0 < _0x32fe10['length'] - 0x1; _0x4544c0++) {
        if (_0x32fe10[_0x4544c0] < _0x168ac0 && _0x32fe10[_0x4544c0 + 0x1] > _0x168ac0) {
            myout(_0x32fe10[_0x4544c0 + 0x1]);
            return;
        } else if (_0x32fe10[_0x4544c0] == _0x168ac0) {
            myout(_0x32fe10[_0x4544c0]);
            return;
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));