process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var n = -0x1, i = function (d) {
        return Math['pow'](0xa, ~~d);
    }, l, p, c, r, o, a, b, am, bm, d;
process['stdin']['on']('data', function (ip) {
    var nFzHXZ = {
        'UDemT': function (x, y) {
            return x < y;
        },
        'TfMXJ': function (x, y) {
            return x + y;
        },
        'BRPHv': function (x, y) {
            return x - y;
        },
        'umYYn': function (callee, param1) {
            return callee(param1);
        },
        'OWEHF': function (callee, param1) {
            return callee(param1);
        },
        'ZZdOl': function (x, y) {
            return x == y;
        },
        'ImPLC': function (x, y) {
            return x + y;
        },
        'Flktj': function (x, y) {
            return x * y;
        },
        'rSkWy': function (x, y) {
            return x + y;
        }
    };
    p = ip['split']('\x0a');
    l = ~~p[0x0];
    for (c = 0x0; nFzHXZ['UDemT'](c, l); ++c) {
        r = [], o = p[nFzHXZ['TfMXJ'](c, 0x1)]['split']('\x20'), d = 0x0;
        for (a = i(o[0x0] - 0x1), am = nFzHXZ['BRPHv'](i(o[0x0]), 0x1); a < am; ++a)
            for (b = nFzHXZ['umYYn'](i, o[0x1] - 0x1), bm = nFzHXZ['OWEHF'](i, o[0x1]) - 0x1; b < bm; ++b)
                nFzHXZ['ZZdOl'](nFzHXZ['TfMXJ'](nFzHXZ['ImPLC'](nFzHXZ['Flktj'](b, b), b) - nFzHXZ['Flktj'](a, a), a) / 0x2, nFzHXZ['TfMXJ']('', a) + b) && (console['log'](nFzHXZ['TfMXJ'](nFzHXZ['rSkWy'](a, '\x20'), b)), ++d);
        d || console['log']('No\x20cats.');
    }
});