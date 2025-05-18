function Main(input) {
    var ceFzyl = {
        'OPyqk': '0|4|2|1|3|5',
        'NwFRI': 'Yes',
        'KNCzn': function (x, y) {
            return x == y;
        },
        'DWmUV': function (x, y) {
            return x == y;
        }
    };
    var NLymNp = ceFzyl['OPyqk']['split']('|');
    var gkzpYI = 0x0;
    while (!![]) {
        switch (NLymNp[gkzpYI++]) {
        case '0':
            input = input['split']('\x0a');
            continue;
        case '1':
            var ans = ceFzyl['NwFRI'];
            continue;
        case '2':
            var T = input[0x1];
            continue;
        case '3':
            while (T['length'] != 0x0) {
                for (i = 0x1; i < T['length']; i++) {
                    if (ceFzyl['KNCzn'](T['substr'](0x0, 0x1), T['substr'](i, 0x1))) {
                        if (S['substr'](0x0, 0x1) != S['substr'](i, 0x1)) {
                            ans = 'No';
                            break;
                        }
                    }
                    if (S['substr'](0x0, 0x1) == S['substr'](i, 0x1)) {
                        if (T['substr'](0x0, 0x1) != T['substr'](i, 0x1)) {
                            ans = 'No';
                            break;
                        }
                    }
                }
                if (ceFzyl['DWmUV'](ans, 'No')) {
                    break;
                }
                S = S['substr'](0x1);
                T = T['substr'](0x1);
            }
            continue;
        case '4':
            var S = input[0x0];
            continue;
        case '5':
            console['log']('%s', ans);
            continue;
        }
        break;
    }
}
function debug() {
    var KHxiiF = {
        'lmVib': function (callee, param1) {
            return callee(param1);
        }
    };
    var input = document['getElementById']('input')['value'];
    KHxiiF['lmVib'](Main, input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));