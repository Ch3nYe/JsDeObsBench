function Main(s) {
    var ZAeNii = {
        'BzElR': '0|5|1|2|4|6|3',
        'FRHfG': function (x, y) {
            return x - y;
        },
        'PTdQa': function (x, y) {
            return x === y;
        }
    };
    var ejpNOT = ZAeNii['BzElR']['split']('|');
    var QJXjXC = 0x0;
    while (!![]) {
        switch (ejpNOT[QJXjXC++]) {
        case '0':
            var s = s['split']('\x0a');
            continue;
        case '1':
            var t = s['slice'](0x1)['map'](e => parseInt(e, 0xa))['sort']((a, b) => a - b);
            continue;
        case '2':
            var cnt = 0x1;
            continue;
        case '3':
            console['log'](cnt);
            continue;
        case '4':
            var c = zero[0x1];
            continue;
        case '5':
            var zero = s[0x0]['split']('\x20')['map'](e => parseInt(e, 0xa));
            continue;
        case '6':
            for (var i = 0x1; i < zero[0x0]; i++) {
                if (t[ZAeNii['FRHfG'](i, 0x1)] <= t[i] && t[i] <= t[ZAeNii['FRHfG'](i, 0x1)] + zero[0x2]) {
                    c--;
                    if (ZAeNii['PTdQa'](c, 0x0)) {
                        cnt++;
                        c = zero[0x1];
                    }
                } else {
                    cnt++;
                    c = zero[0x1];
                }
            }
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));