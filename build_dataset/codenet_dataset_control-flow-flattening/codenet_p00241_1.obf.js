var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    for (var I = 0x0; I < N; I++) {
        var MRyBla = '16|0|21|19|17|12|2|5|9|18|25|15|8|7|4|22|20|23|6|13|14|24|10|3|1|11'['split']('|');
        var bKNSHI = 0x0;
        while (!![]) {
            switch (MRyBla[bKNSHI++]) {
            case '0':
                var x1 = A[0x0];
                continue;
            case '1':
                a -= w1 * w2;
                continue;
            case '2':
                var y2 = A[0x5];
                continue;
            case '3':
                i -= w1 * z2;
                continue;
            case '4':
                a -= y1 * y2;
                continue;
            case '5':
                var z2 = A[0x6];
                continue;
            case '6':
                k -= z1 * y2;
                continue;
            case '7':
                i += y1 * x2;
                continue;
            case '8':
                var k = x1 * w2;
                continue;
            case '9':
                var w2 = A[0x7];
                continue;
            case '10':
                j += w1 * y2;
                continue;
            case '11':
                console['log'](a + '\x20' + i + '\x20' + j + '\x20' + k);
                continue;
            case '12':
                var x2 = A[0x4];
                continue;
            case '13':
                a -= z1 * z2;
                continue;
            case '14':
                i += z1 * w2;
                continue;
            case '15':
                var j = x1 * z2;
                continue;
            case '16':
                var A = Arr['shift']()['split']('\x20')['map'](Number);
                continue;
            case '17':
                var w1 = A[0x3];
                continue;
            case '18':
                var a = x1 * x2;
                continue;
            case '19':
                var z1 = A[0x2];
                continue;
            case '20':
                j -= y1 * w2;
                continue;
            case '21':
                var y1 = A[0x1];
                continue;
            case '22':
                k += y1 * z2;
                continue;
            case '23':
                j += z1 * x2;
                continue;
            case '24':
                k += w1 * x2;
                continue;
            case '25':
                var i = x1 * y2;
                continue;
            }
            break;
        }
    }
}