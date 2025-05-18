function Main(input) {
    var MadPxb = {
        'EtfOh': '6|7|0|5|3|4|1|8|2',
        'IkCdJ': function (x, y) {
            return x - y;
        },
        'NUtTS': function (x, y) {
            return x < y;
        },
        'xcTsv': function (x, y) {
            return x <= y;
        },
        'cDtba': function (x, y) {
            return x - y;
        },
        'QPXuS': function (x, y) {
            return x % y;
        },
        'iXJoF': function (x, y) {
            return x % y;
        },
        'ayrlG': function (x, y) {
            return x > y;
        },
        'tyLzc': function (x, y) {
            return x - y;
        }
    };
    var lwXhGm = MadPxb['EtfOh']['split']('|');
    var TTIRwA = 0x0;
    while (!![]) {
        switch (lwXhGm[TTIRwA++]) {
        case '0':
            var M = MadPxb['IkCdJ'](input[0x0]['split']('\x20')[0x1], 0x0);
            continue;
        case '1':
            for (var i = 0x1; MadPxb['NUtTS'](i, input['length']); i++) {
                line = input[i]['split']('\x20');
                line[0x1] -= 0x0;
                line[0x0] -= 0x0;
                for (var j = 0x1; MadPxb['xcTsv'](j, M); j++) {
                    if (!(MadPxb['NUtTS'](line[0x1] - line[0x0], MadPxb['cDtba'](j, 0x1)) && MadPxb['QPXuS'](line[0x1], j) >= MadPxb['iXJoF'](line[0x0], j) && MadPxb['ayrlG'](line[0x0] % j, 0x0))) {
                        answer[j]++;
                    }
                }
            }
            continue;
        case '2':
            console['log'](answer['join']('\x0a'));
            continue;
        case '3':
            answer['fill'](0x0);
            continue;
        case '4':
            var line;
            continue;
        case '5':
            var answer = new Array(M + 0x1);
            continue;
        case '6':
            input = input['split']('\x0a');
            continue;
        case '7':
            var N = MadPxb['tyLzc'](input[0x0]['split']('\x20')[0x0], 0x0);
            continue;
        case '8':
            answer['shift']();
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));