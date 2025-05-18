function Main(input) {
    var mrHoLb = {
        'pvCIg': function (x, y) {
            return x < y;
        },
        'ZsJMF': '4|3|0|1|2',
        'BawLi': function (x, y) {
            return x == y;
        },
        'QWXDH': function (x, y) {
            return x < y;
        },
        'LCkhO': function (x, y) {
            return x != y;
        },
        'fmpLg': function (x, y) {
            return x == y;
        },
        'GDfrP': function (x, y) {
            return x - y;
        },
        'GZxqt': function (x, y) {
            return x != y;
        },
        'XBRxC': function (x, y) {
            return x == y;
        },
        'PLcem': function (x, y) {
            return x + y;
        }
    };
    var ary = [];
    for (var i = 0x0; mrHoLb['pvCIg'](i, input['split']('\x0a')[0x0]['split']('\x20')[0x0]); i++) {
        ary['push'](0x1);
    }
    var str = input['split']('\x0a')[0x1];
    for (var i = 0x2; mrHoLb['pvCIg'](i, input['split']('\x0a')['length']); i++) {
        var Upcjpu = mrHoLb['ZsJMF']['split']('|');
        var qOFdcS = 0x0;
        while (!![]) {
            switch (Upcjpu[qOFdcS++]) {
            case '0':
                for (var j = 0x0; mrHoLb['pvCIg'](j, ary['length']); j++) {
                    newAry['push'](0x0);
                }
                continue;
            case '1':
                if (mrHoLb['BawLi'](jumon[0x1], 'L')) {
                    for (var j = 0x0; mrHoLb['QWXDH'](j, str['length']); j++) {
                        if (j != 0x0 || mrHoLb['LCkhO'](str[j], jumon[0x0]))
                            newAry[mrHoLb['fmpLg'](str[j], jumon[0x0]) ? mrHoLb['GDfrP'](j, 0x1) : j] += ary[j];
                    }
                } else {
                    for (var j = 0x0; mrHoLb['pvCIg'](j, str['length']); j++) {
                        if (mrHoLb['LCkhO'](j, mrHoLb['GDfrP'](ary['length'], 0x1)) || mrHoLb['GZxqt'](str[j], jumon[0x0]))
                            newAry[mrHoLb['XBRxC'](str[j], jumon[0x0]) ? mrHoLb['PLcem'](j, 0x1) : j] += ary[j];
                    }
                }
                continue;
            case '2':
                ary = newAry['concat']();
                continue;
            case '3':
                var newAry = [];
                continue;
            case '4':
                var jumon = input['split']('\x0a')[i]['split']('\x20');
                continue;
            }
            break;
        }
    }
    var golems = 0x0;
    for (var i of ary)
        golems += i;
    console['log'](golems);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));