function main(input) {
    var tGVtbO = {
        'YDKkF': '2|3|5|4|7|6|0|1',
        'EdVEN': function (x, y) {
            return x <= y;
        },
        'YeAqA': function (x, y) {
            return x + y;
        },
        'KbrdB': function (x, y) {
            return x - y;
        },
        'QZDDU': function (x, y) {
            return x - y;
        },
        'YLthy': '4|2|3|1|0',
        'cYqHw': function (x, y) {
            return x - y;
        }
    };
    var IwCXwp = tGVtbO['YDKkF']['split']('|');
    var zhvDHB = 0x0;
    while (!![]) {
        switch (IwCXwp[zhvDHB++]) {
        case '0':
            for (var i = 0x1; tGVtbO['EdVEN'](i, n); i++) {
                llist[i] = tGVtbO['YeAqA'](llist[tGVtbO['KbrdB'](i, 0x1)], Math['abs'](tGVtbO['KbrdB'](list[i], list[tGVtbO['QZDDU'](i, 0x1)])));
                rlist[n - i] = tGVtbO['YeAqA'](rlist[n - i + 0x1], Math['abs'](tGVtbO['KbrdB'](list[tGVtbO['QZDDU'](n, i) + 0x1], list[tGVtbO['KbrdB'](n, i) + 0x2])));
            }
            continue;
        case '1':
            for (var i = 0x1; tGVtbO['EdVEN'](i, n); i++) {
                var YaXRrA = tGVtbO['YLthy']['split']('|');
                var ybyXIE = 0x0;
                while (!![]) {
                    switch (YaXRrA[ybyXIE++]) {
                    case '0':
                        console['log'](ans);
                        continue;
                    case '1':
                        ans += Math['abs'](list[i - 0x1] - list[tGVtbO['YeAqA'](i, 0x1)]);
                        continue;
                    case '2':
                        ans += llist[tGVtbO['cYqHw'](i, 0x1)];
                        continue;
                    case '3':
                        ans += rlist[i] || 0x0;
                        continue;
                    case '4':
                        var ans = 0x0;
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '2':
            var n = tGVtbO['cYqHw'](input[0x0], 0x0);
            continue;
        case '3':
            var list = [0x0]['concat'](input[0x1]['split']('\x20')['map'](v => v - 0x0), [0x0]);
            continue;
        case '4':
            llist[0x0] = 0x0;
            continue;
        case '5':
            var llist = [];
            continue;
        case '6':
            rlist[n] = 0x0;
            continue;
        case '7':
            var rlist = [];
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));