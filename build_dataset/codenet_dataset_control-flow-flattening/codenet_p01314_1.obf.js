function Main(input) {
    var jPUYqN = {
        'nezPG': function (x, y) {
            return x == y;
        },
        'hQEgR': function (x, y) {
            return x < y;
        },
        'ZEwkc': function (x, y) {
            return x > y;
        },
        'HXKTb': function (x, y) {
            return x - y;
        },
        'AIZuO': function (x, y) {
            return x / y;
        },
        'RZMzr': function (x, y) {
            return x * y;
        },
        'UkoQQ': function (x, y) {
            return x - y;
        },
        'ETLrK': function (x, y) {
            return x == y;
        },
        'tRHoc': function (x, y) {
            return x - y;
        },
        'kmsfU': function (x, y) {
            return x / y;
        }
    };
    input = input['split']('\x0a');
    for (var i = 0x0; 0x1; i++) {
        var n = parseInt(input[i], 0xa);
        var ans = 0x0;
        if (jPUYqN['nezPG'](n, 0x0))
            break;
        for (var j = 0x2; jPUYqN['hQEgR'](j, n); j++) {
            if (jPUYqN['ZEwkc'](jPUYqN['HXKTb'](n, jPUYqN['AIZuO'](jPUYqN['RZMzr'](j, jPUYqN['UkoQQ'](j, 0x1)), 0x2)), 0x0) && jPUYqN['ETLrK'](jPUYqN['tRHoc'](n, jPUYqN['kmsfU'](j * jPUYqN['UkoQQ'](j, 0x1), 0x2)) % j, 0x0)) {
                ans++;
            }
        }
        console['log'](ans);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));