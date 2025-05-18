process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x2f818a) {
    var _0x1b319e = _0x2f818a['trim']()['split']('\x0a');
    function _0x3c9512(_0x550d7f) {
        var _0x477872 = _0x550d7f['split']('\x20');
        var _0x5c8287 = parseInt(_0x477872[0x0]) + parseInt(_0x477872[0x1]);
        return _0x5c8287['toString']()['length'];
    }
    console['log'](_0x1b319e['map'](_0x3c9512)['join']('\x0a'));
});