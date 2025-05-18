function a0_0x313a(pIrSxz, key) {
    var stringArray = a0_0x418c();
    a0_0x313a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x313a(pIrSxz, key);
}
var a0_0x1b97b1 = a0_0x313a;
process[a0_0x1b97b1(0x0)][a0_0x1b97b1(0x1)]();
process['stdin']['setEncoding']('utf8');
function a0_0x418c() {
    var _0x21400a = [
        'stdin',
        'resume',
        'pow',
        'data',
        'split',
        'log',
        'No\x20cats.'
    ];
    a0_0x418c = function () {
        return _0x21400a;
    };
    return a0_0x418c();
}
var n = -0x1, i = function (d) {
        var _0xee6016 = a0_0x313a;
        return Math[_0xee6016(0x2)](0xa, ~~d);
    }, l, p, c, r, o, a, b, am, bm, d;
process[a0_0x1b97b1(0x0)]['on'](a0_0x1b97b1(0x3), function (ip) {
    var _0x424beb = a0_0x313a;
    p = ip[_0x424beb(0x4)]('\x0a');
    l = ~~p[0x0];
    for (c = 0x0; c < l; ++c) {
        r = [], o = p[c + 0x1][_0x424beb(0x4)]('\x20'), d = 0x0;
        for (a = i(o[0x0] - 0x1), am = i(o[0x0]) - 0x1; a < am; ++a)
            for (b = i(o[0x1] - 0x1), bm = i(o[0x1]) - 0x1; b < bm; ++b)
                (b * b + b - a * a + a) / 0x2 == '' + a + b && (console[_0x424beb(0x5)](a + '\x20' + b), ++d);
        d || console[_0x424beb(0x5)](_0x424beb(0x6));
    }
});