const main = input => {
    var fnDzCe = {
        'TVTot': '0|6|4|5|2|1|3',
        'noRVs': function (x, y) {
            return x <= y;
        },
        'agBzG': function (x, y) {
            return x / y;
        },
        'vQLnB': function (x, y) {
            return x + y;
        },
        'MdwTw': function (x, y) {
            return x < y;
        },
        'VdHsJ': function (x, y) {
            return x - y;
        },
        'IAYLT': function (x, y) {
            return x + y;
        },
        'MttyK': function (x, y) {
            return x >= y;
        },
        'aoQCK': function (x, y) {
            return x + y;
        },
        'yIihC': function (x, y) {
            return x + y;
        }
    };
    var AsVzXq = fnDzCe['TVTot']['split']('|');
    var BJAtOF = 0x0;
    while (!![]) {
        switch (AsVzXq[BJAtOF++]) {
        case '0':
            var N = input[0x0] - 0x0;
            continue;
        case '1':
            start:
                while (fnDzCe['noRVs'](min, max)) {
                    var ave = ~~fnDzCe['agBzG'](fnDzCe['vQLnB'](min, max), 0x2);
                    for (var i = 0x0; fnDzCe['MdwTw'](i, fnDzCe['VdHsJ'](N, ave)); i++) {
                        var base = str['substring'](i, fnDzCe['IAYLT'](i, ave));
                        if (fnDzCe['MttyK'](str['lastIndexOf'](base), fnDzCe['aoQCK'](i, ave))) {
                            min = fnDzCe['yIihC'](ave, 0x1);
                            ans = ave;
                            continue start;
                        }
                    }
                    max = ave - 0x1;
                }
            continue;
        case '2':
            var max = ~~(N / 0x2);
            continue;
        case '3':
            console['log'](ans);
            continue;
        case '4':
            var ans = 0x0;
            continue;
        case '5':
            var min = 0x0;
            continue;
        case '6':
            var str = input[0x1];
            continue;
        }
        break;
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));