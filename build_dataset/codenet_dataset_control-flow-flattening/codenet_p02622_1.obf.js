function Main(input) {
    var FePort = {
        'xfGaN': '4|0|3|5|2|1',
        'LiuhX': function (x, y) {
            return x != y;
        },
        'XVQkF': function (x, y) {
            return x + y;
        }
    };
    var FeXuxK = FePort['xfGaN']['split']('|');
    var koxRRZ = 0x0;
    while (!![]) {
        switch (FeXuxK[koxRRZ++]) {
        case '0':
            t = input[0x0]['split']('');
            continue;
        case '1':
            console['log'](result);
            continue;
        case '2':
            for (var i = 0x0; i < s['length']; i++) {
                if (FePort['LiuhX'](s[i], t[i])) {
                    result = FePort['XVQkF'](result, 0x1);
                } else {
                }
            }
            continue;
        case '3':
            s = input[0x1]['split']('');
            continue;
        case '4':
            input = input['split']('\x0a');
            continue;
        case '5':
            var result = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));