function Main(input) {
    var VUhPbS = {
        'szkfa': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HwnDF': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'LiNgN': function (x, y) {
            return x == y;
        },
        'wwPVE': function (x, y) {
            return x == y;
        },
        'EsQlx': function (x, y) {
            return x < y;
        },
        'BMfSg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'RCLgk': function (x, y) {
            return x - y;
        },
        'azAHv': function (x, y) {
            return x < y;
        },
        'cwXTq': function (x, y) {
            return x >= y;
        },
        'lIJxT': function (x, y) {
            return x + y;
        },
        'QvGcW': function (x, y) {
            return x + y;
        },
        'brLED': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    var k = 0x0;
    while (0x1) {
        input[k] = input[k]['split']('\x20');
        var m = VUhPbS['szkfa'](parseInt, input[k][0x0], 0xa);
        var nmin = VUhPbS['HwnDF'](parseInt, input[k][0x1], 0xa);
        var nmax = parseInt(input[k++][0x2], 0xa);
        if (VUhPbS['LiNgN'](m, 0x0) && VUhPbS['LiNgN'](nmin, 0x0) && VUhPbS['wwPVE'](nmax, 0x0))
            break;
        var maxg = 0x0, maxn = 0x0;
        var p = [];
        for (var i = 0x0; VUhPbS['EsQlx'](i, m); i++)
            p[i] = VUhPbS['BMfSg'](parseInt, input[k++], 0xa);
        for (var i = VUhPbS['RCLgk'](nmin, 0x1); VUhPbS['azAHv'](i, nmax); i++) {
            if (VUhPbS['cwXTq'](p[i] - p[VUhPbS['lIJxT'](i, 0x1)], maxg)) {
                maxg = p[i] - p[VUhPbS['QvGcW'](i, 0x1)];
                maxn = i;
            }
        }
        console['log'](VUhPbS['brLED'](maxn, 0x1));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));