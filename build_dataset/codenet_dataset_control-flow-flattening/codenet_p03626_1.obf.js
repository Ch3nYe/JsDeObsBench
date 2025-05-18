function main(input) {
    var urQpem = {
        'nENqH': function (x, y) {
            return x * y;
        },
        'rnbcX': function (x, y) {
            return x < y;
        },
        'bhLIM': function (x, y) {
            return x - y;
        },
        'JyNvg': function (x, y) {
            return x * y;
        },
        'SwoVE': function (x, y) {
            return x * y;
        },
        'UlKjQ': function (x, y) {
            return x % y;
        },
        'dEHvt': function (x, y) {
            return x == y;
        },
        'xGEOg': function (x, y) {
            return x + y;
        }
    };
    var LfYCtr = '3|2|6|7|4|0|9|5|1|8'['split']('|');
    var tCcrFP = 0x0;
    while (!![]) {
        switch (LfYCtr[tCcrFP++]) {
        case '0':
            var isYoko;
            continue;
        case '1':
            if (i < N) {
                if (!isYoko) {
                    res = urQpem['nENqH'](res, 0x2);
                }
            }
            continue;
        case '2':
            var N = Number(tmp[0x0]);
            continue;
        case '3':
            var tmp = input['split'](/\r\n|\r|\n/);
            continue;
        case '4':
            var i = 0x0;
            continue;
        case '5':
            for (; urQpem['rnbcX'](i, urQpem['bhLIM'](N, 0x1)); i++) {
                if (S[i] == S[i + 0x1]) {
                    if (isYoko) {
                        res = urQpem['JyNvg'](res, 0x3);
                    } else {
                        res = res * 0x2;
                    }
                    i++;
                    isYoko = !![];
                } else {
                    if (!isYoko) {
                        res = urQpem['SwoVE'](res, 0x2);
                    }
                    isYoko = ![];
                }
            }
            continue;
        case '6':
            var S = tmp[0x1]['split']('');
            continue;
        case '7':
            var res;
            continue;
        case '8':
            console['log'](urQpem['UlKjQ'](res, 0x3b9aca07));
            continue;
        case '9':
            if (urQpem['dEHvt'](S[i], S[urQpem['xGEOg'](i, 0x1)])) {
                res = 0x6;
                i = urQpem['xGEOg'](i, 0x2);
                isYoko = !![];
            } else {
                res = 0x3;
                i++;
                isYoko = ![];
            }
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));