function Main(s) {
    var eLmHZL = {
        'SFAxh': '1|0|2|3|4',
        'beSGA': function (x, y) {
            return x + y;
        },
        'LxcAN': function (x, y) {
            return x === y;
        },
        'dxxXt': function (x, y) {
            return x * y;
        }
    };
    var abxiwv = eLmHZL['SFAxh']['split']('|');
    var abOBKr = 0x0;
    while (!![]) {
        switch (abxiwv[abOBKr++]) {
        case '0':
            var ans = 'x';
            continue;
        case '1':
            s = s['split']('\x20')['map'](a => +a);
            continue;
        case '2':
            if (eLmHZL['beSGA'](s[0x0], s[0x1]) === 0xf)
                ans = '+';
            continue;
        case '3':
            if (eLmHZL['LxcAN'](eLmHZL['dxxXt'](s[0x0], s[0x1]), 0xf))
                ans = '*';
            continue;
        case '4':
            console['log'](ans);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));