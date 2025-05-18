(function (input) {
    var ZUVNap = {
        'bsoGx': 'black',
        'iFjvv': 'blue',
        'sGdFK': 'lime',
        'tJMhi': 'yellow',
        'vYvho': 'white',
        'LQwMH': function (x, y) {
            return x === y;
        },
        'IeRCI': '1|2|5|3|4|6|0',
        'fhXpb': function (x, y) {
            return x * y;
        },
        'eIHmW': function (x, y) {
            return x < y;
        },
        'OXjaT': function (x, y) {
            return x + y;
        },
        'eoAxw': function (x, y) {
            return x + y;
        },
        'iODJi': function (x, y) {
            return x - y;
        }
    };
    var lines = input['split']('\x0a');
    var colors = [
        [
            ZUVNap['bsoGx'],
            0x0,
            0x0,
            0x0
        ],
        [
            ZUVNap['iFjvv'],
            0x0,
            0x0,
            0xff
        ],
        [
            ZUVNap['sGdFK'],
            0x0,
            0xff,
            0x0
        ],
        [
            'aqua',
            0x0,
            0xff,
            0x0
        ],
        [
            'red',
            0xff,
            0x0,
            0x0
        ],
        [
            'fuchsia',
            0xff,
            0x0,
            0xff
        ],
        [
            ZUVNap['tJMhi'],
            0xff,
            0xff,
            0x0
        ],
        [
            ZUVNap['vYvho'],
            0xff,
            0xff,
            0xff
        ]
    ];
    for (var i = 0x0; i < lines['length']; ++i) {
        if (ZUVNap['LQwMH'](lines[i][0x0], '#')) {
            var ZPIUHv = ZUVNap['IeRCI']['split']('|');
            var cOakyF = 0x0;
            while (!![]) {
                switch (ZPIUHv[cOakyF++]) {
                case '0':
                    console['log'](best_color);
                    continue;
                case '1':
                    var best_color;
                    continue;
                case '2':
                    var min_d = ZUVNap['fhXpb'](0x3, 0x100) * 0x100 + 0x1;
                    continue;
                case '3':
                    var g = parseInt(lines[i]['substr'](0x3, 0x2), 0x10);
                    continue;
                case '4':
                    var b = parseInt(lines[i]['substr'](0x5, 0x2), 0x10);
                    continue;
                case '5':
                    var r = parseInt(lines[i]['substr'](0x1, 0x2), 0x10);
                    continue;
                case '6':
                    for (var j = 0x0; ZUVNap['eIHmW'](j, colors['length']); ++j) {
                        var d = ZUVNap['OXjaT'](ZUVNap['eoAxw'](Math['pow'](r - colors[j][0x1], 0x2), Math['pow'](ZUVNap['iODJi'](g, colors[j][0x2]), 0x2)), Math['pow'](ZUVNap['iODJi'](b, colors[j][0x3]), 0x2));
                        if (d < min_d) {
                            min_d = d;
                            best_color = colors[j][0x0];
                        }
                    }
                    continue;
                }
                break;
            }
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()));