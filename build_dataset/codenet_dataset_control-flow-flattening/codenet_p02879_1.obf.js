function Main(input) {
    var gLGYTl = {
        'AAgAd': '2|4|5|0|1|3',
        'iIBCD': function (x, y) {
            return x > y;
        },
        'RDvlE': function (x, y) {
            return x * y;
        },
        'FtYiV': function (callee, param1) {
            return callee(param1);
        }
    };
    var XcVdJJ = gLGYTl['AAgAd']['split']('|');
    var zKXwGH = 0x0;
    while (!![]) {
        switch (XcVdJJ[zKXwGH++]) {
        case '0':
            if (gLGYTl['iIBCD'](a, 0x9) || gLGYTl['iIBCD'](b, 0x9)) {
                console['log'](-0x1);
                return;
            }
            continue;
        case '1':
            var result = gLGYTl['RDvlE'](a, b);
            continue;
        case '2':
            var input = input['split']('\x20');
            continue;
        case '3':
            console['log'](result);
            continue;
        case '4':
            var a = gLGYTl['FtYiV'](Number, input[0x0]);
            continue;
        case '5':
            var b = gLGYTl['FtYiV'](Number, input[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));