function Main(input) {
    var EZUFFq = {
        'unUeq': function (callee, param1) {
            return callee(param1);
        },
        'ReUEK': function (x, y) {
            return x + y;
        },
        'FHDXa': function (x, y) {
            return x * y;
        },
        'qMZvp': function (x, y) {
            return x * y;
        }
    };
    var ZpHbuh = '4|6|2|3|0|5|1'['split']('|');
    var qZmBzv = 0x0;
    while (!![]) {
        switch (ZpHbuh[qZmBzv++]) {
        case '0':
            var x = 0x0;
            continue;
        case '1':
            console['log'](--N);
            continue;
        case '2':
            var Z = parseInt(input['split']('\x20')[0x2]);
            continue;
        case '3':
            var N = 0x1;
            continue;
        case '4':
            var X = EZUFFq['unUeq'](parseInt, input['split']('\x20')[0x0]);
            continue;
        case '5':
            while (!![]) {
                x = EZUFFq['ReUEK'](EZUFFq['FHDXa'](N, Y), EZUFFq['qMZvp'](EZUFFq['ReUEK'](N, 0x1), Z));
                if (x > X)
                    break;
                N++;
            }
            continue;
        case '6':
            var Y = parseInt(input['split']('\x20')[0x1]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));