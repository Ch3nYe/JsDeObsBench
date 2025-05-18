function Main(input) {
    var LFNSfW = {
        'HSdNB': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'zwhkd': function (x, y) {
            return x < y;
        },
        'uAuxR': function (x, y) {
            return x >= y;
        },
        'AqjMD': function (x, y) {
            return x - y;
        },
        'WsQoS': function (x, y) {
            return x - y;
        }
    };
    var toFXJc = '2|1|0|6|7|4|5|3|8'['split']('|');
    var TMqpDn = 0x0;
    while (!![]) {
        switch (toFXJc[TMqpDn++]) {
        case '0':
            var x = LFNSfW['HSdNB'](parseInt, input[0x0][0x1], 0xa);
            continue;
        case '1':
            var N = LFNSfW['HSdNB'](parseInt, input[0x0][0x0], 0xa);
            continue;
        case '2':
            input = input['trim']()['split']('\x0a')['map'](function (x) {
                return x['split']('\x20');
            });
            continue;
        case '3':
            for (var i = 0x0; LFNSfW['zwhkd'](i, N); i++) {
                if (LFNSfW['uAuxR'](vec_a[i], x - tmp))
                    vec_b['push'](LFNSfW['AqjMD'](x, tmp));
                else
                    vec_b['push'](vec_a[i]);
                tmp = vec_b[i];
            }
            continue;
        case '4':
            var vec_b = [];
            continue;
        case '5':
            var tmp = 0x0;
            continue;
        case '6':
            var vec_a = input[0x1]['map'](e => parseInt(e, 0xa));
            continue;
        case '7':
            var sum = function (arr) {
                var sum = 0x0;
                arr['forEach'](function (elm) {
                    sum += elm;
                });
                return sum;
            };
            continue;
        case '8':
            console['log'](LFNSfW['WsQoS'](sum(vec_a), sum(vec_b)));
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));