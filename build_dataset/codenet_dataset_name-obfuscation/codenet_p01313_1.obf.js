process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var n = -0x1, i = function (_0x40f54f) {
        return Math['pow'](0xa, ~~_0x40f54f);
    }, l, p, c, r, o, a, b, am, bm, d;
process['stdin']['on']('data', function (_0x41ac6f) {
    p = _0x41ac6f['split']('\x0a');
    l = ~~p[0x0];
    for (c = 0x0; c < l; ++c) {
        r = [], o = p[c + 0x1]['split']('\x20'), d = 0x0;
        for (a = i(o[0x0] - 0x1), am = i(o[0x0]) - 0x1; a < am; ++a)
            for (b = i(o[0x1] - 0x1), bm = i(o[0x1]) - 0x1; b < bm; ++b)
                (b * b + b - a * a + a) / 0x2 == '' + a + b && (console['log'](a + '\x20' + b), ++d);
        d || console['log']('No\x20cats.');
    }
});