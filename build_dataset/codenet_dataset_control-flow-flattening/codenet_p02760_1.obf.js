function Main(input) {
    var wdaaTg = {
        'LMYpc': function (x, y) {
            return x < y;
        },
        'BlEzE': function (x, y) {
            return x + y;
        },
        'TCyeJ': function (x, y) {
            return x - y;
        }
    };
    var qiNspa = '12|7|0|3|1|13|6|2|10|9|14|8|11|4|5'['split']('|');
    var qbBMps = 0x0;
    while (!![]) {
        switch (qiNspa[qbBMps++]) {
        case '0':
            var chk = [];
            continue;
        case '1':
            var map = [
                input[0x0]['split']('\x20')['map'](v => chk['indexOf'](v - 0x0) >= 0x0),
                input[0x1]['split']('\x20')['map'](v => chk['indexOf'](v - 0x0) >= 0x0),
                input[0x2]['split']('\x20')['map'](v => chk['indexOf'](v - 0x0) >= 0x0)
            ];
            continue;
        case '2':
            if (map[0x1][0x0] && map[0x1][0x1] && map[0x1][0x2])
                flg = !![];
            continue;
        case '3':
            for (var i = 0x4; wdaaTg['LMYpc'](i, wdaaTg['BlEzE'](n, 0x4)); i++) {
                chk['push'](wdaaTg['TCyeJ'](input[i], 0x0));
            }
            continue;
        case '4':
            if (map[0x0][0x2] && map[0x1][0x1] && map[0x2][0x0])
                flg = !![];
            continue;
        case '5':
            console['log'](flg ? 'Yes' : 'No');
            continue;
        case '6':
            if (map[0x0][0x0] && map[0x0][0x1] && map[0x0][0x2])
                flg = !![];
            continue;
        case '7':
            var ansmap = [
                [
                    ![],
                    ![],
                    ![]
                ],
                [
                    ![],
                    ![],
                    ![]
                ],
                [
                    ![],
                    ![],
                    ![]
                ]
            ];
            continue;
        case '8':
            if (map[0x0][0x2] && map[0x1][0x2] && map[0x2][0x2])
                flg = !![];
            continue;
        case '9':
            if (map[0x0][0x0] && map[0x1][0x0] && map[0x2][0x0])
                flg = !![];
            continue;
        case '10':
            if (map[0x2][0x0] && map[0x2][0x1] && map[0x2][0x2])
                flg = !![];
            continue;
        case '11':
            if (map[0x0][0x0] && map[0x1][0x1] && map[0x2][0x2])
                flg = !![];
            continue;
        case '12':
            var n = input[0x3];
            continue;
        case '13':
            var flg = ![];
            continue;
        case '14':
            if (map[0x0][0x1] && map[0x1][0x1] && map[0x2][0x1])
                flg = !![];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));