function Main(input) {
    var sLkawQ = {
        'HjRyB': '1|3|5|0|4|2',
        'ekHxW': function (x, y) {
            return x === y;
        },
        'yCQTW': function (x, y) {
            return x % y;
        },
        'SVEwo': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var OarFRh = sLkawQ['HjRyB']['split']('|');
    var zUHpTO = 0x0;
    while (!![]) {
        switch (OarFRh[zUHpTO++]) {
        case '0':
            K = parseInt(K, 0xa);
            continue;
        case '1':
            var N = input['split']('\x20')[0x0];
            continue;
        case '2':
            if (jud) {
                console['log'](0x0);
            } else {
                console['log'](0x1);
            }
            continue;
        case '3':
            var K = input['split']('\x20')[0x1];
            continue;
        case '4':
            var jud = sLkawQ['ekHxW'](sLkawQ['yCQTW'](N, K), 0x0);
            continue;
        case '5':
            N = sLkawQ['SVEwo'](parseInt, N, 0xa);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));