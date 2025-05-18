function Main(s) {
    var MJihFD = {
        'yFDus': function (x, y) {
            return x <= y;
        },
        'uwTsX': function (x, y) {
            return x < y;
        },
        'xrlql': function (x, y) {
            return x >= y;
        },
        'byGpR': function (x, y) {
            return x + y;
        },
        'wNuio': function (x, y) {
            return x + y;
        },
        'HOyaq': function (x, y) {
            return x >= y;
        },
        'yRoMP': function (x, y) {
            return x - y;
        }
    };
    var TUwsHz = '6|1|4|2|5|7|3|0'['split']('|');
    var ThUvVv = 0x0;
    while (!![]) {
        switch (TUwsHz[ThUvVv++]) {
        case '0':
            loop:
                while (MJihFD['yFDus'](a, 0x7a)) {
                    a++;
                    var n = s['indexOf'](String['fromCharCode'](a));
                    while (n !== -0x1) {
                        for (j = 0x0; MJihFD['uwTsX'](j, k); j++) {
                            if (MJihFD['xrlql'](MJihFD['byGpR'](n, j), sl))
                                break;
                            ans[s['slice'](n, MJihFD['byGpR'](MJihFD['byGpR'](n, j), 0x1))] = 0x1;
                        }
                        n = s['indexOf'](String['fromCharCode'](a), MJihFD['wNuio'](n, 0x1));
                    }
                    j = 0x0;
                    var ans2 = [];
                    for (i in ans) {
                        j++;
                        ans2['push'](i);
                    }
                    if (MJihFD['HOyaq'](j, k)) {
                        ans2['sort']();
                        console['log'](ans2[MJihFD['yRoMP'](k, 0x1)]);
                        break loop;
                    }
                }
            continue;
        case '1':
            var k = +s[0x1];
            continue;
        case '2':
            var a = 0x60;
            continue;
        case '3':
            var j;
            continue;
        case '4':
            s = s[0x0];
            continue;
        case '5':
            var sl = s['length'];
            continue;
        case '6':
            s = s['split']('\x0a');
            continue;
        case '7':
            var ans = {};
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));