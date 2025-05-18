function Main(input) {
    var EZgpqi = {
        'Hycah': '2|1|4|3|0',
        'khLzD': function (x, y) {
            return x * y;
        },
        'drlEv': function (x, y) {
            return x <= y;
        }
    };
    var BihBJi = EZgpqi['Hycah']['split']('|');
    var TciTTX = 0x0;
    while (!![]) {
        switch (BihBJi[TciTTX++]) {
        case '0':
            console['log'](ans);
            continue;
        case '1':
            var nums = EZgpqi['khLzD'](args[0x1], 0x2);
            continue;
        case '2':
            var args = input['trim']()['split']('\x20')['map'](Number);
            continue;
        case '3':
            if (EZgpqi['drlEv'](nums, args[0x0])) {
                ans = args[0x0] - nums;
            }
            continue;
        case '4':
            var ans = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));