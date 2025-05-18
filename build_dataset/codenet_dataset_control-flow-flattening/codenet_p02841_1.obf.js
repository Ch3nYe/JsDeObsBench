function Main(input) {
    var BZvANN = {
        'hbhzK': '0|2|4|1|3|5',
        'YBtdl': function (x, y) {
            return x + y;
        },
        'BKGNm': '2019/',
        'QkXcA': function (x, y) {
            return x + y;
        },
        'yYYJL': function (x, y) {
            return x == y;
        }
    };
    var GfiuNg = BZvANN['hbhzK']['split']('|');
    var qiTRyP = 0x0;
    while (!![]) {
        switch (GfiuNg[qiTRyP++]) {
        case '0':
            var input = input['split']('\x0a');
            continue;
        case '1':
            var d1 = new Date(BZvANN['YBtdl'](BZvANN['YBtdl'](BZvANN['YBtdl'](BZvANN['BKGNm'], i1[0x0]), '/'), i1[0x1]));
            continue;
        case '2':
            var i1 = input[0x0]['split']('\x20');
            continue;
        case '3':
            var d2 = new Date(BZvANN['YBtdl'](BZvANN['QkXcA'](BZvANN['QkXcA'](BZvANN['BKGNm'], i2[0x0]), '/'), i2[0x1]));
            continue;
        case '4':
            var i2 = input[0x1]['split']('\x20');
            continue;
        case '5':
            if (BZvANN['yYYJL'](d1['getMonth'](), d2['getMonth']())) {
                console['log'](0x0);
            } else {
                console['log'](0x1);
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));