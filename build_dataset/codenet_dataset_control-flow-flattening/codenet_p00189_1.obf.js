function warshall() {
    var xpghgS = {
        'FaPuV': function (x, y) {
            return x < y;
        },
        'jJMdZ': function (x, y) {
            return x < y;
        },
        'BhKJm': function (x, y) {
            return x < y;
        },
        'AOyZC': function (x, y) {
            return x + y;
        }
    };
    for (var k = 0x0; xpghgS['FaPuV'](k, n); k++) {
        for (var i = 0x0; xpghgS['jJMdZ'](i, n); i++) {
            for (var j = 0x0; xpghgS['BhKJm'](j, n); j++) {
                C[i][j] = Math['min'](C[i][j], xpghgS['AOyZC'](C[i][k], C[k][j]));
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = 0xa;
    var m = Arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var C = [];
    for (var i = 0x0; i < n; i++) {
        C[i] = [];
        for (var j = 0x0; j < n; j++) {
            C[i][j] = i === j ? 0x0 : Infinity;
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < m; i++) {
        var A = Arr['shift']()['split']('\x20')['map'](Number);
        max = Math['max'](max, A[0x0], A[0x1]);
        C[A[0x0]][A[0x1]] = A[0x2];
        C[A[0x1]][A[0x0]] = A[0x2];
    }
    warshall();
    var min = [
        '',
        Infinity
    ];
    for (var i = max; i >= 0x0; i--) {
        var arr = C[i]['slice'](0x0, max + 0x1);
        var sum = arr['reduce'](function (a, b) {
            return a + b;
        });
        min[0x1] = Math['min'](min[0x1], sum);
        if (min[0x1] == sum)
            min = [
                i,
                sum
            ];
    }
    console['log'](min['join']('\x20'));
}