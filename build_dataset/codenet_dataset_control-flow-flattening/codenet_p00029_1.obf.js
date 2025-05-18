process['stdin']['on']('data', function (c, o, m) {
    var sxHEmk = {
        'WfOIo': function (x, y) {
            return x < y;
        },
        'qEkJB': function (x, y) {
            return x + y;
        },
        'xbmPQ': function (x, y) {
            return x + y;
        }
    };
    o = {}, n = 0x0, s = '';
    sxHEmk['qEkJB'](c, '')['trim']()['split']('\x20')['some'](function (a) {
        sxHEmk['WfOIo'](n, o[a = a['toLowerCase']()] ? ++o[a] : o[a] = 0x1) && (n = o[m = a]);
        sxHEmk['WfOIo'](s['length'], a['length']) && (s = a);
    });
    console['log'](sxHEmk['qEkJB'](sxHEmk['xbmPQ'](m, '\x20'), s));
})['resume']();