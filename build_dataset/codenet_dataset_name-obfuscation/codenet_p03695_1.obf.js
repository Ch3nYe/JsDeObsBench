process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var g_input = '';
process['stdin']['on']('data', function (_0x5af855) {
    g_input += _0x5af855;
});
process['stdin']['on']('end', function () {
    main(g_input['split'](/\r?\n/));
});
function main(_0x4e12ed) {
    var _0xab66df = parseInt(_0x4e12ed[0x0]);
    var _0xf5b7c5 = _0x4e12ed[0x1]['split']('\x20')['map'](function (_0x23f956) {
        return parseInt(_0x23f956);
    });
    var _0x2c64d2 = new Array(0x7)['fill'](![]);
    var _0x286ee6 = 0x0;
    var _0x5cc7fc = 0x0;
    for (var _0xaa9334 = 0x0; _0xaa9334 < _0xab66df; _0xaa9334++) {
        for (var _0x410d71 = 0x0; _0x410d71 < 0x9; _0x410d71++) {
            if (_0x410d71 != 0x8) {
                if (_0xf5b7c5[_0xaa9334] < (_0x410d71 + 0x1) * 0x190) {
                    if (!_0x2c64d2[_0x410d71]) {
                        _0x2c64d2[_0x410d71] = !![];
                        _0x5cc7fc += 0x1;
                    }
                    break;
                }
            } else {
                _0x286ee6 += 0x1;
            }
        }
    }
    var _0x49acb6 = _0x5cc7fc;
    if (_0x49acb6 == 0x0 && _0xab66df > 0x0) {
        _0x49acb6 = 0x1;
        if (_0x286ee6 > 0x0) {
            _0x286ee6 -= 0x1;
        }
    }
    var _0x2ac681 = Math['min'](0x8, _0x49acb6 + _0x286ee6);
    console['log']('' + _0x49acb6 + '\x20' + _0x2ac681);
}