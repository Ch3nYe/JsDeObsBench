function Main(input) {
    var rgQwJi = {
        'fFGOB': function (x, y) {
            return x - y;
        },
        'nUzLk': function (x, y) {
            return x == y;
        },
        'iVBOW': function (x, y) {
            return x == y;
        },
        'rREwH': function (x, y) {
            return x % y;
        },
        'mtydb': function (x, y) {
            return x == y;
        },
        'zxVRO': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x20')['map'](Number);
    if (rgQwJi['nUzLk'](input[0x0] % 0x2, 0x0) && rgQwJi['iVBOW'](rgQwJi['rREwH'](input[0x1], 0x2), 0x0) && rgQwJi['mtydb'](input[0x2] % 0x2, 0x0)) {
        console['log'](0x0);
    } else {
        input = input['sort'](function (a, b) {
            return rgQwJi['fFGOB'](a, b);
        });
        console['log'](rgQwJi['zxVRO'](input[0x1], input[0x0]));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());