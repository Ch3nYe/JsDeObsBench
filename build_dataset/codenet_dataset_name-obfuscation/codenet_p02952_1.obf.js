function keta(_0x5c402e) {
    for (var _0x1bdf7e = 0x1; _0x1bdf7e <= 0x6; _0x1bdf7e++) {
        if (_0x5c402e < 0xa ** _0x1bdf7e)
            return _0x1bdf7e % 0x2;
    }
}
function Main(_0x22fcb4) {
    var _0x866155 = 0x0;
    var _0x455c43 = 0x1;
    while (_0x455c43 <= _0x22fcb4) {
        _0x866155 += keta(_0x455c43);
        _0x455c43++;
    }
    console['log'](_0x866155);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));