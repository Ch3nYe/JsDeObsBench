var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x1421ab) {
    input += _0x1421ab;
});
process['stdin']['on']('end', function () {
    var _0x4c5c69 = input['split']('\x0a');
    var _0x245f8a = '';
    for (var _0xfeed3f = 0x0; _0xfeed3f < _0x4c5c69['length']; _0xfeed3f++) {
        _0x4c5c69[_0xfeed3f] = Number(_0x4c5c69[_0xfeed3f]);
        if (_0x4c5c69[_0xfeed3f] == 0x0) {
            break;
        }
        _0x245f8a += 'Case\x20' + (_0xfeed3f + 0x1) + ':\x20' + _0x4c5c69[_0xfeed3f] + '\x0a';
    }
    console['log'](_0x245f8a);
});