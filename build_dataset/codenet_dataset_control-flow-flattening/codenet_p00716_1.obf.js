function F1(m, b, c) {
    var sHkVWP = {
        'QBaXk': function (x, y) {
            return x < y;
        },
        'fPKxY': function (x, y) {
            return x + y;
        }
    };
    var sum = 0x0;
    for (var i = 0x0; sHkVWP['QBaXk'](i, Y); i++) {
        sum += Math['floor'](m * b);
        m -= c;
    }
    return sHkVWP['fPKxY'](m, sum);
}
function F2(m, b, c) {
    var lWKPyo = {
        'XhvIx': function (x, y) {
            return x * y;
        }
    };
    for (var i = 0x0; i < Y; i++) {
        m += Math['floor'](lWKPyo['XhvIx'](m, b)) - c;
    }
    return m;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var M = Arr['shift']() - 0x0;
for (var i = 0x0; i < M; i++) {
    var ViNkSJ = '3|2|0|1|5|4'['split']('|');
    var LIYDZH = 0x0;
    while (!![]) {
        switch (ViNkSJ[LIYDZH++]) {
        case '0':
            var N = Arr['shift']() - 0x0;
            continue;
        case '1':
            var arr = [];
            continue;
        case '2':
            var Y = Arr['shift']() - 0x0;
            continue;
        case '3':
            var money = Arr['shift']() - 0x0;
            continue;
        case '4':
            console['log'](Math['max']['apply'](null, arr));
            continue;
        case '5':
            for (var j = 0x0; j < N; j++) {
                var D = Arr['shift']()['split']('\x20')['map'](Number);
                if (D[0x0] == 0x0)
                    arr['push'](F1(money, D[0x1], D[0x2]));
                if (D[0x0] == 0x1)
                    arr['push'](F2(money, D[0x1], D[0x2]));
            }
            continue;
        }
        break;
    }
}