function Main(input) {
    var OKuHuS = {
        'mIMpZ': '7|13|5|15|12|9|4|8|0|11|14|1|3|10|2|6',
        'PlQOi': function (x, y) {
            return x == y;
        },
        'VkTDB': function (x, y) {
            return x * y;
        },
        'gKzKt': function (x, y) {
            return x == y;
        },
        'MyrSa': function (x, y) {
            return x == y;
        },
        'BRmuP': function (x, y) {
            return x + y;
        },
        'HBxIv': function (x, y) {
            return x - y;
        },
        'WAJAI': function (x, y) {
            return x * y;
        },
        'bZqwP': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var CKDIpv = OKuHuS['mIMpZ']['split']('|');
    var bBstlK = 0x0;
    while (!![]) {
        switch (CKDIpv[bBstlK++]) {
        case '0':
            if (Math['floor'](x_u * tax) == n) {
                console['log'](x_u);
                return;
            }
            continue;
        case '1':
            var x_d = x - 0x1;
            continue;
        case '2':
            if (OKuHuS['PlQOi'](Math['floor'](OKuHuS['VkTDB'](x_d, tax)), n)) {
                console['log'](x_d);
                return;
            }
            continue;
        case '3':
            if (OKuHuS['gKzKt'](Math['floor'](x_d * tax), n)) {
                console['log'](x_d);
                return;
            }
            continue;
        case '4':
            if (OKuHuS['MyrSa'](n, reverse_n)) {
                console['log'](x);
                return;
            }
            continue;
        case '5':
            var input = input['split']('\x0a');
            continue;
        case '6':
            console['log'](invalid);
            continue;
        case '7':
            var tax = 1.08;
            continue;
        case '8':
            var x_u = OKuHuS['BRmuP'](x, 0x1);
            continue;
        case '9':
            var reverse_n = Math['floor'](OKuHuS['VkTDB'](x, tax));
            continue;
        case '10':
            var x_d = OKuHuS['HBxIv'](x, 0x2);
            continue;
        case '11':
            var x_u2 = x + 0x2;
            continue;
        case '12':
            var x = Math['floor'](n / tax);
            continue;
        case '13':
            var invalid = ':(';
            continue;
        case '14':
            if (Math['floor'](OKuHuS['WAJAI'](x_u2, tax)) == n) {
                console['log'](x_u2);
                return;
            }
            continue;
        case '15':
            var n = OKuHuS['bZqwP'](parseInt, input[0x0], 0xa);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));