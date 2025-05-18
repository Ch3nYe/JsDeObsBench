function main(input) {
    var MnMiRy = {
        'snBjq': function (x, y) {
            return x - y;
        },
        'TRGQd': function (x, y) {
            return x <= y;
        },
        'sIvZb': function (x, y) {
            return x < y;
        },
        'gfnkP': function (x, y) {
            return x > y;
        },
        'PmBlK': function (x, y) {
            return x / y;
        },
        'trEgH': function (x, y) {
            return x + y;
        },
        'HccfU': function (x, y) {
            return x * y;
        },
        'bghCM': function (x, y) {
            return x * y;
        }
    };
    var N = input[0x0]['split']('\x20')[0x0] - 0x0;
    var D = MnMiRy['snBjq'](input[0x0]['split']('\x20')[0x1], 0x0);
    var A = MnMiRy['snBjq'](input[0x0]['split']('\x20')[0x2], 0x0);
    var list = [];
    for (var i = 0x1; MnMiRy['TRGQd'](i, N); i++) {
        list['push'](input[i]['split']('\x20')['map'](v => v - 0x0));
    }
    list = list['sort']((a, b) => a[0x0] - b[0x0]);
    var ans = 0x0;
    for (var i = 0x0; MnMiRy['sIvZb'](i, N); i++) {
        var x = list[i];
        if (MnMiRy['gfnkP'](x[0x1], 0x0)) {
            var time = Math['ceil'](MnMiRy['PmBlK'](x[0x1], A));
            ans += time;
            for (var j = i; MnMiRy['sIvZb'](j, N); j++) {
                var y = list[j];
                if (MnMiRy['TRGQd'](y[0x0], MnMiRy['trEgH'](x[0x0], MnMiRy['HccfU'](D, 0x2)) + 0x1)) {
                    y[0x1] -= MnMiRy['bghCM'](A, time);
                } else {
                    break;
                }
            }
        }
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));