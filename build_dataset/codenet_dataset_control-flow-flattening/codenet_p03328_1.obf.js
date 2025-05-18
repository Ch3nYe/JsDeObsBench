function Main(input) {
    var bGJpgh = {
        'hgasf': '8|0|5|7|2|10|3|1|6|9|4',
        'Wnkqt': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'BqOcK': function (x, y) {
            return x > y;
        },
        'gzojj': function (x, y) {
            return x == y;
        },
        'zPgyr': function (x, y) {
            return x - y;
        }
    };
    var Dpfcyt = bGJpgh['hgasf']['split']('|');
    var GMWMFd = 0x0;
    while (!![]) {
        switch (Dpfcyt[GMWMFd++]) {
        case '0':
            var a = bGJpgh['Wnkqt'](parseInt, input[0x0], 0xa);
            continue;
        case '1':
            var ans = 0x0;
            continue;
        case '2':
            var b_real = 0x1;
            continue;
        case '3':
            var b_count = 0x1;
            continue;
        case '4':
            console['log'](ans);
            continue;
        case '5':
            var b = bGJpgh['Wnkqt'](parseInt, input[0x1], 0xa);
            continue;
        case '6':
            while (!![]) {
                while (!![]) {
                    a_count++;
                    a_real += a_count;
                    b_count++;
                    b_real += b_count;
                    if (a_real > a) {
                        break;
                    }
                }
                while (!![]) {
                    b_count++;
                    b_real += b_count;
                    if (bGJpgh['BqOcK'](b_real, b)) {
                        break;
                    }
                }
                if (bGJpgh['gzojj'](bGJpgh['zPgyr'](a_real, a), bGJpgh['zPgyr'](b_real, b))) {
                    break;
                }
            }
            continue;
        case '7':
            var a_real = 0x1;
            continue;
        case '8':
            input = input['split']('\x20');
            continue;
        case '9':
            ans = bGJpgh['zPgyr'](a_real, a);
            continue;
        case '10':
            var a_count = 0x1;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));