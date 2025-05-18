r = '.IVXLCDM', require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a')['map'](function (i) {
    var lRBwBl = {
        'hfytq': function (x, y) {
            return x / y;
        },
        'KhWIU': function (x, y) {
            return x - y;
        },
        'qZrKF': function (x, y) {
            return x % y;
        },
        'QmfwR': function (x, y) {
            return x > y;
        }
    };
    i ? (n = s = p = 0x0, i['split']('')['map'](function (c) {
        n = Math['pow'](0xa, ~~lRBwBl['hfytq'](n = r['indexOf'](c), 0x2)) / lRBwBl['KhWIU'](0x2, lRBwBl['qZrKF'](n, 0x2)), lRBwBl['QmfwR'](n, p) ? s -= p * 0x2 : 0x0, s += n, p = n;
    }), console['log'](s)) : 0x0;
});