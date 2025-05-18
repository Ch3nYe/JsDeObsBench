function Main(s) {
    var lXMZFJ = {
        'HBQbt': '3|5|4|2|1|0',
        'AojQi': function (x, y) {
            return x + y;
        },
        'ejXkS': function (x, y) {
            return x === y;
        }
    };
    var lpHyec = lXMZFJ['HBQbt']['split']('|');
    var alkUdk = 0x0;
    while (!![]) {
        switch (lpHyec[alkUdk++]) {
        case '0':
            console['log'](ans['join']('\x0a'));
            continue;
        case '1':
            for (var i = 0x0; i < k; i++) {
                ans[i] = lXMZFJ['AojQi'](x, y);
                if (lXMZFJ['ejXkS'](x, 0x9)) {
                    x = 0x1;
                    y += '9';
                } else
                    x++;
            }
            continue;
        case '2':
            var y = '';
            continue;
        case '3':
            k = +s;
            continue;
        case '4':
            var x = 0x1;
            continue;
        case '5':
            var ans = [];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));