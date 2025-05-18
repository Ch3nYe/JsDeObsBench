function Main(arg) {
    var bGpLqr = {
        'EnQJe': '7|4|3|6|2|5|1|0',
        'FNpdH': function (x, y) {
            return x <= y;
        },
        'PYIXE': function (x, y) {
            return x < y;
        },
        'LFdIb': function (x, y) {
            return x / y;
        }
    };
    var gZyTHn = bGpLqr['EnQJe']['split']('|');
    var CMLlJB = 0x0;
    while (!![]) {
        switch (gZyTHn[CMLlJB++]) {
        case '0':
            return;
        case '1':
            console['log'](ans['join']('\x0a')['toString']());
            continue;
        case '2':
            ans['push'](N);
            continue;
        case '3':
            var tmp = new Set(A);
            continue;
        case '4':
            var A = arg['split']('\x0a')[0x1]['split']('\x20')['map'](v => v - 0x0);
            continue;
        case '5':
            for (var K = 0x2; bGpLqr['FNpdH'](K, N); K++) {
                if (bGpLqr['PYIXE'](tmp['size'], K)) {
                    ans['push'](0x0);
                } else {
                    ans['push'](Math['floor'](bGpLqr['LFdIb'](tmp['size'], K)));
                }
            }
            continue;
        case '6':
            var ans = [];
            continue;
        case '7':
            var N = arg['split']('\x0a')[0x0] - 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));