function maxCards(arr, max) {
    var TyRqbk = {
        'fVTRj': function (x, y) {
            return x < y;
        },
        'oiKzO': function (x, y) {
            return x - y;
        }
    };
    for (var i = 0x0; TyRqbk['fVTRj'](i, TyRqbk['oiKzO'](n, TyRqbk['oiKzO'](k, 0x1))); i++) {
        var x = 0x1;
        var j = 0x0;
        while (j < k) {
            x *= arr[i + j];
            j++;
        }
        max = Math['max'](max, x);
    }
    return max;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x0;
while (!![]) {
    var nk = Arr[I]['split']('\x20')['map'](Number);
    I++;
    var n = nk[0x0];
    var k = nk[0x1];
    if (n == 0x0 && k == 0x0)
        break;
    var c = [];
    for (var i = 0x0; i < n; i++) {
        c['push'](Arr[I]);
        I++;
    }
    var maxA = 0x1;
    maxA = maxCards(c, maxA);
    var maxB = 0x1;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            var wvjUFD = '1|2|3|0|5|4'['split']('|');
            var ejPonC = 0x0;
            while (!![]) {
                switch (wvjUFD[ejPonC++]) {
                case '0':
                    maxB = maxCards(c, maxB);
                    continue;
                case '1':
                    var memo = c[i];
                    continue;
                case '2':
                    c[i] = c[j];
                    continue;
                case '3':
                    c[j] = memo;
                    continue;
                case '4':
                    c[i] = memo;
                    continue;
                case '5':
                    c[j] = c[i];
                    continue;
                }
                break;
            }
        }
    }
    console['log'](maxA > maxB ? 'NO\x20GAME' : maxB - maxA);
}