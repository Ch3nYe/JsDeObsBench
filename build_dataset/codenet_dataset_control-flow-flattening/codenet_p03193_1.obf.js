function Main(input) {
    var fEvNZx = {
        'dSytj': '3|2|1|0|4',
        'NFNwG': function (x, y) {
            return x < y;
        },
        'ugXMo': function (x, y) {
            return x >= y;
        },
        'VKhTQ': function (x, y) {
            return x >= y;
        }
    };
    var LJuiTN = fEvNZx['dSytj']['split']('|');
    var NwctkD = 0x0;
    while (!![]) {
        switch (LJuiTN[NwctkD++]) {
        case '0':
            for (var i = 0x1; fEvNZx['NFNwG'](i, input['length']); i++) {
                var n = input[i]['split']('\x20')['map'](Number);
                if (fEvNZx['ugXMo'](n[0x0], mem[0x1]) && fEvNZx['VKhTQ'](n[0x1], mem[0x2]))
                    sum++;
            }
            continue;
        case '1':
            var sum = 0x0;
            continue;
        case '2':
            var mem = input[0x0]['split']('\x20')['map'](Number);
            continue;
        case '3':
            input = input['split']('\x0a');
            continue;
        case '4':
            console['log'](sum);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());