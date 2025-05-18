function Main(input) {
    var xjJOfU = {
        'sOeOC': '10|2|12|13|7|3|9|0|8|1|6|4|11|5',
        'usPps': function (x, y) {
            return x < y;
        },
        'wyqwH': function (x, y) {
            return x + y;
        },
        'rvmSv': function (x, y) {
            return x <= y;
        },
        'XtpSc': function (x, y) {
            return x - y;
        },
        'oRxsn': function (x, y) {
            return x + y;
        },
        'YAajS': function (x, y) {
            return x * y;
        },
        'LoDVW': function (x, y) {
            return x + y;
        },
        'zNgWK': function (x, y) {
            return x - y;
        }
    };
    var dvbuCV = xjJOfU['sOeOC']['split']('|');
    var QVYPqf = 0x0;
    while (!![]) {
        switch (dvbuCV[QVYPqf++]) {
        case '0':
            for (var i = 0x0; i < H; i++) {
                A = input[i + 0x1]['split']('\x20')['map'](a => parseInt(a));
                for (var j = 0x0; xjJOfU['usPps'](j, W); j++) {
                    x[A[j]][0x0] = i;
                    x[A[j]][0x1] = j;
                }
            }
            continue;
        case '1':
            for (i = xjJOfU['wyqwH'](D, 0x1); xjJOfU['rvmSv'](i, H * W); i++) {
                y[i] = xjJOfU['wyqwH'](xjJOfU['wyqwH'](y[i - D], Math['abs'](xjJOfU['XtpSc'](x[xjJOfU['XtpSc'](i, D)][0x0], x[i][0x0]))), Math['abs'](x[xjJOfU['XtpSc'](i, D)][0x1] - x[i][0x1]));
            }
            continue;
        case '2':
            var H = input[0x0]['split']('\x20')['map'](a => parseInt(a));
            continue;
        case '3':
            var A;
            continue;
        case '4':
            var ans = new Array(Q)['fill'](0x0);
            continue;
        case '5':
            console['log'](ans['join']('\x0a'));
            continue;
        case '6':
            var Q = parseInt(input[xjJOfU['oRxsn'](H, 0x1)]);
            continue;
        case '7':
            H = H[0x0];
            continue;
        case '8':
            var y = new Array(xjJOfU['YAajS'](H, W) + 0x1)['fill'](0x0);
            continue;
        case '9':
            var x = new Array(xjJOfU['LoDVW'](xjJOfU['YAajS'](H, W), 0x1))['fill'](0x0)['map'](a => new Array(0x2));
            continue;
        case '10':
            input = input['split']('\x0a');
            continue;
        case '11':
            for (i = 0x0; xjJOfU['usPps'](i, Q); i++) {
                var L = input[xjJOfU['LoDVW'](H + 0x2, i)]['split']('\x20')['map'](a => parseInt(a));
                var R = L[0x1];
                L = L[0x0];
                ans[i] = xjJOfU['zNgWK'](y[R], y[L]);
            }
            continue;
        case '12':
            var W = H[0x1];
            continue;
        case '13':
            var D = H[0x2];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));