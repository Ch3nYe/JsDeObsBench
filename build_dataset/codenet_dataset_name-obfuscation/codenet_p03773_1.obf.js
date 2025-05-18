process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x2a7c4b) {
    var _0x4559e0 = _0x2a7c4b['toString']()['split']('\x20');
    var _0x41c0fa = Number(_0x4559e0[0x0]);
    var _0x39bd4c = Number(_0x4559e0[0x1]);
    var _0x18153c = _0x39bd4c + _0x41c0fa;
    if (_0x18153c < 0x18) {
        console['log'](_0x18153c);
    } else {
        console['log'](_0x18153c - 0x18);
    }
});