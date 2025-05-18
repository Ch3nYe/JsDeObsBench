'use strict';
function Main(input) {
    var IGkDfl = {
        'SAATq': function (x, y) {
            return x - y;
        },
        'SKQup': function (x, y) {
            return x < y;
        },
        'AicJF': function (x, y) {
            return x % y;
        }
    };
    var lines = input['split']('\x0a');
    var N = lines['shift']() - 0x0;
    var ryo = new Array(N);
    for (var n = 0x0; IGkDfl['SKQup'](n, N); n++) {
        var nums = lines[n]['split']('\x20');
        ryo[n] = {
            'taka': IGkDfl['SAATq'](nums[0x0], 0x0),
            'aoki': IGkDfl['SAATq'](nums[0x1], 0x0)
        };
        ryo[n]['sa'] = ryo[n]['aoki'] - ryo[n]['taka'];
    }
    ryo['sort'](function (a, b) {
        return b['sa'] - a['sa'];
    });
    ryo['sort'](function (a, b) {
        return IGkDfl['SAATq'](b['taka'], a['taka']);
    });
    var koufuku = 0x0;
    for (var n = 0x0; IGkDfl['SKQup'](n, N); n++) {
        if (IGkDfl['AicJF'](n, 0x2) == 0x0) {
            koufuku += ryo[n]['taka'];
            ryo[n]['taka'] = 0x0;
        } else {
            koufuku -= ryo[n]['aoki'];
            ryo[n]['aoki'] = 0x0;
        }
    }
    console['log'](koufuku);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));