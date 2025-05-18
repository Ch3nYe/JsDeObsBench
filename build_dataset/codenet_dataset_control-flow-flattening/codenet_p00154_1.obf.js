function bomb(start, sum) {
    var kebeQr = {
        'PoCVA': '4|3|1|2|0',
        'MoAMz': function (x, y) {
            return x <= y;
        },
        'qurdn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'FPeqt': function (x, y) {
            return x + y;
        },
        'WRqXt': function (x, y) {
            return x * y;
        },
        'sLUtu': function (x, y) {
            return x == y;
        }
    };
    var RifFvD = kebeQr['PoCVA']['split']('|');
    var PGhuBJ = 0x0;
    while (!![]) {
        switch (RifFvD[PGhuBJ++]) {
        case '0':
            for (var i = 0x0; kebeQr['MoAMz'](i, k); i++) {
                kebeQr['qurdn'](bomb, kebeQr['FPeqt'](start, 0x1), sum + kebeQr['WRqXt'](v, i));
            }
            continue;
        case '1':
            var v = card[start][0x0];
            continue;
        case '2':
            var k = card[start][0x1];
            continue;
        case '3':
            if (kebeQr['sLUtu'](start, card['length']))
                return;
            continue;
        case '4':
            dp[start][sum]++;
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var m = arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var card = [];
    while (m--)
        card['push'](arr['shift']()['split']('\x20')['map'](Number));
    var g = arr['shift']() - 0x0;
    var dp = [];
    for (var i = 0x0; i <= card['length']; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0x3e8; j++) {
            dp[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0);
    while (g--)
        console['log'](dp[card['length']][arr['shift']() - 0x0]);
}