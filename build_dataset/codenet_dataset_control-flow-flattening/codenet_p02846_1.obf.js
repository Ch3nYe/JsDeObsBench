function Main(input) {
    var JTXEIJ = {
        'iekaf': '10|7|2|3|9|11|5|4|8|1|0|12|6',
        'jJZoB': function (x, y) {
            return x - y;
        },
        'lpufP': function (x, y) {
            return x * y;
        },
        'grBrW': function (x, y) {
            return x - y;
        },
        'esuwE': function (x, y) {
            return x * y;
        },
        'WuhQe': function (x, y) {
            return x == y;
        },
        'LFKCm': 'infinity',
        'jfmVA': function (x, y) {
            return x < y;
        },
        'YHdUX': function (x, y) {
            return x % y;
        },
        'FdylB': function (callee, param1) {
            return callee(param1);
        }
    };
    var FRttCO = JTXEIJ['iekaf']['split']('|');
    var VvTqoI = 0x0;
    while (!![]) {
        switch (FRttCO[VvTqoI++]) {
        case '0':
            var pm = 0x0;
            continue;
        case '1':
            var xmae = 0x1;
            continue;
        case '2':
            var A = input[0x1]['split']('\x20');
            continue;
        case '3':
            var B = input[0x2]['split']('\x20');
            continue;
        case '4':
            sa[0x1] = JTXEIJ['jJZoB'](T[0x1] * A[0x1], JTXEIJ['lpufP'](T[0x1], B[0x1]));
            continue;
        case '5':
            sa[0x0] = JTXEIJ['grBrW'](JTXEIJ['esuwE'](T[0x0], A[0x0]), JTXEIJ['esuwE'](T[0x0], B[0x0]));
            continue;
        case '6':
            if (JTXEIJ['WuhQe'](sa[0x0], sa[0x1] * -0x1)) {
                console['log'](JTXEIJ['LFKCm']);
            } else {
                for (var i = 0x0; JTXEIJ['jfmVA'](i, 0x1); i) {
                    count++;
                    xmae = x;
                    x += sa[JTXEIJ['YHdUX'](count, 0x2)];
                    if (x * xmae > 0x0) {
                        i = 0x1;
                    } else if (JTXEIJ['WuhQe'](x, 0x0)) {
                        i = 0x1;
                        count++;
                    }
                }
                console['log'](count - 0x1);
            }
            continue;
        case '7':
            var T = input[0x0]['split']('\x20');
            continue;
        case '8':
            var x = 0x0;
            continue;
        case '9':
            for (var i = 0x0; i < 0x2; i++) {
                T[i] = Number(T[i]);
                A[i] = JTXEIJ['FdylB'](Number, A[i]);
                B[i] = Number(B[i]);
            }
            continue;
        case '10':
            input = input['split']('\x0a');
            continue;
        case '11':
            var sa = new Array(0x2);
            continue;
        case '12':
            var count = -0x1;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));