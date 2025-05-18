function Main(input) {
    var REXtFG = {
        'rsDTU': '5|12|0|10|3|7|8|4|2|11|9|6|1',
        'vystI': function (x, y) {
            return x == y;
        },
        'fMsap': function (x, y) {
            return x == y;
        },
        'xJoZJ': function (x, y) {
            return x < y;
        },
        'aruJW': function (x, y) {
            return x / y;
        },
        'riftr': function (x, y) {
            return x * y;
        },
        'agfQX': function (x, y) {
            return x + y;
        },
        'JYPzD': function (x, y) {
            return x - y;
        }
    };
    var KUMZfF = REXtFG['rsDTU']['split']('|');
    var CazoPv = 0x0;
    while (!![]) {
        switch (KUMZfF[CazoPv++]) {
        case '0':
            var Muki = '>';
            continue;
        case '1':
            console['log'](Sum);
            continue;
        case '2':
            for (var i = 0x0; i < Slong; i++) {
                if (REXtFG['vystI'](S[i], Muki)) {
                    if (REXtFG['fMsap'](Muki, '>')) {
                        Left++;
                    } else {
                        Right++;
                    }
                    Out = 0x0;
                } else {
                    if (REXtFG['vystI'](Muki, '<')) {
                        V['push']({
                            'L': Left,
                            'R': Right
                        });
                        Muki = '>';
                        Left = 0x0;
                        Right = 0x0;
                        Left++;
                        Out = 0x1;
                    } else {
                        Muki = '<';
                        Right++;
                        Out = 0x0;
                    }
                }
            }
            continue;
        case '3':
            var V = [];
            continue;
        case '4':
            var Sum = 0x0;
            continue;
        case '5':
            var S = input['split']('');
            continue;
        case '6':
            for (var i = 0x0; REXtFG['xJoZJ'](i, V['length']); i++) {
                Sum += REXtFG['aruJW'](REXtFG['riftr'](V[i]['L'], REXtFG['agfQX'](V[i]['L'], 0x1)), 0x2);
                Sum += V[i]['R'] * (V[i]['R'] + 0x1) / 0x2;
            }
            continue;
        case '7':
            var Left = 0x0;
            continue;
        case '8':
            var Right = 0x0;
            continue;
        case '9':
            for (var i = 0x1; REXtFG['xJoZJ'](i, V['length']); i++) {
                if (V[REXtFG['JYPzD'](i, 0x1)]['R'] < V[i]['L']) {
                    V[REXtFG['JYPzD'](i, 0x1)]['R']--;
                } else {
                    V[i]['L']--;
                }
            }
            continue;
        case '10':
            var Out = 0x1;
            continue;
        case '11':
            if (REXtFG['fMsap'](Out, 0x0)) {
                V['push']({
                    'L': Left,
                    'R': Right
                });
            }
            continue;
        case '12':
            var Slong = S['length'];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));