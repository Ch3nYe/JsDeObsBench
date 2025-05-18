process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(input) {
    var sqWpLW = {
        'TZsXQ': function (x, y) {
            return x <= y;
        },
        'wNDNZ': function (x, y) {
            return x < y;
        },
        'OexWM': function (callee, param1) {
            return callee(param1);
        }
    };
    var BxqEqa = '5|1|4|0|7|3|6|2'['split']('|');
    var qMzSfr = 0x0;
    while (!![]) {
        switch (BxqEqa[qMzSfr++]) {
        case '0':
            var n = Number(line0[0x0]);
            continue;
        case '1':
            var line0 = tmp[0x0]['split']('\x20');
            continue;
        case '2':
            console['log'](ans);
            continue;
        case '3':
            var ans = 0x1;
            continue;
        case '4':
            var line1 = tmp[0x1]['split']('\x20');
            continue;
        case '5':
            var tmp = input['split']('\x0a');
            continue;
        case '6':
            for (var i = 0x1; sqWpLW['TZsXQ'](i, n); i++) {
                if (sqWpLW['wNDNZ'](ans, k))
                    ans *= 0x2;
                else
                    ans += k;
            }
            continue;
        case '7':
            var k = sqWpLW['OexWM'](Number, line1[0x0]);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));