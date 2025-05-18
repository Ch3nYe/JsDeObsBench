var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var m = Arr['shift']() - 0x0;
    var N = [];
    for (var i = 0x0; i < n; i++) {
        N[i] = [];
        for (var j = 0x0; j < n; j++) {
            N[i][j] = Infinity;
            if (i == j)
                N[i][j] = 0x0;
        }
    }
    var arr = [];
    for (var i = 0x0; i < m; i++) {
        var kruwxH = '1|3|2|4|0|5'['split']('|');
        var mfDrmn = 0x0;
        while (!![]) {
            switch (kruwxH[mfDrmn++]) {
            case '0':
                N[a][b] = c;
                continue;
            case '1':
                var abc = Arr['shift']()['split'](',')['map'](Number);
                continue;
            case '2':
                var b = abc[0x1];
                continue;
            case '3':
                var a = abc[0x0];
                continue;
            case '4':
                var c = abc[0x2] / 0x64;
                continue;
            case '5':
                N[b][a] = c;
                continue;
            }
            break;
        }
    }
    var city = [0x0];
    var cost = 0x0;
    while (!![]) {
        if (city['length'] == n)
            break;
        var min = Infinity;
        var select = -0x1;
        for (var i = 0x0; i < city['length']; i++) {
            for (var j = 0x0; j < n; j++) {
                if (city['indexOf'](j) != -0x1)
                    continue;
                if (N[city[i]][j] < min) {
                    select = j;
                    min = N[city[i]][j] - 0x1;
                }
            }
        }
        if (select != -0x1) {
            cost += min;
            city['push'](select);
        }
    }
    console['log'](cost);
}