function Main(input) {
    var uIdxYd = {
        'HouWy': '6|2|3|0|4|5|1',
        'aBWGn': function (x, y) {
            return x - y;
        }
    };
    var FrXIUf = uIdxYd['HouWy']['split']('|');
    var NYLKsD = 0x0;
    while (!![]) {
        switch (FrXIUf[NYLKsD++]) {
        case '0':
            var K = tmp[0x1];
            continue;
        case '1':
            console['log'](pattern);
            continue;
        case '2':
            var tmp = input[0x0]['split']('\x20');
            continue;
        case '3':
            var N = tmp[0x0];
            continue;
        case '4':
            var pattern = K;
            continue;
        case '5':
            for (i = 0x1; i < N; i++) {
                pattern *= uIdxYd['aBWGn'](K, 0x1);
            }
            continue;
        case '6':
            var input = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));