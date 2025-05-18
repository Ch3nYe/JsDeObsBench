function Main(input) {
    var sNnSKk = {
        'GvDFi': '4|11|0|9|13|6|12|2|8|14|5|7|10|1|3',
        'hpArP': function (callee, param1) {
            return callee(param1);
        },
        'lIuls': function (x, y) {
            return x == y;
        },
        'kSIlt': function (x, y) {
            return x - y;
        },
        'tXrFS': function (x, y) {
            return x - y;
        },
        'ZnHaf': '1$1'
    };
    var gWTekw = sNnSKk['GvDFi']['split']('|');
    var khOUlT = 0x0;
    while (!![]) {
        switch (gWTekw[khOUlT++]) {
        case '0':
            tmp = input['shift']();
            continue;
        case '1':
            A = sNnSKk['hpArP'](parseInt, A);
            continue;
        case '2':
            flag = !![];
            continue;
        case '3':
            if (flag && sNnSKk['lIuls']((A + '')['length'], N)) {
                console['log'](A);
            } else {
                console['log'](-0x1);
            }
            continue;
        case '4':
            var NphRfX = {
                'lsoAi': function (x, y) {
                    return sNnSKk['kSIlt'](x, y);
                },
                'OUyPU': function (x, y) {
                    return sNnSKk['kSIlt'](x, y);
                },
                'JCFVk': function (x, y) {
                    return sNnSKk['tXrFS'](x, y);
                }
            };
            continue;
        case '5':
            A = A['replace'](/^nn([0-9])/, '10$1');
            continue;
        case '6':
            S = input;
            continue;
        case '7':
            A = A['replace'](/^n([0-9])/, sNnSKk['ZnHaf']);
            continue;
        case '8':
            S['forEach'](v => {
                t = v['split']('\x20')['map'](v => parseInt(v));
                if (A[NphRfX['lsoAi'](t[0x0], 0x1)] != 'n' && A[NphRfX['OUyPU'](t[0x0], 0x1)] != t[0x1])
                    flag = ![];
                A[NphRfX['JCFVk'](t[0x0], 0x1)] = t[0x1];
            });
            continue;
        case '9':
            N = parseInt(tmp['split']('\x20')[0x0]);
            continue;
        case '10':
            A = A['replace'](/n/g, '0');
            continue;
        case '11':
            input = input['split']('\x0a');
            continue;
        case '12':
            A = 'n'['repeat'](N)['split']('');
            continue;
        case '13':
            M = tmp['split']('\x20')[0x1];
            continue;
        case '14':
            A = A['join']('');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));