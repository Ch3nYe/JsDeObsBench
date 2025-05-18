var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        var ipqr = Arr['shift']()['split']('\x20')['map'](Number);
        arr['push'](ipqr);
    }
    var PQRC = Arr['shift']()['split']('\x20')['map'](Number);
    var result = [];
    arr['forEach'](function (v) {
        var XNLiQs = {
            'cJtKu': '5|3|2|4|1|0',
            'qByCG': function (x, y) {
                return x == y;
            },
            'AzzJy': function (x, y) {
                return x < y;
            },
            'XgkvI': function (x, y) {
                return x + y;
            },
            'WWVLD': function (x, y) {
                return x * y;
            },
            'GcYIU': function (x, y) {
                return x * y;
            },
            'Ttwqj': function (x, y) {
                return x < y;
            }
        };
        var QdLDgu = XNLiQs['cJtKu']['split']('|');
        var LNFOtT = 0x0;
        while (!![]) {
            switch (QdLDgu[LNFOtT++]) {
            case '0':
                if (XNLiQs['qByCG'](bad, 0x0))
                    result['push'](v[0x0]);
                continue;
            case '1':
                if (XNLiQs['AzzJy'](PQRC[0x3], XNLiQs['XgkvI'](XNLiQs['WWVLD'](0x4, XNLiQs['XgkvI'](v[0x1], v[0x3])), XNLiQs['GcYIU'](0x9, v[0x2]))))
                    bad++;
                continue;
            case '2':
                if (XNLiQs['Ttwqj'](PQRC[0x1], v[0x2]))
                    bad++;
                continue;
            case '3':
                if (XNLiQs['Ttwqj'](PQRC[0x0], v[0x1]))
                    bad++;
                continue;
            case '4':
                if (PQRC[0x2] < v[0x3])
                    bad++;
                continue;
            case '5':
                var bad = 0x0;
                continue;
            }
            break;
        }
    });
    console['log'](result['length'] == 0x0 ? 'NA' : result['join']('\x0a'));
}