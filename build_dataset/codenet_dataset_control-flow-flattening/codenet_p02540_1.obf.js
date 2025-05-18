function Main(input) {
    var TRuOiB = {
        'QUtww': function (x, y) {
            return x <= y;
        },
        'cydKA': function (x, y) {
            return x < y;
        },
        'aslXH': function (x, y) {
            return x > y;
        },
        'BIJIv': function (x, y) {
            return x > y;
        },
        'vBKde': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'HjWbU': function (x, y) {
            return x < y;
        },
        'OBNcP': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    const N = parseInt(input[0x0], 0xa);
    var x = [];
    var y = [];
    for (var i = 0x1; TRuOiB['QUtww'](i, N); i++) {
        tmp = input[i]['split']('\x20')['map'](n => parseInt(n, 0xa));
        x['push'](tmp[0x0]);
        y['push'](tmp[0x1]);
    }
    var counts = [];
    for (var j = 0x0; TRuOiB['cydKA'](j, N); j++) {
        var count = 0x0;
        for (var k = 0x0; k < N; k++) {
            if (TRuOiB['aslXH'](x[j], x[k]) && TRuOiB['BIJIv'](y[j], y[k]) || TRuOiB['cydKA'](x[j], x[k]) && TRuOiB['cydKA'](y[j], y[k])) {
                count++;
            }
        }
        counts['push'](TRuOiB['vBKde'](parseInt, count, 0xa));
    }
    for (var j = 0x0; j < N; j++) {
        var count = 0x1;
        for (var k = 0x0; k < N; k++) {
            if (TRuOiB['BIJIv'](x[j], x[k]) && TRuOiB['BIJIv'](y[j], y[k]) || TRuOiB['HjWbU'](x[j], x[k]) && TRuOiB['HjWbU'](y[j], y[k])) {
                count = TRuOiB['OBNcP'](count, counts[k]);
            }
        }
        console['log'](count);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));