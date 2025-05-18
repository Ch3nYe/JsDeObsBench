function Main(input) {
    var nTjzCH = {
        'ROwCz': function (x, y) {
            return x + y;
        },
        'sljqQ': function (x, y) {
            return x + y;
        },
        'fdeAT': 'Yes',
        'JvHgl': function (x, y) {
            return x !== y;
        },
        'ooeWB': function (x, y) {
            return x - y;
        },
        'iLjFN': function (x, y) {
            return x + y;
        },
        'QhcOU': function (x, y) {
            return x === y;
        }
    };
    var QJKFIy = '11|7|0|10|8|1|4|3|2|6|9|12|5'['split']('|');
    var NNOgfX = 0x0;
    while (!![]) {
        switch (QJKFIy[NNOgfX++]) {
        case '0':
            var N = M[0x0];
            continue;
        case '1':
            for (var i = 0x0; i < M; i++) {
                L[i] = input[nTjzCH['ROwCz'](i, 0x1)]['split']('\x20')['map'](a => parseInt(a));
            }
            continue;
        case '2':
            anc[0x0] = anc[0x1] = 0x1;
            continue;
        case '3':
            var x = new Array(N + 0x1)['fill'](0x0);
            continue;
        case '4':
            var anc = new Array(nTjzCH['sljqQ'](N, 0x1))['fill'](0x0);
            continue;
        case '5':
            console['log'](ans);
            continue;
        case '6':
            var i, j, low = 0x1;
            continue;
        case '7':
            var M = input[0x0]['split']('\x20')['map'](a => parseInt(a));
            continue;
        case '8':
            var L = [];
            continue;
        case '9':
            var ans = nTjzCH['fdeAT'];
            continue;
        case '10':
            M = M[0x1];
            continue;
        case '11':
            input = input['split']('\x0a');
            continue;
        case '12':
            top:
                while (L['length']) {
                    i = j = L['length'];
                    while (i--) {
                        if (anc[L[i][0x0]] && anc[L[i][0x1]]) {
                            if (nTjzCH['JvHgl'](nTjzCH['ooeWB'](x[L[i][0x1]], x[L[i][0x0]]), L[i][0x2])) {
                                ans = 'No';
                                break top;
                            } else {
                                L['splice'](i, 0x1);
                                continue;
                            }
                        }
                        if (anc[L[i][0x0]]) {
                            anc[L[i][0x1]] = 0x1;
                            x[L[i][0x1]] = nTjzCH['iLjFN'](x[L[i][0x0]], L[i][0x2]);
                            L['splice'](i, 0x1);
                        } else if (anc[L[i][0x1]]) {
                            anc[L[i][0x0]] = 0x1;
                            x[L[i][0x0]] = nTjzCH['ooeWB'](x[L[i][0x1]], L[i][0x2]);
                            L['splice'](i, 0x1);
                        }
                    }
                    if (nTjzCH['QhcOU'](j, L['length'])) {
                        i = anc['findIndex'](a => a === 0x0);
                        anc[i] = 0x1;
                    }
                }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));