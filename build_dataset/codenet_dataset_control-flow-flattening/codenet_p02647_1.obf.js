function Main(input) {
    var AzLwnz = {
        'LCxmR': function (x, y) {
            return x < y;
        },
        'ZIxMK': '4|5|1|3|0|2',
        'wsgIq': function (x, y) {
            return x > y;
        },
        'ywqUH': function (x, y) {
            return x - y;
        },
        'gQDgG': function (x, y) {
            return x + y;
        },
        'tAkaC': function (x, y) {
            return x <= y;
        },
        'SaxIx': function (x, y) {
            return x - y;
        },
        'ZPPcK': function (x, y) {
            return x < y;
        },
        'NCuGO': function (x, y) {
            return x != y;
        }
    };
    input = input['split']('\x0a');
    var mem = input[0x0]['split']('\x20');
    var arr = input[0x1]['split']('\x20')['map'](Number);
    for (var p = 0x0; p < mem[0x1]; p++) {
        var tmp = new Array(arr['length'])['fill'](0x0);
        for (var i = 0x0; AzLwnz['LCxmR'](i, arr['length']); i++) {
            var mYRvla = AzLwnz['ZIxMK']['split']('|');
            var XxtmAS = 0x0;
            while (!![]) {
                switch (mYRvla[XxtmAS++]) {
                case '0':
                    if (AzLwnz['wsgIq'](max, AzLwnz['ywqUH'](arr['length'], 0x1)))
                        max = arr['length'] - 0x1;
                    continue;
                case '1':
                    var max = AzLwnz['gQDgG'](i, n);
                    continue;
                case '2':
                    for (var j = min; AzLwnz['tAkaC'](j, max); j++) {
                        tmp[j]++;
                    }
                    continue;
                case '3':
                    if (AzLwnz['LCxmR'](min, 0x0))
                        min = 0x0;
                    continue;
                case '4':
                    var n = arr[i];
                    continue;
                case '5':
                    var min = AzLwnz['SaxIx'](i, n);
                    continue;
                }
                break;
            }
        }
        var flag = !![];
        for (var i = 0x0; AzLwnz['ZPPcK'](i, arr['length']); i++) {
            if (AzLwnz['NCuGO'](arr[i], tmp[i]))
                flag = ![];
            arr[i] = tmp[i];
        }
        if (flag)
            break;
    }
    console['log'](arr['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());