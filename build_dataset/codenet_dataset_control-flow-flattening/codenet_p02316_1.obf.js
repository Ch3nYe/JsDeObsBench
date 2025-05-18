function knapsack() {
    var MilVyS = {
        'BcNaf': '0|1|4|3|5|2',
        'digNP': function (x, y) {
            return x <= y;
        },
        'bCgJN': function (x, y) {
            return x <= y;
        },
        'zdhps': function (x, y) {
            return x <= y;
        },
        'sefPj': function (x, y) {
            return x + y;
        },
        'BEKKj': function (x, y) {
            return x - y;
        },
        'OjzOl': function (x, y) {
            return x - y;
        },
        'atgWE': function (x, y) {
            return x - y;
        }
    };
    var TwflSh = MilVyS['BcNaf']['split']('|');
    var MnAxlc = 0x0;
    while (!![]) {
        switch (TwflSh[MnAxlc++]) {
        case '0':
            var C = [];
            continue;
        case '1':
            for (var i = 0x0; MilVyS['digNP'](i, N); i++)
                C[i] = [];
            continue;
        case '2':
            return C[N][W];
        case '3':
            for (var i = 0x0; MilVyS['bCgJN'](i, N); i++)
                C[i][0x0] = 0x0;
            continue;
        case '4':
            for (var i = 0x0; i <= W; i++)
                C[0x0][i] = 0x0;
            continue;
        case '5':
            for (var i = 0x1; MilVyS['digNP'](i, N); i++) {
                for (var j = 0x1; j <= W; j++) {
                    if (MilVyS['zdhps'](items[i]['w'], W)) {
                        if (MilVyS['sefPj'](items[i]['v'], C[MilVyS['BEKKj'](i, 0x1)][MilVyS['OjzOl'](j, items[i]['w'])]) > C[MilVyS['BEKKj'](i, 0x1)][j]) {
                            C[i][j] = MilVyS['sefPj'](items[i]['v'], C[MilVyS['OjzOl'](i, 0x1)][MilVyS['OjzOl'](j, items[i]['w'])]);
                        } else {
                            C[i][j] = C[MilVyS['atgWE'](i, 0x1)][j];
                        }
                    } else {
                        C[i][j] = C[MilVyS['BEKKj'](i, 0x1)][j];
                    }
                }
            }
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var nW = Arr['shift']()['split']('\x20')['map'](Number);
var n = nW[0x0];
var W = nW[0x1];
var N = 0x0;
var items = [null];
for (var i = 0x1; i <= n; i++) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var k = 0x1;
    do {
        items['push']({
            'v': arr[0x0] * k,
            'w': arr[0x1] * k
        });
        N++;
        k++;
    } while (arr[0x1] * k <= W);
}
var max = knapsack();
console['log'](max);