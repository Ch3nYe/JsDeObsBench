function Main(input) {
    var YYrzau = {
        'iuCaj': '6|2|8|4|0|1|5|7|3|9',
        'qkpwc': function (x, y) {
            return x == y;
        },
        'kIsrs': function (x, y) {
            return x % y;
        },
        'kvCnh': function (x, y) {
            return x < y;
        },
        'dxpbE': function (x, y) {
            return x - y;
        }
    };
    var UcwFPI = YYrzau['iuCaj']['split']('|');
    var GvPZQh = 0x0;
    while (!![]) {
        switch (UcwFPI[GvPZQh++]) {
        case '0':
            input['sort'](function (a, b) {
                return KKlmHb['GJuhu'](a, b);
            });
            continue;
        case '1':
            var sum = 0x0;
            continue;
        case '2':
            input = input['trim']()['split']('\x0a')['map'](input => Number(input));
            continue;
        case '3':
            while (YYrzau['qkpwc'](YYrzau['kIsrs'](sum, 0xa), 0x0) && sum != 0x0) {
                sum -= input[count];
                count++;
            }
            continue;
        case '4':
            input['shift']();
            continue;
        case '5':
            for (var i = 0x0; YYrzau['kvCnh'](i, input['length']); i++) {
                sum += input[i];
            }
            continue;
        case '6':
            var KKlmHb = {
                'GJuhu': function (x, y) {
                    return YYrzau['dxpbE'](x, y);
                }
            };
            continue;
        case '7':
            var count = 0x0;
            continue;
        case '8':
            var len = input[0x0];
            continue;
        case '9':
            console['log'](sum);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));