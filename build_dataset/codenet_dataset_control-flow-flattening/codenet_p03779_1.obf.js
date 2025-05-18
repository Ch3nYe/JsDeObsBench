function main(input) {
    var WoUmrz = {
        'cxmDv': '3|0|2|1|4',
        'JpXDT': function (x, y) {
            return x - y;
        },
        'XfazX': function (x, y) {
            return x - y;
        }
    };
    var HzFrkv = WoUmrz['cxmDv']['split']('|');
    var pBDHKd = 0x0;
    while (!![]) {
        switch (HzFrkv[pBDHKd++]) {
        case '0':
            var cnt = 0x1;
            continue;
        case '1':
            for (cnt = 0x1; ans < n; cnt++) {
                ans += cnt;
            }
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            var n = WoUmrz['JpXDT'](input[0x0], 0x0);
            continue;
        case '4':
            console['log'](WoUmrz['XfazX'](cnt, 0x1));
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));