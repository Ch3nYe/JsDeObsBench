function Main(input) {
    var rrxNGV = {
        'rHgGB': '2|4|0|1|3',
        'rKyro': function (x, y) {
            return x < y;
        },
        'nlfOZ': function (x, y) {
            return x == y;
        }
    };
    var YUlQel = rrxNGV['rHgGB']['split']('|');
    var eVBqTz = 0x0;
    while (!![]) {
        switch (YUlQel[eVBqTz++]) {
        case '0':
            var ans = 0x0;
            continue;
        case '1':
            for (i = 0x0; rrxNGV['rKyro'](i, S['length']); i++) {
                if (rrxNGV['nlfOZ'](S[i], '2')) {
                    ans++;
                }
            }
            continue;
        case '2':
            input = input['split']('\x0a');
            continue;
        case '3':
            console['log']('%s', ans);
            continue;
        case '4':
            S = input[0x0]['split']('');
            continue;
        }
        break;
    }
}
function debug() {
    var kxYYKb = {
        'WgfJT': function (callee, param1) {
            return callee(param1);
        }
    };
    var input = document['getElementById']('input')['value'];
    kxYYKb['WgfJT'](Main, input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));